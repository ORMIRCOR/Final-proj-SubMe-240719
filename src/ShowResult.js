import React, { Component } from 'react';
import RouteButton from './RouteButton.js';
import Carousel from 'nuka-carousel';
import { Card, Button, Header, Image, Rating } from 'semantic-ui-react'
import swal from 'sweetalert';
import { RouteButtonNotFulied } from './RouteButton.js';

class ShowResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrSpecific: this.props.arrSpecific,
      arrFlexResults: this.props.arrFlexResults,
      adsThatILiked: [],
      city: this.props.searchValues.city,
      linkAttractions: "",
      color: "",
      markers: [],
    };
  };

  AddLikeSubletItem = (subletItem) => {
   // debugger;
    for (let index = 0; index < this.state.adsThatILiked.length; index++) {
      if (subletItem.Id === this.state.adsThatILiked[index].Id) {
        swal(" you already liked this sublet :)  " + subletItem.Id);
        return;
      }
    }
    swal(" you like Sublet :)  " + subletItem.Id);
    this.state.adsThatILiked.push(subletItem)
    this.setState(this.state)
    this.setState({ color: "#fff9c4" });
  }

  DeleteLikeSubletItem = (subletItem) => {
  //  debugger;
    swal(" you dont like Sublet :(  " + subletItem.Id);
    var updatedItems = [];
    var lenght = this.state.adsThatILiked.length;

    updatedItems = this.state.adsThatILiked.filter((item) =>
      item.Id != subletItem.Id
    );

    this.setState({ color: "#ffffff" });

    for (let index = 0; index < lenght; index++) {
      this.state.adsThatILiked.shift()
    }
    this.setState(this.state);
    //  debugger;
    updatedItems.map((Sublet) =>
      this.state.adsThatILiked.push(Sublet),
      this.setState({ color: "#ffffff" }),
      this.setState(this.state));
  }

  ArrState = () => {

    var Arr = [];

    Arr = this.state.adsThatILiked; // סתם שתי שיטות לראות שזה עובד

    Arr = this.state.adsThatILiked.map((sublet) => { return sublet }
    );

    return Arr;
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
      <div style={{  display: "block", marginLeft: "auto", marginRight: "auto" }} >
        <br />
        < Card >
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
            <Card.Description> General Description Of The Sublet: &nbsp; <br />  {SubletObj.GeneralDescription}  <br /> 
            <RouteButtonNotFulied  icon="map" value="View" pathname="/MapOneSublet" state={SubletObj} />
             </Card.Description>
          </Card.Content>
          <Card.Content extra>
            This Apartment also Have:
            {this.NiceToHave(SubletObj)}
            {/* The Tatal Quality Level is :  <Rating icon='star' rating={SubletObj.totalQualityLevel} maxRating={5} disabled /> <br /> */}
          </Card.Content>

          <Card.Content extra>
            <div className='ui two buttons'   >
              <Button active={parseInt(this.state.color)} onClick={() => this.AddLikeSubletItem(SubletObj)} basic color='green' >  Like </Button>
              <Button onClick={() => this.DeleteLikeSubletItem(SubletObj)} basic color='red' >  DisLike </Button>  <br />
            
            </div>
            <br />
   
          </Card.Content>
          <br />
        </Card>
      </div>
    )
  }

 
  componentDidMount() {
   // debugger;
    var markersToshow = [];

    switch (this.state.city) {
      case "Tel-Aviv":
        this.setState({
          linkAttractions: "https:blog.il.funzing.com/%D7%90%D7%98%D7%A8%D7%A7%D7%A6%D7%99%D7%95%D7%AA-%D7%91%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91-4-%D7%A8%D7%A2%D7%99%D7%95%D7%A0%D7%95%D7%AA-%D7%A9%D7%9C%D7%90-%D7%AA%D7%A8%D7%A6%D7%95-%D7%9C%D7%A4/"
        });
        break;
      case "Haifa":
        this.setState({
          linkAttractions: "https://www.mako.co.il/travel-israel/magazine/Article-c87b2cbe7811761006.htm",
        });
        break;
      case "Jerusalem":
        this.setState({
          linkAttractions: "https://www.mako.co.il/travel-israel/100_reasons_Jerusalem/Article-1eb3db15cc55651006.htm",
        });
        break;
      case "Eilat":
        this.setState({
          linkAttractions: "https://eilat.city/list/%D7%90%D7%98%D7%A8%D7%A7%D7%A6%D7%99%D7%95%D7%AA",
        });
        break;
        case "Without preference":
        this.setState({
          linkAttractions: "https:blog.il.funzing.com/%D7%90%D7%98%D7%A8%D7%A7%D7%A6%D7%99%D7%95%D7%AA-%D7%91%D7%AA%D7%9C-%D7%90%D7%91%D7%99%D7%91-4-%D7%A8%D7%A2%D7%99%D7%95%D7%A0%D7%95%D7%AA-%D7%A9%D7%9C%D7%90-%D7%AA%D7%A8%D7%A6%D7%95-%D7%9C%D7%A4/"
        });
        break;

    }
   // debugger;
  }

  render() {
   // debugger;

    const Exactly = this.state.arrSpecific.map((ad) => { return (this.OneSubletCard(ad)) })

    const Flex = this.state.arrFlexResults.map((ad) => { return (this.OneSubletCard(ad)) })

    return (
      <div>
        <Header as='h2' color='green' textAlign='center' block>  We found {this.state.arrSpecific.length + this.state.arrFlexResults.length} Sublets that Matches your search settings </Header>
        <RouteButtonNotFulied icon="map" value="View The City" pathname="/MapContainer" state={this.state} />

        <a href={this.state.linkAttractions}> Recommended city attractions </a>
        <Header as='h2' color='teal' textAlign='center'> specific fit Sublet </Header>
        <br />
        <div >
          <Card.Group>
            {Exactly}
          </Card.Group>
          <br />
        </div>

        <Header as='h2' color='teal' textAlign='center'> Flex results sublet </Header>
        <div>
          <br />
          <Card.Group>
            {Flex}
          </Card.Group>
          <br />
        </div>

        <RouteButton value="Watch Sublet Ads That You liked " pathname="/LikedPosts" state={this.state} />
        {/* <RouteButton value="Watch Sublet Ads That You liked " pathname="/LikedPosts" state={this.state.adsThatILiked} /> */}
        <br />

      </div >
    );
  }
}

export default ShowResult;


