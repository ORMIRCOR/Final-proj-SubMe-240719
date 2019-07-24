import React, { Component } from "react";
import { belongingVector, UserPreferences , subletDurationCategory, maxPriceCategoryPerNight  } from './Data.js';
import Axios from 'axios';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { //object of an ad
            userId: this.props.userId,
            //  duration : "",
            durationKod: "",
            durationBelonging: "",
            durationDeviationValue: "", // ערך הסטייה מעניין אותי אך ורק אם הוא חיובי כי אז אני יכול להגמיש תוצאות למעלה במחיר ובמשך
            priceKod: "",
            priceBelonging: "",
            priceDeviationValue: "",
            absDeviation: "",
            deviationValue: "",
            userPreference: UserPreferences,
            AxiosUserPreference: [],
            subletDurationCategory: subletDurationCategory,
            maxPriceCategoryPerNight: maxPriceCategoryPerNight,
            belongingVector: belongingVector,
            GoToSmartCity: 0
        };
    };

    AxiosPost = () =>
    {
        var NewUserProfile = {
           // UserId : this.state.searchValues.UserId,
           UserId : 333,
            durationKod: this.state.durationKod,
            durationBelonging: this.state.durationBelonging,
            priceKod: this.state.priceKod,
            priceBelonging: this.state.priceBelonging,
            priceDeviationValue: this.state.priceDeviationValue,
            durationDeviationValue: this.state.durationDeviationValue // ערך הסטייה מעניין אותי אך ורק אם הוא חיובי כי אז אני יכול להגמיש תוצאות למעלה במחיר ובמשך
          }
      
          Axios.post('http://proj.ruppin.ac.il/bgroup75/prod/api/UserProfile/', NewUserProfile);
    }

    // מקבלת את כל העדפות המשתמש ובונה מערך שמכיל את הקודים של מחיר הסאבלט
    buildPriceVector = () => {
        debugger;
        let arr = [];
        for (var i = 0; i < this.state.userPreference.length; i++) {
            arr.push(this.state.userPreference[i].PriceKod);
        }

        return arr;
    }

    // הפונקציה מחשבת ומחזירה את אחוז השייכות של משתמש בקטגוריה מסויימת, בהתאם לווקטור השייכות והסטייה מהקטגוריה
    Belonging = () => {
        let  i = 0;
        debugger;
 
        while( i < this.state.belongingVector.length &&  
           !( this.state.absDeviation >= this.state.belongingVector[i].range[0] &&
              this.state.absDeviation <= this.state.belongingVector[i].range[1] )
            )
        {
           i++;
        }
 
        return  this.state.belongingVector[i].Percent;;
    }

    // מקבלת את כל העדפות המשתמש ובונה מערך שמכיל את הקודים של משך הסאבלט
    buildDurationVector = () => {
        debugger;
        let arr = [];
        for (var i = 0; i < this.state.userPreference.length; i++) {
            arr.push(this.state.userPreference[i].DurationKod);
        }

        return arr;
    }

    // הפונקציה מקבלת ווקוטר כללי, ווקטור ספציפי של המחפש ומחשבת ערכים רלוונטיים
    CalculateVector = (personAttributeVector, vectorCtegory) => {
     debugger;
        var sumOfTheVector = 0, meanResult = 0, category = 0, deviationValue = 0, absDeviation = 0;

        for (let i = 0; i < personAttributeVector.length; i++) {
            sumOfTheVector = sumOfTheVector + personAttributeVector[i];
        }

        meanResult = sumOfTheVector / personAttributeVector.length; // חישוב ממוצע לווקטור השיוך למשך חיפוש הסאבלט
        category = meanResult.toFixed(); // מעגל את התוצאה לשלם הקרוב ביותר
        absDeviation = Math.abs(meanResult - category); // הערך המוחלט של הסטייה 

       this.setState({ absDeviation: absDeviation });
    
        deviationValue = (meanResult - category) * vectorCtegory[category]; // in order to know the number (money, duration...) of the deviation

        this.setState({ deviationValue: deviationValue });

        return category;
    }

    updateState2 = () => {
        debugger;
      
        this.setState({ durationBelonging: this.Belonging() });

        this.setState({ priceKod: this.CalculateVector(this.buildPriceVector(), this.state.maxPriceCategoryPerNight ) });
        var p = this.state.deviationValue;
        this.setState({ priceDeviationValue: p });
        this.setState({ priceBelonging: this.Belonging() });
        this.setState({ GoToSmartCity: 1 });

    }

    updateState1 = () => {
        debugger;

        // Axios.get(`http://proj.ruppin.ac.il/bgroup75/prod/api/UserPreferences/?` + this.state.userId ) // כאן יש לי כרגע את ההעדפות של משתמש יחיד
        // .then(res => {
        //   const arrUserPreference = res.data;
        //   this.setState({ AxiosUserPreference: arrUserPreference });
        //   debugger;
        // })
    
        this.setState({ durationKod: this.CalculateVector(this.buildDurationVector(), this.state.subletDurationCategory ) });
        var d = this.state.deviationValue;
        this.setState({ durationDeviationValue: d });
      
    }


    componentDidMount() {
        debugger;
        this.updateState2();
    }

    componentWillMount() {
        debugger;

        this.updateState1();
    }

    render() {
        debugger;

          // תומר
        if(this.state.GoToSmartCity)
        {
            this.AxiosPost();
          return  (< SmartCity {...this.state} />) 
        }

        return (
            <div>
           
                <h2> Depending on your previous searches </h2>
                <p>  your durationKod {this.state.durationKod}   </p>
                <p>  your Belonging to this DURATION category {this.state.durationBelonging}   </p>
                {/* <p>  durationDeviationValue  {this.state.durationDeviationValue}  </p> */}
                <p>  priceKod   {this.state.priceKod}  </p>
                <p>   your Belonging to this PRICE category   {this.state.priceBelonging}  </p>
                {/* <p>  priceDeviationValue  {this.state.priceDeviationValue}    </p> */}
                
               {/* < SmartCity /> */}

            </div>
        );
    }
}

