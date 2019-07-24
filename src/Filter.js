import React, { Component } from "react";
import CalFlex from "./CalFlex";
// import Axios from 'axios';
// import { database, fireStore } from './UsingFireBase';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = { //object of an ad
      NiceToHaveArr: this.props.NiceToHaveArr,
      searchValues: this.props.searchValues,
      arrSpecific: [], // Contains ads that are completely relevant to the search settings
      arrResidues: [], // Contains the relevant ad residue from all ads
      filterNiceToHave: [], // Contains the relevant ad residue from all ads
      ApartmentsArr: this.props.ApartmentsArrFirebase,

      goToCalFlex: 0,
    };
  };

  updateState = () => {
   // debugger;
    // const { NiceToHaveArr, searchValues } = this.props.location.state[0];
    var filterArrSpecific = []; // Contains ads that are completely relevant to the search settings
    var filterarrResidues = []; // Contains the relevant ad residue from all ads
    var filterNiceToHave = [];

    // FILTER בודק תאימות של הדירות, בני - בכוונה כתבתי את זה ככה כי אין אפשרות לעשות לולאה מקוננת עם
    for (let i = 0; i < this.state.ApartmentsArr.length; i++) {
      let unFeet = 0;
      for (let j = 0; j < this.state.ApartmentsArr[i].NiceToHaveArr.length; j++) {
        if (((this.state.ApartmentsArr[i].NiceToHaveArr[j].value < parseInt(this.state.NiceToHaveArr[j].value)))) {
          unFeet = 1;
          break;
        }
      }
     // debugger;
      if (unFeet === 0) {
        filterNiceToHave.push(this.state.ApartmentsArr[i]);
      }
    }
  //  debugger;
    if (filterNiceToHave.length === 0) {
      return;
    }

    else {
      filterNiceToHave.map((Sublet) =>
        this.state.filterNiceToHave.push(Sublet),
        this.setState(this.state));
    }

   // debugger;

    filterArrSpecific = this.state.filterNiceToHave.filter((Apartment) =>
      (Apartment.city === this.state.searchValues.city || this.state.searchValues.city === 0 || this.state.searchValues.city === "Without preference") &&
      (Apartment.cityArea === this.state.searchValues.cityArea || this.state.searchValues.cityArea === "Without preference" ) &&
      Apartment.dateCheckIn >= this.state.searchValues.dateCheckIn &&
      Apartment.dateCheckOut <= this.state.searchValues.dateCheckOut &&
      Apartment.PricePerNight >= this.state.searchValues.minPrice &&
      Apartment.PricePerNight <= this.state.searchValues.maxPrice &&
     (Apartment.propType === this.state.searchValues.propType || this.state.searchValues.propType === "Without preference") 
    );

    this.setState({ filterArrSpecific })

    filterArrSpecific.map((Sublet) =>
      this.state.arrSpecific.push(Sublet),
      this.setState(this.state)
    );

    filterarrResidues = this.state.filterNiceToHave.filter((Apartment) =>
      !(
        (Apartment.city === this.state.searchValues.city || this.state.searchValues.city === 0 || this.state.searchValues.city === "Without preference" )  &&
        (Apartment.cityArea === this.state.searchValues.cityArea || this.state.searchValues.cityArea === "Without preference") &&
        Apartment.dateCheckIn >= this.state.searchValues.dateCheckIn &&
        Apartment.dateCheckOut <= this.state.searchValues.dateCheckOut &&
        Apartment.PricePerNight >= this.state.searchValues.minPrice &&
        Apartment.PricePerNight <= this.state.searchValues.maxPrice &&
       ( Apartment.propType === this.state.searchValues.propType || this.state.searchValues.propType === "Without preference")
      )
    );

    filterarrResidues.map((Sublet) =>
      this.state.arrResidues.push(Sublet),
      this.setState(this.state)
    );

    this.setState({ goToCalFlex: 1 });
  }


  componentDidMount() {
   // debugger;
   // this.getMyStory();
   this.updateState();

  }

  render() {
    // debugger;
    // תומר
    if (this.state.goToCalFlex) {
      return <CalFlex  {...this.state} />
    }

    else {
      return (

        <div>
          <p>fgg</p>


        </div>
      )
    }
    // }

    //     fetchApartmentsData = () =>
    //     {

    //       // const api_key = '161d130b6575207c8c50e85fd94ac56d';
    //       // let url = 'http://api.themoviedb.org/X/';
    //       // const mode = 'search/movie?query=';
    //       // const movieName = '&query=' + encodeURI(this.state.txt);
    //       // const key = '&api_key=' + api_key;

    //         const url =  "http://proj.ruppin.ac.il/bgroup75/prod/api/Sublet";
    //         const url2 =  "http://proj.ruppin.ac.il/bgroup75/prod/api/Sublet?newSublet=" + this.props;
    //         fetch(url) 
    //         .then( response => response.json() )
    //         .then(parsedJSON => parsedJSON.results.map(Apartment => (
    //            {
    //           //   userId : '${Apartment.userId}', // ?? ככה אמורים לכתוב את זה 
    //              SubletID: `${Apartment.SubletID}`,
    //              CheckIn : `${Apartment.CheckIn}`,
    //              CheckOut:  `${Apartment.CheckOut}`,
    //              Price: `${Apartment.Price}`,
    //              NumOfRooms :  `${Apartment.NumOfRooms}`,
    //              SquareMeter :  `${Apartment.SquareMeter}`,
    //              FloorNu :  `${Apartment.FloorNu}`,
    //              SubDescription :  `${Apartment.SubDescription}`,
    //              isFacebook :  `${Apartment.isFacebook}`,
    //              Roommates :  `${Apartment.Roommates}`,
    //              SubUserID :  `${Apartment.SubUserID}`,
    //              SubLocationID :  `${Apartment.SubLocationID}`,
    //              SubPropID :  `${Apartment.SubPropID}`,
    //              Popularity :  `${Apartment.Popularity}`
    //            }
    //         )))
    //         .then(data => this.setState({
    //              ApartmentsArr: data  // כאן אמורים להיות לי את הדירות

    //         }))
    //         .catch(error => console.log('failed', error))
    //     }


    // Axios.get(`http://proj.ruppin.ac.il/bgroup75/prod/api/sublet`)

    // .then(res => {
    //     console.log(res)

    // const arrSublets = res.data;
    //   console.log(arr)
    // this.setState({AxiosApartmentsArr : arrarrSublets});
    // debugger;

    // })



  }
}

export default Filter;
