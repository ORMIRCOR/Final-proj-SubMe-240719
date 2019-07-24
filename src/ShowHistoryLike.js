import React, { Component } from 'react';
import { fireStore } from './UsingFireBase';
import { RouteButtonNotFulied } from './RouteButton.js';
import { Card, Button, Image, Header, Rating } from 'semantic-ui-react';
import Carousel from 'nuka-carousel';


class ShowHistoryLike extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            adsThatILiked: this.props.adsThatILiked,
         }
    }

      NiceToHave = (SubletObj) => {
         debugger;
        var NiceToHave = [];
    
        NiceToHave = SubletObj.like.NiceToHaveArr.map((NiceToHave) => {
          if (NiceToHave.value === 1) {
            return <p> {NiceToHave.name} </p>
          }
        }
        );
        return NiceToHave;
      }
    
      OneSubletCard = (SubletObj) => {
         debugger;
        return (
          <div style={{ alignItems: "stretch", display: "block", marginLeft: "auto", marginRight: "auto" }}  >
            <br />
            <Card >
              <Carousel>
                <Image src={SubletObj.like.pic1} />
                <Image src={SubletObj.like.pic2} />
                <Image src={SubletObj.like.pic3} />
              </Carousel>
              <Card.Content>
                <Card.Header>  {SubletObj.like.fullAdress}   </Card.Header>
                <Card.Meta>
                  Available at : &nbsp; {SubletObj.like.showDateCheckIn} -  {SubletObj.like.showDateCheckOut}     <br />
                  Price Per Night: &nbsp; {SubletObj.like.PricePerNight} NIS     <br />
                  prop Type:   &nbsp;  {SubletObj.like.propType}   <br />
                  square Meter:  &nbsp; {SubletObj.like.squareMeter}  sqr <br />
                </Card.Meta>
                <Card.Description> General Description Of The Sublet: &nbsp; <br />   {SubletObj.like.GeneralDescription} <br />
                  <RouteButtonNotFulied icon="map" value="View" pathname="/MapOneSublet" state={SubletObj.like} />
    
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                This Apartment also Have:
                {this.NiceToHave(SubletObj)}
              </Card.Content>
    
              <Card.Content extra>
                <div className='ui two buttons'>
                  < RouteButtonNotFulied value="Chat With The Owner" pathname="/Chat" state={SubletObj.like.owner} Id={SubletObj.like.fullAdress} />
                </div>
              </Card.Content>
            </Card>
            <br />
          </div>
    
        )
      }

  
    render() { 
        debugger;
        const likeSublet = this.state.adsThatILiked.map((ad) => {
            return (
              this.OneSubletCard(ad)
            )
          })
      
          return (
            <div style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} >
      
              <Header as='h2' color='green' textAlign='center' block> There are {this.state.adsThatILiked.length} Sublets that you LIKE ! </Header>
              {/* <Chat /> */}
              <div  >
                <Card.Group>
                  {likeSublet}
                </Card.Group>
                <br />
              </div>
      
            </div>
          );
        }
    }

export default ShowHistoryLike;