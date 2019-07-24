import React, { Component } from "react";
import  Analytics from './Analytics.js';

class FlexFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValues: this.props.searchValues,
      flexibleDateIn: this.props.flexibleDateIn,
      flexibleDateOut: this.props.flexibleDateOut,
      flexibleMaxPricePerNight: this.props.flexibleMaxPricePerNight, // כלומר במידה ואין שינוי הערכים ישארו זהים לחיפוש הרגיל ללא הגמשה
      arrResidues: this.props.arrResidues,
      arrSpecific: this.props.arrSpecific,
      arrFlexResults: [], // may to Contain the ads according to the user's flexibility settings
      up: -1
    };
  }

  // הפונקציה מקבלת מערך שמכיל את תוצאות החיפוש המוגמשות, ואת החשיבות היחסית של המחיר ומשך הסאבלט ומחזירה מערך ממוין של תוצאות חיפוש מוגמשות 
  SortFlexResult = (arrFlex) => {
   // debugger;
   // let sortedArr = [];
    let obj, distanceI, distanceJ;

    for (var i = 0; i < arrFlex.length; i++) {
      for (var j = i + 1; j < arrFlex.length; j++) {

        distanceI = arrFlex[i].PricPerNight * (Date.parse(arrFlex[i].dateCheckOut) - Date.parse(arrFlex[i].dateCheckIn)) / (1000 * 60 * 60 * 24);
        distanceJ = arrFlex[j].PricPerNight * (Date.parse(arrFlex[j].dateCheckOut) - Date.parse(arrFlex[j].dateCheckIn)) / (1000 * 60 * 60 * 24);

        if (distanceI > distanceJ) {
          obj = arrFlex[j];
          arrFlex[j] = arrFlex[i];
          arrFlex[i] = obj;
        }
      }
    }
    return arrFlex;
  }

FilterFlexSublet = () => {
 // debugger;
  var arrFlex = [], arrFlexSorted = [] ;

  arrFlex = this.state.arrResidues.filter((Apartment) =>
    (Apartment.city === this.state.searchValues.city || this.state.searchValues.city === 0 || this.state.searchValues.city === "Without preference") &&
    (Apartment.cityArea === this.state.searchValues.cityArea || this.state.searchValues.cityArea === "Without preference") &&
    Apartment.dateCheckIn >= this.state.flexibleDateIn &&
    Apartment.dateCheckOut <= this.state.flexibleDateOut &&
    Apartment.PricePerNight >= this.state.searchValues.minPrice &&
    Apartment.PricePerNight <= this.state.flexibleMaxPricePerNight &&
    (Apartment.propType === this.state.searchValues.propType || this.state.searchValues.propType === "Without preference")
  );

  arrFlexSorted = this.SortFlexResult(arrFlex);

  arrFlexSorted.map((Sublet) =>
    this.state.arrFlexResults.push(Sublet),
    this.setState(this.state)
  );
}

componentDidMount() {
 // debugger;

  this.FilterFlexSublet();

  this.setState({
    up: "1",
  });

}

render() {
  // debugger;

  return (

    <div>
      {
        (this.state.up === "1")
        &&
        <div>
          {/* <ShowResult  {...this.state} /> */}
          <Analytics  {...this.state} />    
        </div>
      }
    </div>
  );
}
}

export default FlexFilter;