// A function that receives the vector of the searcher's MOST POPULAR CITY SUBLET and calculates relevant values
class SmartCity extends Component {
    constructor(props) {
        super(props);
        this.state = { //object of an ad
            userId: this.props.userId,
            WithoutPreferencePercent: "",
            HaifaPercent: "",
            JerusalemPercent: "",
            TlvPercent: "",
            EilatPercent: "",
            userPreference: UserPreferences,
            AxiosPush:0,
          //  userPreference: this.props.AxiosUserPreference,
        };
    };

    AxiosPostSmartCity = () =>
    {
        debugger;
        var NewCityBelonging= {
          //  UserId : this.state.searchValues.UserId,
             UserId : 333,
            WithoutPreferencePercent: this.state.WithoutPreferencePercent ,
            HaifaPercent: this.state.HaifaPercent ,
            JerusalemPercent: this.state.JerusalemPercent , 
            TlvPercent: this.state.TlvPercent ,
            EilatPercent: this.state.EilatPercent ,   
            
          }
      
          Axios.post('http://proj.ruppin.ac.il/bgroup75/prod/api/CityBelonging/', NewCityBelonging);
    }

       // מקבלת את כל העדפות המשתמש ובונה מערך שמכיל את הקודים של עיר הסאבלט
       buildCityVector = () => {
        let arr = [];
        for (var i = 0; i < this.state.userPreference.length; i++) {
            arr.push(this.state.userPreference[i].CityKod);
        }
        return arr;
    }


    updateState = () =>
    {
        debugger;
        var cityVector = [];

        cityVector = this.buildCityVector(); // מערך המכיל את כל הקודים של הערים שהמשתמש חיפש

        var city = [];
        city["0"] = 0;
        city["4"] = 0;
        city["2"] = 0;
        city["3"] = 0;
        city["7"] = 0;

        var Percent00, Percent04, Percent02, Percent03, Percent07;

        for (let index = 0; index < cityVector.length; index++) {
            city[cityVector[index]]++;
        }

        Percent00 = parseFloat(city["0"] / cityVector.length);
        Percent04 = parseFloat(city["4"] / cityVector.length);
        Percent02 = parseFloat(city["2"] / cityVector.length);
        Percent03 = parseFloat(city["3"] / cityVector.length);
        Percent07 = parseFloat(city["7"] / cityVector.length);

        this.setState({
            WithoutPreferencePercent: Percent00,
            HaifaPercent: Percent04,
            JerusalemPercent: Percent02,
            TlvPercent: Percent03,
            EilatPercent: Percent07,
            AxiosPush: 1
        });
    }

    componentDidMount() {
        debugger;
        this.updateState();
    }

