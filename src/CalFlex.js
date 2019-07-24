import React, { Component } from "react";
import FlexFilter from "./FlexFilter";

const PriceCategoryPerNight = [150, 250, 350, 500, 650, 750, 850, 1000];
const PriceflexibleRange = [0.2, 0.15, 0.12, 0.05, 0.05, 0.06, 0.06, 0.06];

const subletDurationCategory = [3, 5, 10, 14, 21, 30, 90];
const subletDurationFlexCategory = [1, 2, 3, 3, 4, 7, 10];

class CalFlex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValues: this.props.searchValues,
      flexibleDateIn: this.props.searchValues.dateCheckIn,
      flexibleDateOut: this.props.searchValues.dateCheckOut,
      flexibleMaxPricePerNight: this.props.searchValues.maxPrice, // כלומר במידה ואין שינוי הערכים ישארו זהים לחיפוש הרגיל ללא הגמשה
      durationSublet: (this.props.searchValues.dateCheckOut - this.props.searchValues.dateCheckIn) / (1000 * 60 * 60 * 24),
      arrResidues: this.props.arrResidues,
      arrSpecific: this.props.arrSpecific,
      up:-1
    };
  }

  // הפונקציה מקבלת תאריך בצורת מחרוזת ומחזירה אובייקט מסוג תאריך בהתאם למחרוזת התאריך שחוזר הוא התאריך המוגמש 
  newDate = (date, operator) => {
  // debugger;

    let rightIndex = -22, i = 0, varNewDate = -111;

    while (i < subletDurationCategory.length && this.state.durationSublet >= subletDurationCategory[i]) {
      i++;
    }

    rightIndex = i;

    if (operator === "+") {
      varNewDate = date + (subletDurationFlexCategory[rightIndex] * (1000 * 60 * 60 * 24))
    }

    if (operator === "-") {
      varNewDate = date - (subletDurationFlexCategory[rightIndex] * (1000 * 60 * 60 * 24))
    }

    return varNewDate;
  }

  // הפונקציה מחשבת ומחזירה את המחיר החדש ללילה - "המחיר הגמיש" - בהתאם לווקטורים בתחילת המסמך 
  newMaxPricePerNight = () => {
  //  debugger;
    let rightIndex = -22, i = 0, newPrice = -111111;

    while (i < PriceCategoryPerNight.length && this.state.searchValues.maxPrice >= PriceCategoryPerNight[i]) {
      i++;
    }

    rightIndex = i;

    newPrice = parseInt(this.state.searchValues.maxPrice * (PriceflexibleRange[rightIndex] + 1));
    return newPrice;

  }

  componentDidMount() {
  // debugger;

    this.setState({
      up: "1",
    });

    if (this.state.searchValues.flexiblePrice === "1") {
      this.setState({
        flexibleMaxPricePerNight: this.newMaxPricePerNight(),
      });
    }
      if (this.state.searchValues.flexibleCheckOut === "1") {
        this.setState({
          flexibleDateOut: this.newDate(this.state.searchValues.dateCheckOut, "+"),
        });
      }
      if (this.state.searchValues.flexibleCheckIn === "1") {
        this.setState({
          flexibleDateIn: this.newDate(this.state.searchValues.dateCheckIn, "-"),
        });
      }
    }
  
  render() {
   // debugger;
    return (
      <div>
               {
                   ( this.state.up === "1" ) 
                   &&         
                    <div>
                        <FlexFilter  {...this.state} />
                    </div>
                }     
      </div>
    );
  }
}

export default CalFlex;





