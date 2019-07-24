import React, { Component } from 'react';
import { PublishTypesOfApartments, PublishCountryAreaCategory, PublishCityAreaCategory, ApartmentStack } from './Data.js';
// import RouteButton from './RouteButton.js';
import NiceToHave from './NiceToHave.js';
import { Button, Form, Header, Input } from 'semantic-ui-react';
import swal from 'sweetalert';
// import console = require('console');
// import Pictures from './subletPic';
import { fireStore } from './UsingFireBase';
import NewLogIn from './NewLogIn.js';
import { GoogleComponent } from 'react-google-location';
const API_KEY = "AIzaSyDv54o8dvZbSo3fMkBdwZm_NTJKQSJcdnc";

export const DivisionOfHaifa =
{
  startNorth: 32.9,
  endNorth: 32.8114,
  startCenter: 32.8114,
  endCenter: 32.7929,
  startSouth: 32.7929,
  endSouth: 32.7614,
  name: "Haifa",
}

export const DivisionOfTelAviv =
{
  startNorth: 32.1338,
  endNorth: 32.0808,
  startCenter: 32.0808,
  endCenter: 32.0561,
  startSouth: 32.0561,
  endSouth: 32.0326,
  name: "Tel-Aviv",
}

export const DivisionOfJerusalem =
{
  startNorth: 31.8137,
  endNorth: 31.7962,
  startCenter: 31.7962,
  endCenter: 31.7872,
  startSouth: 31.7872,
  endSouth: 31.3498,
  name: "Jerusalem",
}

export const DivisionOfEilat =
{
  startNorth: 29.4697,
  endNorth: 29.562,
  startCenter: 29.562,
  endCenter: 29.5511,
  startSouth: 29.5511,
  endSouth: 29.5079,
  name: "Eilat",
}