    render() {

        if(this.state.AxiosPush)
        {
               this.AxiosPostSmartCity();
        }

        return (
            <div>
                     <h2> your likable cities </h2>
                <p>  Without Preference {this.state.WithoutPreferencePercent}   </p>
                <p>  Haifa {this.state.HaifaPercent}   </p>
                <p>  Jerusalem  {this.state.JerusalemPercent}  </p>
                <p>  Tlv   {this.state.TlvPercent}  </p>
                <p>  Eilat   {this.state.EilatPercent}  </p>

                <br />
                <br />
             
                {/* < SmartCityArea /> */}
                
            </div>
        );
    }
}





// // A function that receives the vector of the searcher's MOST POPULAR CITYAREA SUBLET and calculates relevant values
// class SmartCityArea extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { //object of an ad
//             userId: this.props.userId,
//             WithoutPreferencePresent: "",
//             NorthPercent: "",
//             CenterPercent: "",
//             SouthPercent: "",
//             userPreference: []
//         };
//     };
       
//              //לשרת עם נתוני השיוך לאיזורים בערים י POST  
//     fetchPostCityAreaData() {
//         var data = {
//             "userId": this.state.userId,
//             "WithoutPreferencePercent": this.state.WithoutPreferencePercent,
//             "NorthPercent": this.state.NorthPercent,
//             "CenterPercent": this.state.CenterPercent,
//             "SouthPercent": this.state.SouthPercent,
//         }

//         fetch("https://....", { //// ?????
//             method: "POST",
//             headers: headers,
//             body: JSON.stringify(data)
//         })
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 console.log(data)
//             });
//     }

//           // מקבלת את כל העדפות המשתמש ובונה מערך שמכיל את הקודים של האיזור בעיר הסאבלט
//           buildCityAareaVector = ({ objList }) => {
//             let arr = [];
//             for (var i = 0; i < objList.length; i++) {
//                 arr.push(objList[i].CityArea);
//             }
//             return arr;
//         }

//           // עמ לייבא את כל ווקטורי העדפות של משתמש יחיד
//           fetchData() {
//             fetch('put some url here') /// ?????
//                 .then(response => response.json())
//                 .then(parsedJSON => parsedJSON.results.map(obj => (
//                     {
//                         userId: '${obj.userId}',
//                         DurationKod: '${obj.DurationKod}',
//                         PriceKod: '${obj.PriceKod}',
//                         CityKod: '${obj.CityKod}',
//                         CityArea: '${obj.CityArea}'
//                     }
//                 )))
//                 .then(userPreference =>
//                     this.setState({
//                         userPreference,
//                         isloading: false
//                     }))
//                 .catch(error => console.log('failed', error))
//         }

//     render() {

//         fetchData();

//         var cityAreaVector = []; 

//         cityAreaVector = buildCityAreaVector(this.state.userPreference); // מערך המכיל את כל הקודים של הערים שהמשתמש חיפש

//         var cityArea = [];
//         cityArea["Without-Preference"] = 0;
//         cityArea["North"] = 0;
//         cityArea["Center"] = 0;
//         cityArea["South"] = 0;

//         var calPercentAll, calPercentNorth, calPercentCenter, calPercentSouth;

//         for (let index = 0; index < cityAreaVector.length; index++) {
//             this.cityArea[cityAreaVector[index]]++;
//         }

//         calPercentAll = parseFloat(cityArea["Without-Preference"] / cityAreaVector.length);
//         calPercentNorth = parseFloat(cityArea["North"] / cityAreaVector.length);
//         calPercentCenter = parseFloat(cityArea["Center"] / cityAreaVector.length);
//         calPercentSouth = parseFloat(cityArea["South"] / cityAreaVector.length);

//         this.setState({
//             WithoutPreferencePresent: calPercentAll,
//             NorthPercent: calPercentNorth,
//             CenterPercent: calPercentCenter,
//             SouthPercent: calPercentSouth,
//         });

//         fetchPostCityAreaData();

//         return (
//             <div>
//                 <p> benny </p>
//                 { < Filter  {...this.props.searchValues} /> }
//             </div>
//         );
//     }
// }


export default Profile;



    // updateState = () => {
    //     debugger;
    //     // var arr = [];
     
    //     this.setState({ durationKod: this.CalculateVector(this.buildDurationVector(), this.state.subletDurationCategory ) });
    //     var d = this.state.deviationValue;
    //     this.setState({ durationDeviationValue: d });
      
    //     this.setState({ durationBelonging: this.Belonging() });

    //     this.setState({ priceKod: this.CalculateVector(this.buildPriceVector(), this.state.maxPriceCategoryPerNight ) });
    //    var p = this.state.deviationValue;
    //     this.setState({ priceDeviationValue: p });
    //     this.setState({ priceBelonging: this.Belonging() });

    // }

