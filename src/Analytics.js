import React, { Component } from "react";
import ShowResult from "./ShowResult";
import { fireStore } from './UsingFireBase';

export const subletDurationCategory = [ 0 ,3, 5, 10, 14, 21, 30, 90]; //The duration of sublet ads that the user (searcher) marked as a like

export const maxPriceCategoryPerNight = [ 0 ,150, 250, 350, 500, 650, 750, 850, 1000]; //The maximum price a user searched for a sublet ad per night

export const maxPriceCategory = [1500, 3000, 4500, 6000, 7500, 9000, 10500, 12000]; //The maximum price a user searched for a sublet ad 

export const commonCountryAreaCategory = [0, 4, 2, 3, 7]; //In order to find the user's most common area search at israel (haifa, jerusalem,tlv, eilat)

export const commonCityAreaCategory = ["Without preference", "North", "Center", "South"]; //In order to find the user's most common area search at the city

class Analytics extends Component {

  constructor(props) {
    super(props);
    this.state = { //object of an ad
      searchValues: this.props.searchValues,
      arrFlexResults: this.props.arrFlexResults,
      arrSpecific: this.props.arrSpecific,
      next: 0,
    };
  };

  // פונקציה שמקבלת פרמטר, כגון משך הסאבלט ומחיר ללילה וכן מקבלת ווקטור שיוך מתאים ומחזירה את המיקום של הפרמטר בווקטור
  categoryNumbersIndex = (userSelection, arrCategory) => {
   // debugger;
    let rightIndex = -22, i = 0;

    while (i < arrCategory.length && userSelection >= arrCategory[i]) {
      i++;
    }

    rightIndex = i;

    return rightIndex;
  }

  updateState = () => {
  //  debugger;
    var Userlocalstorage = localStorage.getItem('UserLoggedIn'); // !!! localStorage לשים לב טוב טוב טוב לאיך ממירים 
    var duration = (this.state.searchValues.dateCheckOut - this.state.searchValues.dateCheckIn) / (1000 * 60 * 60 * 24);
    var personDurationCategory = this.categoryNumbersIndex(duration, subletDurationCategory);
   var personPriceCategory = this.categoryNumbersIndex(this.props.searchValues.maxPrice, maxPriceCategoryPerNight);
   var personCityCategory = this.state.searchValues.city;
 //  debugger;
  var cityRef = fireStore.collection("UserAnalitics").doc(Userlocalstorage);
 // debugger;
  var setWithMerge = cityRef.set({
    mail:Userlocalstorage,
    cityKod: personCityCategory,
    durationKod: personDurationCategory,
    priceKod: personPriceCategory,
  },
     { merge: true }
  )
    .then(function () {
      console.log("Document successfully written!");

    })
    .catch(function (error) {
      console.error("Error writing document: ", error);

    });

  this.setState({ next: 1 });
  this.setState(this.state);

  }

  componentDidMount() {
   // debugger;
    this.updateState();
    this.setState({ next: 1 });
  }

  render() {
 // debugger;
    if (this.state.next === 1) {
      return (
        <div>
          {/* < Profile  {...this.state} /> */}
          < ShowResult  {...this.state} />
        </div>
      )
    }
    else {
      return (
        <div>
          {/* <h2> Your Duration Category  </h2> */}
        </div>
      );
    }
  }
}

export default Analytics;

  // Axios.get(`http://proj.ruppin.ac.il/bgroup75/prod/api/UserPreferences\?` + this.state.searchValues )      
  // .then(res => {
  //     console.log(res)

  // const SearchAnaliticsFromDB = res.data;
  // this.setState({SearchAnaliticsFromDB : SearchAnaliticsFromDB});
  // })


      // var NewUserPreferences = {
    //   UserId : this.state.searchValues.UserId,
    //   DurationKod :this.state.personPriceCategory ,
    //   PriceKod : this.state.personCityCategory ,
    //   CityKod :  this.state.personCityAreaCategory ,
    //   CityArea : this.state.personDurationCategory ,
    // }

    // Axios.post('http://proj.ruppin.ac.il/bgroup75/prod/api/UserPreferences/', NewUserPreferences);

    // Axios.post(`http://proj.ruppin.ac.il/bgroup75/prod/api/UserPreferences`,{
        //     NewP: obj,
        // })   


          // PostAnalitics = () => {
  //       debugger;
  //   var Userlocalstorage = JSON.parse(localStorage.getItem('UserLoggedIn'));

  //   var cityRef = fireStore.collection("UserAnalitics").doc("ormircor@gmail.com");
  // //  debugger;
  //   var setWithMerge = cityRef.set({
  //     cityKod: this.state.personCityCategory,
  //     durationKod: this.state.personDurationCategory,
  //     priceKod: this.state.personPriceCategory,
  //   },
  //     // { merge: true }
  //   )
  //     .then(function () {
  //       console.log("Document successfully written!");

  //     })
  //     .catch(function (error) {
  //       console.error("Error writing document: ", error);

  //     });

  //   this.setState({ next: 1 });
  //   this.setState(this.state);
  // }