class Publish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  userId: "123",
      goToNiceToHave: "",
      isPublishPage: "1",
      IsSearchPage: "0",
      streetName: "",
      NumberApr: "",
      city: "",
      cityArea: "",
      dateCheckIn: "",
      dateCheckOut: "",
      PricePerNight: "",
      numOfRooms: "",
      squareMeter: "",
      FloorNu: "",
      GeneralDescription: "",
      // isFacebook: "0",
      Roommates: "0",
      propType: "-999",
      ApartmentsArr: ApartmentStack,
      rentContract: "-1",
      pic1: "-1",
      pic2: "-1",
      pic3: "-1",
      // pictures: [],
      showDateCheckIn: "",
      showDateCheckOut: "",
      lat: "",
      lng: "",
      fullAdress: "",
      currentDate: new Date()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  aoutoSelectionCityArea = () => {
    // debugger;

    switch (this.state.city) {
      case "Tel-Aviv":
        if (this.state.lat <= DivisionOfTelAviv.startNorth
          && this.state.lat >= DivisionOfTelAviv.endNorth) {
          this.setState({ cityArea: "North" });
        }
        if (this.state.lat <= DivisionOfTelAviv.startCenter
          && this.state.lat >= DivisionOfTelAviv.endCenter) {
          this.setState({ cityArea: "Center" });
        }
        //  debugger;

        if (this.state.lat <= DivisionOfTelAviv.startSouth
          && this.state.lat >= DivisionOfTelAviv.endSouth) {
          this.setState({ cityArea: "South" });
        }
        //  debugger;

        break;

      case "Haifa":
        if (this.state.lat <= DivisionOfHaifa.startNorth
          && this.state.lat >= DivisionOfHaifa.endNorth) {
          this.setState({ cityArea: "North" });
        }
        if (this.state.lat <= DivisionOfHaifa.startCenter
          && this.state.lat >= DivisionOfHaifa.endCenter) {
          this.setState({ cityArea: "Center" });
        }
        if (this.state.lat <= DivisionOfHaifa.startSouth
          && this.state.lat >= DivisionOfHaifa.endSouth) {
          this.setState({ cityArea: "South" });
        }
        break;
      //  debugger;

      case "Jerusalem":
        if (this.state.lat <= DivisionOfJerusalem.startNorth
          && this.state.lat >= DivisionOfJerusalem.endNorth) {
          this.setState({ cityArea: "North" });
        }
        if (this.state.lat <= DivisionOfJerusalem.startCenter
          && this.state.lat >= DivisionOfJerusalem.endCenter) {
          this.setState({ cityArea: "Center" });
        }
        if (this.state.lat <= DivisionOfJerusalem.startSouth
          && this.state.lat >= DivisionOfJerusalem.endSouth) {
          this.setState({ cityArea: "South" });
        }
        break;

      case "Eilat":
        if (this.state.lat <= DivisionOfEilat.startNorth
          && this.state.lat >= DivisionOfEilat.endNorth) {
          this.setState({ cityArea: "North" });
        }
        if (this.state.lat <= DivisionOfEilat.startCenter
          && this.state.lat >= DivisionOfEilat.endCenter) {
          this.setState({ cityArea: "Center" });
        }
        if (this.state.lat <= DivisionOfEilat.startSouth
          && this.state.lat >= DivisionOfEilat.endSouth) {
          this.setState({ cityArea: "South" });
        }
        break;
    }


  }

  onChangeAdress = e => {
    // debugger;
    this.setState(() => ({
      fullAdress: e.place,
      lat: e.coordinates.lat,
      lng: e.coordinates.lng,
    }));

    this.aoutoSelectionCityArea();
  }

  uploadPic1 = e => {
    // debugger;
    e.preventDefault();
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      //   debugger;
      // as a good practice, use a function to set state
      this.setState(() => ({
        pic1: reader.result,
      }));
    };
    reader.readAsDataURL(file);
    //  debugger;
  }

  uploadPic2 = e => {
    //  debugger;
    e.preventDefault();
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      //  debugger;
      // as a good practice, use a function to set state
      this.setState(() => ({
        pic2: reader.result,
      }));
    };
    reader.readAsDataURL(file);
    //   debugger;
  }

  uploadPic3 = e => {
    //   debugger;
    e.preventDefault();
    let file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      //   debugger;
      // as a good practice, use a function to set state
      this.setState(() => ({
        pic3: reader.result,
      }));
    };
    reader.readAsDataURL(file);
    //  debugger;
  }

  getMyStory = () => {

    var ApartmentsArr = [];
    var Apartment;
    //   debugger;
    fireStore.collection("Sublet").get().then((snapshot) => {
      //  debugger;
      snapshot.docs.map((doc) => {
        Apartment = doc.data()
        ApartmentsArr.push(Apartment)
      });
    });
    return ApartmentsArr;
  }

  componentDidMount() {
    //  debugger;
    var ApartmentsArr = [];
    ApartmentsArr = this.getMyStory();
    this.setState({ ApartmentsArr: ApartmentsArr });



  }

  isTariffSubletExorbitant = (e) => {
     debugger;
    e.preventDefault();
    if (this.state.city === "" || this.state.cityArea === "" || this.state.propType === "" || this.state.squareMeter === ""
      || this.state.PricePerNight === "") {
      swal("NOTE - In order that this function will work , the fileds city, propType, squareMeter have to be Full of information");
      return 0;
    }

    else {
       debugger;
      var SimilarSublet = [], Tariff = 0;

      SimilarSublet = this.state.ApartmentsArr.filter((Apartment) =>
        Apartment.city === this.state.city &&
        Apartment.cityArea === this.state.cityArea &&
        Apartment.propType === this.state.propType &&
        ((Apartment.squareMeter * 0.83) <= this.state.squareMeter && (Apartment.squareMeter * 1.17)
          >= this.state.squareMeter)
      );
        debugger;
      if (SimilarSublet.length === 0) {
        swal("We did not find a suitable apartment for comparison");
        return 0;
      }
      // debugger;

      SimilarSublet.map((Apartment) =>
        Tariff = Tariff + Apartment.PricePerNight
      );
      //  debugger;
      Tariff = Tariff / SimilarSublet.length;

      if (this.state.PricePerNight >= (Tariff * 1.25)) {
        swal("NOTE - Exorbitant price for such an apartment");
        return 0;
      }
      else {
        swal("NOTE - Affordable price for such an apartment");
        return 0;
      }
    }
  }

  handleSubmit() {
   //  debugger;
    var d = new Date();
    var Userlocalstorage = JSON.parse(localStorage.getItem('UserObjectLoggedIn'));

    if (   Userlocalstorage.numberOfSublets >= 5   ) {
      swal({
        title: "Err",
        text: "NOTE - You can maximum 4 Sublets per year",
        icon: "warning",
      });
      return false;
    }
    

    if (     ( (this.state.dateCheckOut - this.state.dateCheckIn) / (1000 * 60 * 60 * 24)) > 120 ) {
      swal({
        title: "Err",
        text: "NOTE - You can`t publish a Sublet that bigger than 120 days",
        icon: "warning",
      });
      return false;
    }

    if (this.state.dateCheckOut < this.state.dateCheckIn) {
      swal({
        title: "Err",
        text: "NOTE - The CheckOut Date have to be BIGGER than CheckIn Date",
        icon: "warning",
      });
      return false;
    }
    if (((this.state.dateCheckOut) !== "" && this.state.dateCheckOut < d.getTime()) || ((this.state.dateCheckIn) !== "" && this.state.dateCheckIn < d.getTime())) {
      swal({
        title: "Err",
        text: "NOTE - you cannot enter date that small than todey...",
        icon: "warning",
      });
      return false;
    }
    if (this.state.fullAdress === "")  {
      swal({
        title: "Err",
        text: "NOTE - You have to enter the full adress of the Sublet",
        icon: "warning",
      });
      return false;
    }

    if (this.state.city === "" || this.state.city === "Choose City" )  {
      swal({
        title: "Err",
        text: "NOTE - You have to enter the City of the Sublet",
        icon: "warning",
      });
      return false;
    }

    if (this.state.propType === "-999" || this.state.propType === "Choose Property Type" )  {
      swal({
        title: "Err",
        text: "NOTE - You have to enter the Type of the Property Sublet",
        icon: "warning",
      });
      return false;
    }

    if (this.state.pic1 === "-1" || this.state.pic2 === "-1" || this.state.pic3 === "-1" )  {
      swal({
        title: "Err",
        text: "NOTE - You have to upload a 3 pictures Of the Sublet",
        icon: "warning",
      });
      return false;
    }

    //  debugger;
    this.setState({ goToNiceToHave: 1 });
  }

  changeTuggle = (name) => {
    // debugger;
    if (this.state[name] === "0") {
      this.setState({ [name]: "1" });
    }
    else {
      this.setState({ [name]: "0" });
    }
  };

  change = e => {

    //  debugger;

    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "dateCheckIn") {
      this.setState({ showDateCheckIn: e.target.value });
    }
    if (e.target.name === "dateCheckOut") {
      this.setState({ showDateCheckOut: e.target.value });
    }

    if (e.target.type === "date") {
      this.setState({ [e.target.name]: Date.parse(e.target.value) });
    }
    if (e.target.type === "number") {
      this.setState({ [e.target.name]: parseInt(e.target.value) });
    }
  };

  render() {
    // debugger;

    var Userlocalstorage = JSON.parse(localStorage.getItem('UserObjectLoggedIn'));

    const NamesList = PublishTypesOfApartments.map((Type, index) => { return (<option key={index} > {Type.TypeName} </option>) });

    const NamesCities = PublishCountryAreaCategory.map((City, i) => { return (<option name="city" key={i} value={City.name} > {City.name} </option>) });

    const NameCityArea = PublishCityAreaCategory.map((Area, i) => { return (<option name="cityArea" key={i} value={Area.kod} > {Area.name} </option>) })

    // תומר
    if (this.state.goToNiceToHave === 1) {
      // debugger;

      return <NiceToHave  {...this.state} />
    }

    if (Userlocalstorage === null) {
      return (
        <div>
          < NewLogIn />
        </div>
      )
    }

    return (
     // <div style={{ backgroundColor: "#fff9c4" }}>
         <div style={{ backgroundColor: "#fff9c4" }}>
        <Header as='h2' color='green' textAlign='center' block>   Publish A Sublet </Header>
        <Form onSubmit={() => this.handleSubmit()}>
          <Form.Field>

            {/* <Header color='teal' textAlign='center'>Location of the property</Header> */}
            <select name="city" required onChange={e => this.change(e)} >
              {NamesCities}
            </select> <br />
            {/* //    Please Write The Full Adress Of The Sublet */}
            <GoogleComponent
              apiKey={API_KEY}
              language={'en'}
              country={'country:isr'}
              coordinates={true}
              onChange={e => { this.onChangeAdress(e) }}
            />


            {/* <input type="text" focus placeholder="StreetName..." name="streetName" maxlength="12" autoComplete="off" required onChange={e => this.change(e)} /><br />
            <br />
            <input type="number" placeholder="Number apartment..." name="NumberApr" min="0" autoComplete="off" required onChange={e => this.change(e)} /><br />
          */}
          </Form.Field>

          {/* <Form.Field>
            <select name="cityArea" required onChange={e => this.change(e)} >
              {NameCityArea}
            </select>
          </Form.Field> */}

          <br />
          <Form.Field>
            {/* <Header color='teal' textAlign='center'> the sublet is Avalible at </Header> */}
            <Input icon="sign-in" type="date" placeholder="CheckIn..." name="dateCheckIn" required onChange={e => this.change(e)} /> <br />
            <Input icon="sign-out" type="date" name="dateCheckOut" required onChange={e => this.change(e)} /> <br />
          </Form.Field>

          <Form.Field>
            <select name="propType" required onChange={e => this.change(e)} >
              <option> Choose Property Type </option>
              {NamesList}
            </select >
          </Form.Field>

          <Form.Field>
            <input type="number" name="squareMeter" placeholder="Square Meters..." required min="17" autoComplete="off" onChange={e => this.change(e)} />
            <br />
          </Form.Field>

          <Form.Field>
            <input type="number" name="FloorNu" placeholder="Floor Number..." min="0" autoComplete="off" required onChange={e => this.change(e)} />
          </Form.Field>

          <Form.Field>
            <Input type="number" icon="money" placeholder="Sublet price per night..." name="PricePerNight" min="0" autoComplete="off" required onChange={e => this.change(e)} /> <br />
            <Button fluid color="olive" onClick={(e) => this.isTariffSubletExorbitant(e)}> Check Your Tariff Sublet  </Button>
          </Form.Field>
          <br />
          <Form.Field>
            <textarea rows="5" cols="20" placeholder="General description of the sublet..." maxlength="100" name="GeneralDescription" required onChange={e => this.change(e)} ></textarea>
          </Form.Field>

          {/* <Form.Field>
            <Header color='teal' textAlign='center'> is Facebook ?
             <Checkbox name="isFacebook" onChange={() => this.changeTuggle("isFacebook")} toggle />   <br />
            </Header>
          </Form.Field> */}

          <Form.Field>
            <input type="number" name="Roommates" placeholder="Number Of Roommates..." min="0" max="5" autoComplete="off" required step="1" onChange={e => this.change(e)} /> <br />
          </Form.Field>

          <Form.Field>
            <input type="number" name="numOfRooms" placeholder="Number Of Rooms..." min="0" max="7" autoComplete="off" step="1" required onChange={e => this.change(e)} /> <br />
          </Form.Field>

          {/* <Form.Field>
            <Header color='teal' icon="file" textAlign='center'> UpLoad rent Contract
          <Input type="file" name="rentContract" placeholder="UpLoad Contract" onChange={e => this.uploadFile(e)} /> <br />
            </Header>
          </Form.Field> */}

          <Form.Field>
            <Header color='teal' icon="image" textAlign='center'> UpLoad Pictures
             <Input type="file" accept="image/*" name="pic1" onChange={e => this.uploadPic1(e)} /> <br />
              <Input type="file" accept="image/*" name="pic2" onChange={e => this.uploadPic2(e)} /> <br />
              <Input type="file" accept="image/*" name="pic3" onChange={e => this.uploadPic3(e)} /> <br />
            </Header>
          </Form.Field>

          <br />
          <Button fluid color="green" type='submit'> Submit </Button>
        </Form>

        <br />

      </div>

    );
  }
}

