import React, { Component } from 'react';
// import { database, fireStore } from './UsingFireBase';
import { subletDurationCategory, maxPriceCategoryPerNight } from './Analytics';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // ApartmentsArrFirebase: " ",
            UsersAnalitics: this.props.UsersAnalitics,
            valuesToPost: this.props.valuesToPost,
            arrSubletToPush: [],
            yes: 0,
        }
    }

    componentDidMount() {
     //  debugger;

        var arrToNotification = [];
        var userValueDurationKod, userValueDurationKodMinutsOne, UserMinValuePrice, UserMaxValuePrice, userCity;
        for (let i = 0; i < this.state.UsersAnalitics.length; i++) {

            userCity = this.state.UsersAnalitics[i].cityKod;

            userValueDurationKod = subletDurationCategory[this.state.UsersAnalitics[i].durationKod];
            userValueDurationKodMinutsOne = subletDurationCategory[this.state.UsersAnalitics[i].durationKod - 1];

            UserMaxValuePrice = maxPriceCategoryPerNight[this.state.UsersAnalitics[i].priceKod];
            UserMinValuePrice = maxPriceCategoryPerNight[this.state.UsersAnalitics[i].priceKod - 1];

            var duration = (this.state.valuesToPost.dateCheckOut - this.state.valuesToPost.dateCheckIn) / (1000 * 60 * 60 * 24);
            var SubletPricePerNight = this.state.valuesToPost.PricePerNight;

            if (this.state.valuesToPost.city === userCity &&
                SubletPricePerNight <= UserMaxValuePrice &&
                SubletPricePerNight >= UserMinValuePrice &&
                duration <= userValueDurationKod &&
                duration >= userValueDurationKodMinutsOne) {

                arrToNotification.push(this.state.valuesToPost);
                this.sendingEmail(this.state.UsersAnalitics[i].mail);
                arrToNotification.map((Sublet) =>
                this.state.arrSubletToPush.push(Sublet),
                this.setState(this.state)
              );
            }
            this.setState({
                yes: 1,
     });
        }
  
        this.setState(this.state);    
    }

    sendingEmail(mail) {
      //  debugger;
       // var Userlocalstorage = localStorage.getItem('UserLoggedIn'); // להכניס את המייל של המשתמש לשליחה 
        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'reactsubme@gmail.com',
                pass: 'Aa234567'
            }
        });

        var mailOptions = {
            from: 'reactsubme@gmail.com',
            to: mail,
            subject: 'Mail FromSubMe',
            text: 'right now there is a new sublet that might suitable you !'
        };

        transporter.sendMail(mailOptions, function (error, info) {
            alert("or");
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        // transporter.sendMail(mailOptions);
    }

    render() {
      //  debugger;
        if (this.state.yes === 1) {
            return (
                <div>
                    <p> seccess </p>
                </div>
            );
        }
        else {

            return (

                <div>
                    {/* <p> loading... </p> */}
                </div>
            );
        }

    }
}

export default Notifications;


    // isMatch = () => {
    //     debugger;
    //     var arrToNotification = [];
    //     var userValueDurationKod, userValueDurationKodMinutsOne, UserMinValuePrice, UserMaxValuePrice, userCity;
    //     for (let i = 0; i < this.state.UsersAnalitics.length; i++) {

    //         userCity = this.state.UsersAnalitics[i].city;

    //         userValueDurationKod = subletDurationCategory[this.state.UsersAnalitics[i].durationKod];
    //         userValueDurationKodMinutsOne = subletDurationCategory[this.state.UsersAnalitics[i].durationKod - 1];

    //         UserMaxValuePrice = maxPriceCategoryPerNight[this.state.UsersAnalitics[i].priceKod];
    //         UserMinValuePrice = maxPriceCategoryPerNight[this.state.UsersAnalitics[i].priceKod - 1];

    //         var duration = (this.state.valuesToPost.dateCheckOut - this.state.valuesToPost.dateCheckIn) / (1000 * 60 * 60 * 24);
    //         var SubletPricePerNight = this.state.valuesToPost.PricePerNight;

    //         if (this.state.valuesToPost.city === userCity &&
    //             SubletPricePerNight <= UserMaxValuePrice &&
    //             SubletPricePerNight >= UserMinValuePrice &&
    //             duration <= userValueDurationKod &&
    //             duration >= userValueDurationKodMinutsOne) {
    //                 debugger;
    //             arrToNotification.push(this.state.valuesToPost);
    //             this.sendingEmail(this.state.UsersAnalitics[i].mail);
    //         }
    //         this.setState({ yes: 1 });
    //     }

    //     this.setState({ arrSubletToPush: arrToNotification });

    //     this.setState(this.state);

    //     // if (arrToNotification.length > 0) {
    //     //     alert(arrToNotification.length)
    //     // }

    // }
