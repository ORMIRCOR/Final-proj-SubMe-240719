import React, { Component } from 'react';
import { fireStore } from './UsingFireBase';
import swal from 'sweetalert';
import logo from './subletPic/illustrationangryoldwoman.jpg';


class FriendlySublet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valuesToPost: this.props.location.state[0].searchOrPublishValues,
            niceToHaveToPost: this.props.location.state[0].NiceToHaveArr,
            Id: this.props.location.state[0].searchOrPublishValues.fullAdress,
            success: "999",
            failure: "-999",
            subCounter: "-1"
        }
    }

    getMyStory() {
        debugger;
        //  var owner = localStorage.getItem('UserLoggedIn');
        var owner = "rabin@gmail.com";

      //  var duration = (this.state.valuesToPost.dateCheckOut - this.state.valuesToPost.dateCheckIn) / (1000 * 60 * 60 * 24)
        // var docRef = fireStore.collection("FriendlySublet").doc(owner);
        var item;
        var items= [];
        fireStore.collection("FriendlySublet").get().then((snapshot) => {
              debugger;
             snapshot.docs.map((doc) => {
                 item = doc.data()
                 items.push(item)
             });
             debugger;
             this.setState({
                subCounter: items,
             });
         });

        debugger;

        // if (item >= 4 || duration >= 120) { // במקרה והסאבלט לא חברתי
        //     debugger;
        //     this.setState({
        //         subCounter: 999,
        //         failure: 1
        //     });
        //     swal("NOTE - The Sublet Is Not Friendly... :( ");
        // }

        // else {
        //     debugger;
        //     if (item < 4 && duration <= 120) {
        //       //  docRef.set({ subletCounter: item + 1 }); // עדכן את כמות הסאבלטים שאדם ביצע
        //         this.setState({
        //             subCounter: item + 1,
        //             success: 1
        //         });
        //     }
        // }
    }

    componentWillMount() {
        debugger;
        this.getMyStory();
    }

    componentDidMount() {
        debugger;
        this.cal();
    }

    cal()
    {
        var duration = (this.state.valuesToPost.dateCheckOut - this.state.valuesToPost.dateCheckIn) / (1000 * 60 * 60 * 24)
        var item;
    
        if (this.state.subCounter >= 4 || duration >= 120) { // במקרה והסאבלט לא חברתי
            debugger;
            this.setState({
                subCounter: 999,
                failure: 1
            });
            swal("NOTE - The Sublet Is Not Friendly... :( ");
        }

        else {
            debugger;
            if (this.state.subCounter < 4 && duration <= 120) {
              //  docRef.set({ subletCounter: item + 1 }); // עדכן את כמות הסאבלטים שאדם ביצע
              item = this.state.subCounter;
                this.setState({
                    subCounter: item + 1,
                    success: 1
                });
            }
        }
    }

    render() {
        debugger;
        if (this.state.success === 1) {
            // debugger;
            return (
                <div>
                    success
              </div>
            )
        }

        if (this.state.failure === 1) {
            return (
                <div>
                    failure
                    <img src={logo} alt="Failed" />
                </div>
            )
        }
        return (
            <div>
                0
            </div>
        );
    }
}

export default FriendlySublet;