export default Publish;

// if (e.target.name === "city") {
//   this.setState({ [e.target.name]: parseInt(e.target.value) });
// }

// onDrop(picture) {
//   debugger;
//   this.setState({
//     pictures: this.state.pictures.concat(picture),
//   });
// }

/* <ImageUploader
withIcon={true}
buttonText='Choose images'
onChange={this.onDrop}
imgExtension={['.jpg', '.gif', '.png', '.gif']}
maxFileSize={5242880}
/> */

//  this.setState({ [e.target.name]: e.target.files[0] });


//  this.setState({ [e.target.name]: e.target.value });

//  this.setState({ [e.target.name]: e.target.files[0].name });

// var formData = new FormData();
//  formData.append('subletPic', e.target.files[0] , e.target.files[0].name);
//  formData.append('./subletPic', e.target.files[0]);

// change = e => {
//   this.setState({ [e.target.name]: e.target.value });
// };

// changeTuggle = e => {
//   //   debugger;
//   if (this.state[e.target.name] === "0") {
//     this.setState({ [e.target.name]: "1" });
//   }
//   else {
//     this.setState({ [e.target.name]: "0" });
//   }
// };

// ArrState = () => {
//   var Arr = [
//     {
//       //  userId: "123",
//       city: parseInt(this.state.city),
//       cityArea: this.state.cityArea,
//       streetName: this.state.streetName,
//       NumberApr: parseInt(this.state.NumberApr),
//       dateCheckIn: Date.parse(this.state.dateCheckIn),
//       dateCheckOut: Date.parse(this.state.dateCheckOut),
//       PricePerNight: parseInt(this.state.PricePerNight),
//       // numOfRooms: parseInt(this.state.numOfRooms),
//       squareMeter: parseInt(this.state.squareMeter),
//       FloorNu: parseInt(this.state.FloorNu),
//       GeneralDescription: this.state.GeneralDescription,
//       isFacebook: this.state.isFacebook,
//       Roommates: parseInt(this.state.Roommates),
//       propType: this.state.propType,
//     }
//   ]
//   return Arr;
// }

//   import logo1 from './subletPic/david.png';
//   import logo2 from './subletPic/tevez.jpg';
//   import logo3 from './subletPic/victor.jpg';

{/* <label for="embedpollfileinput" class="ui huge red right floated button">
              <i class="ui upload icon"></i>
              Upload image
          </label> */}