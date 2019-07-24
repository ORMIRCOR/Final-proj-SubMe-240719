import React, { Component } from 'react';
import { Card, Button, Image, Header, Rating } from 'semantic-ui-react';
import { fireStore } from './UsingFireBase';


import Carousel from 'nuka-carousel';
// import Chat from './Chat';
// import {Launcher} from 'react-chat-window';
import { RouteButtonNotFulied } from './RouteButton.js';

class LikedPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentValues: this.props.location.state,
      adsThatILiked: this.props.location.state.adsThatILiked,
      // adsThatILiked: this.props.location.state,
      arrSubletLikeToShow: [],
      messageList: [],
      up: "0"
    };
  };

  change = () => {
    // debugger;
    this.setState({ up: "2" });
  };

  OpenChat = () => {

  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }


  //check
  DeleteLikeSubletItem = (subletItem) => {
    // debugger;

    var updatedItems = [];
    var lenght = this.state.arrSubletLikeToShow.length;

    updatedItems = this.state.arrSubletLikeToShow.filter((item) =>
      item.Id != subletItem.Id
    );

    for (let index = 0; index < lenght; index++) {
      this.state.arrSubletLikeToShow.shift()
      this.state.adsThatILiked.shift()
    }
    this.setState(this.state);

    updatedItems.map((Sublet) =>
      this.state.arrSubletLikeToShow.push(Sublet),
      this.setState(this.state));
  }

  componentDidMount() {
     debugger;
  
    // moving to array in order to show to the screen
    this.state.adsThatILiked.map((Sublet) =>
      this.state.arrSubletLikeToShow.push(Sublet),
      this.setState(this.state)
    );
    // עכשיו אני לוקח את כל המודעות שהוא אהב ושומר בפיירבייס כדי שפעם הבאה שהוא מתחבר הוא יוכל לצפות בהם   
    var checklocalstorage = localStorage.getItem('UserLoggedIn');
    var cityRef = fireStore.collection("HistoryLike").doc(checklocalstorage); // הכנס מידע לתוך הפיירבייס
   // var cityRef = fireStore.instance.collection("HistoryLike").document(checklocalstorage);

    debugger;

    this.state.adsThatILiked.map( (Sublet , i)  =>
    {
  
 fireStore.collection("HistoryLike").doc(checklocalstorage + i).set({
       like : {
      Id: Sublet.Id,
      owner: checklocalstorage,
      city: Sublet.city,
      cityArea: Sublet.cityArea,
      dateCheckIn: Sublet.dateCheckIn,
      dateCheckOut: Sublet.dateCheckOut,
      PricePerNight: Sublet.PricePerNight,
      propType: Sublet.propType,
      squareMeter: Sublet.squareMeter,
      FloorNu: Sublet.FloorNu,
      GeneralDescription: Sublet.GeneralDescription,
      Roommates: Sublet.Roommates,
      pic1: Sublet.pic1,
      pic2: Sublet.pic2,
      pic3: Sublet.pic3,
      totalQualityLevel: 1,
      showDateCheckIn: Sublet.showDateCheckIn,
      showDateCheckOut: Sublet.showDateCheckOut,
      lat: Sublet.lat,
      lng: Sublet.lng,
      fullAdress: Sublet.fullAdress,
      NiceToHaveArr: [
        {
          name: "Renovated",
          value: Sublet.NiceToHaveArr[0].value
        },
        {
          name: "Balcony",
          value: Sublet.NiceToHaveArr[1].value
        },
        {
          name: "Accessible",
          value: Sublet.NiceToHaveArr[2].value
        },
        {
          name: "Parking",
          value: Sublet.NiceToHaveArr[3].value
        },
        {
          name: "Yard",
          value: Sublet.NiceToHaveArr[4].value
        },
        {
          name: "Elevator",
          value: Sublet.NiceToHaveArr[5].value
        },
        {
          name: "Bared",
          value: Sublet.NiceToHaveArr[6].value
        },
        {
          name: "Storage",
          value: Sublet.NiceToHaveArr[7].value
        },
        {
          name: "Conditioner",
          value: Sublet.NiceToHaveArr[8].value
        },
        {
          name: "Furnished",
          value: Sublet.NiceToHaveArr[9].value
        },
        {
          name: "Animals",
          value: Sublet.NiceToHaveArr[10].value
        }
      ]

      },

    },  
    
     { merge: true }


      ) // כאן הוא מסיים
    
    }
   )

     }

  NiceToHave = (SubletObj) => {
    // debugger;
    var NiceToHave = [];

    NiceToHave = SubletObj.NiceToHaveArr.map((NiceToHave) => {
      if (NiceToHave.value === 1) {
        return <p> {NiceToHave.name} </p>
      }
    }
    );
    return NiceToHave;
  }

  OneSubletCard = (SubletObj) => {
    // debugger;
    return (
      <div style={{ alignItems: "stretch", display: "block", marginLeft: "auto", marginRight: "auto" }}  >
        <br />
        <Card >
          <Carousel>
            <Image src={SubletObj.pic1} />
            <Image src={SubletObj.pic2} />
            <Image src={SubletObj.pic3} />
          </Carousel>
          <Card.Content>
            {/* <Card.Header>  {SubletObj.city} &nbsp;  {SubletObj.streetName} &nbsp;  {SubletObj.NumberApr}  </Card.Header> */}
            <Card.Header>  {SubletObj.fullAdress}   </Card.Header>
            <Card.Meta>
              Available at : &nbsp; {SubletObj.showDateCheckIn} -  {SubletObj.showDateCheckOut}     <br />
              Price Per Night: &nbsp; {SubletObj.PricePerNight} NIS     <br />
              prop Type:   &nbsp;  {SubletObj.propType}   <br />
              square Meter:  &nbsp; {SubletObj.squareMeter}  sqr <br />
            </Card.Meta>
            <Card.Description> General Description Of The Sublet: &nbsp; <br />   {SubletObj.GeneralDescription} <br />
              <RouteButtonNotFulied icon="map" value="View" pathname="/MapOneSublet" state={SubletObj} />

            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            This Apartment also Have:
            {this.NiceToHave(SubletObj)}
            {/* The Tatal Quality Level is :  <Rating icon='star' rating={SubletObj.totalQualityLevel} maxRating={5} disabled  /> <br /> */}
          </Card.Content>

          <Card.Content extra>
            <div className='ui two buttons'>
              < RouteButtonNotFulied value="Chat With The Owner" pathname="/Chat" state={SubletObj.owner} Id={SubletObj.fullAdress} />
              {/* < RouteButtonNotFulied  value="Chat With The Owner" pathname="/Chat" state={this.state.arrSubletLikeToShow}    /> */}
              <Button onClick={() => this.DeleteLikeSubletItem(SubletObj)} basic color='red'>  DisLike </Button>
            </div>
          </Card.Content>
        </Card>
        <br />
      </div>

    )
  }

  render() {
    // debugger;
    const likeSublet = this.state.arrSubletLikeToShow.map((ad) => {
      return (
        this.OneSubletCard(ad)
      )
    })

    return (
      <div style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} >

        <Header as='h2' color='green' textAlign='center' block> There are {this.state.arrSubletLikeToShow.length} Sublets that you LIKE ! </Header>
        {/* <Chat /> */}
        <div  >
          <Card.Group>
            {likeSublet}
          </Card.Group>
          {/* {likeSublet} */}
          <br />
        </div>


        < div className="containar" >
          <Button color="blue" onClick={() => this.props.history.goBack()} fluid  > Go Back TO your Results </Button>
          <br />
          <br />
        </div>

      </div>
    );
  }
}

export default LikedPosts;
