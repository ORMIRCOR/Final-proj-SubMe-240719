import React, { Component } from 'react';
import {  fireStore } from './UsingFireBase';
import swal from 'sweetalert';
import logo1 from './subletPic/suscces.png';
import logo2 from './subletPic/failed.jpg';
import GetUsersAnalitics from './GetUsersAnalitics';
import { Image } from 'semantic-ui-react';
// import {  DivisionOfHaifa, DivisionOfTelAviv, DivisionOfJerusalem, DivisionOfEilat } from './Data';

class SetDataToFireStore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            or: 0,
            success: "999",
            failure: "-999",
            valuesToPost: this.props.location.state[0].searchOrPublishValues,
            niceToHaveToPost: this.props.location.state[0].NiceToHaveArr,
           // Id: String(this.props.location.state[0].searchOrPublishValues.city + this.props.location.state[0].searchOrPublishValues.streetName + this.props.location.state[0].searchOrPublishValues.NumberApr),
            Id: this.props.location.state[0].searchOrPublishValues.fullAdress,
            UsersAnalitics: [],
           // cityArea:"-1"
        }

    }

    componentDidMount() {
       // debugger;

        var totalQualityLevel = this.state.niceToHaveToPost[0].value + this.state.niceToHaveToPost[1].value +  this.state.niceToHaveToPost[3].value + this.state.niceToHaveToPost[4].value + (0.5 * this.state.niceToHaveToPost[5].value) + this.state.niceToHaveToPost[8].value  +  this.state.niceToHaveToPost[9].value;           

        if(totalQualityLevel > 5)
        {
            totalQualityLevel = 5
        }

       var checklocalstorage = localStorage.getItem('UserLoggedIn'); // המייל של היוזר שמחובר בלבד
       var Userlocalstorage = JSON.parse(localStorage.getItem('UserObjectLoggedIn')); // כל האובייקט של המשתמש שמחובר
       Userlocalstorage.numberOfSublets =  Userlocalstorage.numberOfSublets + 1; 
    //  alert(checklocalstorage);
    // עדכן שהמשתמש ביצעה פרסום נוסף
   // debugger;
    fireStore.collection("Users").doc(checklocalstorage).update({ numberOfSublets: Userlocalstorage.numberOfSublets  , })
    localStorage.setItem('UserObjectLoggedIn', JSON.stringify(Userlocalstorage));
        var success = -1;
        var cityRef = fireStore.collection("Sublet").doc(this.state.Id);
      //  debugger;
        var setWithMerge = cityRef.set({
            Id: this.state.Id,
            owner: checklocalstorage,
            city: this.state.valuesToPost.city,
            cityArea: this.state.valuesToPost.cityArea,
          //  cityArea: this.state.cityArea,
          //  streetName: this.state.valuesToPost.streetName,
           // NumberApr: this.state.valuesToPost.NumberApr,
            dateCheckIn: this.state.valuesToPost.dateCheckIn,
            dateCheckOut: this.state.valuesToPost.dateCheckOut,
            PricePerNight: this.state.valuesToPost.PricePerNight,
            propType: this.state.valuesToPost.propType,
            squareMeter: this.state.valuesToPost.squareMeter,
            FloorNu: this.state.valuesToPost.FloorNu,
            GeneralDescription: this.state.valuesToPost.GeneralDescription,
           // isFacebook: this.state.valuesToPost.isFacebook,
            Roommates: this.state.valuesToPost.Roommates,
            pic1: this.state.valuesToPost.pic1,
            pic2: this.state.valuesToPost.pic2,
            pic3: this.state.valuesToPost.pic3,
            totalQualityLevel: totalQualityLevel,
            showDateCheckIn: this.state.valuesToPost.showDateCheckIn,
            showDateCheckOut: this.state.valuesToPost.showDateCheckOut,
            lat: this.state.valuesToPost.lat,
            lng: this.state.valuesToPost.lng,
            fullAdress: this.state.valuesToPost.fullAdress,
            NiceToHaveArr: [
                {
                    name: "Renovated",
                    value: this.state.niceToHaveToPost[0].value
                },
                {
                    name: "Balcony",
                    value: this.state.niceToHaveToPost[1].value
                },
                {
                    name: "Accessible",
                    value: this.state.niceToHaveToPost[2].value
                },
                {
                    name: "Parking",
                    value: this.state.niceToHaveToPost[3].value
                },
                {
                    name: "Yard",
                    value: this.state.niceToHaveToPost[4].value
                },
                {
                    name: "Elevator",
                    value: this.state.niceToHaveToPost[5].value
                },
                {
                    name: "Bared",
                    value: this.state.niceToHaveToPost[6].value
                },
                {
                    name: "Storage",
                    value: this.state.niceToHaveToPost[7].value
                },
                {
                    name: "Conditioner",
                    value: this.state.niceToHaveToPost[8].value
                },
                {
                    name: "Furnished",
                    value: this.state.niceToHaveToPost[9].value
                },
                {
                    name: "Animals",
                    value: this.state.niceToHaveToPost[10].value
                }
            ]
        },
            // { merge: true }
        )
            .then(function () {
                console.log("Document successfully written!");
                swal({
                    title: "Good job!",
                    text: "You've posted Sublet successfully!",
                    icon: "success",
                    button: "ok!",
                });
                // this.setState({ success : 1 });
                success = 1;
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
                swal({
                    title: "error!",
                    text: "You Failed to Post the Sublet",
                    icon: "error",
                    button: "ok!",
                });
            });

        this.setState({ success: success });
        this.setState(this.state);
        this.setState({ success: 1 });
    }

    render() {
      //  debugger;
        if (this.state.success === 1) {
            return (

                <div>
                    {/* <img src={logo1} alt="Sucsses" /> */}
                    {/* <Image src={logo1} fluid centered alt="Sucsses" /> */}
                    <Image src={logo1} centered alt="Sucsses" />
                    {/* <Notifications {...this.state} /> */}
                    <GetUsersAnalitics {...this.state} />
                </div>
            )
        }

        else {
            return (

                <div>
                    <img src={logo2}  alt="Failed"  />
                </div>
            )
        }
    }
}

export default SetDataToFireStore;

        //  this.getMyStory();
        //   var formData1 = new FormData();
        //   formData1.append('subletPic', this.state.valuesToPost.pic1 , this.state.valuesToPost.pic1.name);

        //   var formData2 = new FormData();
        //   formData2.append('subletPic', this.state.valuesToPost.pic2 , this.state.valuesToPost.pic2.name);

      //  rentContract: JSON.parse(this.state.valuesToPost.rentContract),
            // rentContract : new FormData().append(
            //     'rentContract',
            //     this.state.valuesToPost.rentContract,
            //     this.state.valuesToPost.rentContract.name
            //     ),
           // rentContract: JSON.parse(this.state.valuesToPost.rentContract),
           // picture:  this.state.valuesToPost.pictures[0],
            // formData2,
           // pic3: this.state.valuesToPost.pic1,


    // getMyStory() {
    //        debugger;

    //     var items = [];
    //     var item;
    //     //  fireStore.settings({ timestampsInSnapshots: true});
    //     fireStore.collection("UserAnalitics").get().then((snapshot) => {
    //         //   debugger;
    //         snapshot.docs.map((doc) => {
    //             item = doc.data()
    //             items.push(item)
    //         });
    //         this.setState({
    //             UsersAnalitics: items,
    //             or: 1
    //         });
    //     });
    // }