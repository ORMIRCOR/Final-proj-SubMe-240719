import React, { Component } from 'react';
import './App.css';
import RouteButton from './RouteButton.js';
import {  Header, Button, Popup } from 'semantic-ui-react';

class NiceToHave extends Component {
    constructor(props) {
        super(props);
        this.state = { //object of an NiceToHave
            // searchValues: this.props.location.state[0],
            searchOrPublishValues: this.props,
            Renovated: 0,
            Balcony: 0,
            Accessible: 0,
            Parking: 0,
            Yard: 0,
            Elevator: 0,
            Bared: 0,
            Storage: 0,
            Conditioner: 0,
            Furnished: 0,
            Animals: 0,
        };
    };

    CreateNiceToHaveArr = () => {
      //  debugger;
        var Arr = [
            {
                //  searchValues: this.props.location.state[0],
                searchOrPublishValues: this.state.searchOrPublishValues,
                NiceToHaveArr: [
                    {
                        name: "Renovated",
                        value: this.state.Renovated
                    },
                    {
                        name: "Balcony",
                        value: this.state.Balcony
                    },
                    {
                        name: "Accessible",
                        value: this.state.Accessible
                    },
                    {
                        name: "Parking",
                        value: this.state.Parking
                    },
                    {
                        name: "Yard",
                        value: this.state.Yard
                    },
                    {
                        name: "Elevator",
                        value: this.state.Elevator
                    },
                    {
                        name: "Bared",
                        value: this.state.Bared
                    },
                    {
                        name: "Storage",
                        value: this.state.Storage
                    },
                    {
                        name: "Conditioner",
                        value: this.state.Conditioner
                    },
                    {
                        name: "Furnished",
                        value: this.state.Furnished
                    },
                    {
                        name: "Animals",
                        value: this.state.Animals
                    }
                ]
            }
        ]
        return Arr;
    }

    change = e => {
     //  debugger;
        if (this.state[e.target.name] === 0) {
            this.setState({ [e.target.name]: 1 });
        }
        else {
            this.setState({ [e.target.name]: 0 });
        }
    };

    handleOpenRenovated = ()  =>
    {
       // debugger;
        if (this.state.Renovated  === 0) {
            this.setState({ Renovated : 1 });
        }
        else {
            this.setState({ Renovated : 0 });
        }
    }

    handleOpenBalcony = ()  =>
    {
       // debugger;
        if (this.state.Balcony  === 0) {
            this.setState({ Balcony : 1 });
        }
        else {
            this.setState({ Balcony : 0 });
        }
    }

    handleOpenAccessible = ()  =>
    {
       // debugger;
        if (this.state.Accessible  === 0) {
            this.setState({ Accessible : 1 });
        }
        else {
            this.setState({ Accessible : 0 });
        }
    }

    handleOpenParking = ()  =>
    {
      //  debugger;
        if (this.state.Parking  === 0) {
            this.setState({ Parking : 1 });
        }
        else {
            this.setState({ Parking : 0 });
        }
    }

    handleOpenYard = ()  =>
    {
     //   debugger;
        if (this.state.Yard  === 0) {
            this.setState({ Yard : 1 });
        }
        else {
            this.setState({ Yard : 0 });
        }
    }

    handleOpenElevator = ()  =>
    {
      //  debugger;
        if (this.state.Elevator  === 0) {
            this.setState({ Elevator : 1 });
        }
        else {
            this.setState({ Elevator : 0 });
        }
    }

    handleOpenBared = ()  =>
    {
      //  debugger;
        if (this.state.Bared  === 0) {
            this.setState({ Bared : 1 });
        }
        else {
            this.setState({ Bared : 0 });
        }
    }

    handleOpenStorage = ()  =>
    {
      //  debugger;
        if (this.state.Storage  === 0) {
            this.setState({ Storage : 1 });
        }
        else {
            this.setState({ Storage : 0 });
        }
    }

    handleOpenConditioner = ()  =>
    {
      //  debugger;
        if (this.state.Conditioner  === 0) {
            this.setState({ Conditioner : 1 });
        }
        else {
            this.setState({ Conditioner : 0 });
        }
    }

    handleOpenFurnished = ()  =>
    {
      //  debugger;
        if (this.state.Furnished  === 0) {
            this.setState({ Furnished : 1 });
        }
        else {
            this.setState({ Furnished : 0 });
        }
    }

    handleOpenAnimals = ()  =>
    {
     //  debugger;
        if (this.state.Animals  === 0) {
            this.setState({ Animals : 1 });
        }
        else {
            this.setState({ Animals : 0 });
        }
    }

    render() {
      //  debugger;

        return (

            <div>

                <Header as='h2'  color='green' textAlign='center' block >  Features not mandatory  </Header>
                {/* <div style={ {textAlign: "center"} } >
                     {NiceToHaveSelectElement}
                </div> */}
  
                <div style={{ textAlign: "center" }} >
                <br />
                <Popup onOpen={() => this.handleOpenRenovated()}  content='Renovated' name='Renovated' id='Renovated'  on='click'  hideOnScroll trigger={<Button toggle size='big'  icon='paint brush' active={this.state.Renovated}   />} /> &nbsp; 
                <Popup onOpen={() => this.handleOpenBalcony()}   content='Balcony' name='Balcony' id='Balcony' on='click'  hideOnScroll trigger={<Button toggle size='big'  icon='eye' active={this.state.Balcony} />}  /> &nbsp;
                <Popup  onOpen={() => this.handleOpenAccessible()}  content='Accessible' name='Accessible' id='Accessible' on='click'  hideOnScroll trigger={<Button toggle size='big'  icon='wheelchair' active={this.state.Accessible} />}   /> &nbsp;
                <Popup onOpen={() => this.handleOpenParking()}  content='Parking' name='Parking' id='Parking' on='click'  hideOnScroll trigger={<Button toggle size='big'  icon='car' active={this.state.Parking} />}   /> &nbsp;
                <br />
                <br />
                <br />
                <Popup onOpen={() => this.handleOpenYard()}  content='Yard' name='Yard' id='Yard' on='click'  hideOnScroll trigger={<Button toggle size='big'  icon='tree' active={this.state.Yard} />}    /> &nbsp;
                <Popup onOpen={() => this.handleOpenElevator()}  content='Elevator' name='Elevator' id='Elevator' on='click'  hideOnScroll trigger={<Button toggle size='big'  icon='paper plane outline' active={this.state.Elevator} />}   /> &nbsp;
                <Popup onOpen={() => this.handleOpenBared()}  content='Bared' name='Bared' id='Bared' on='click'  hideOnScroll trigger={<Button toggle size='big'  icon='lock' active={this.state.Bared} />}    /> &nbsp;
                <Popup onOpen={() => this.handleOpenStorage()} content='Storage' name='Storage' id='Storage' on='click'  hideOnScroll trigger={<Button toggle size='big'  icon='warehouse' active={this.state.Storage} />}   />  &nbsp;
                <br />
                <br />
                <br />
                <Popup onOpen={() => this.handleOpenConditioner()} content='Conditioner' name='Conditioner' id='Conditioner' on='click'  hideOnScroll trigger={<Button toggle size='big'  icon='snowflake outline' active={this.state.Conditioner}   />} /> &nbsp;
                <Popup onOpen={() => this.handleOpenFurnished()}  content='Furnished' name='Furnished' id='Furnished' on='click'  hideOnScroll trigger={<Button toggle size='big'  icon='bed' active={this.state.Furnished} />} /> &nbsp;
                <Popup onOpen={() => this.handleOpenAnimals()} content='Animals' name='Animals' id='Animals' on='click'  hideOnScroll trigger={<Button toggle size='big'  icon='paw' active={this.state.Animals} />}    /> &nbsp;
           
                </div>

                <br />

                {
                    (
                        this.state.searchOrPublishValues.isPublishPage === "1"
                    )
                    &&
                    <div>
                        <RouteButton value="Publish Your Sublet Now !" pathname="/SetDataToFireStore" state={this.CreateNiceToHaveArr()} />
                        {/* <RouteButton value="Publish Your Sublet Now !" pathname="/FriendlySublet" state={this.CreateNiceToHaveArr()} /> */}

                    </div>
                }
                {
                    (
                        this.state.searchOrPublishValues.IsSearchPage === "1"
                    )
                    &&
                    <div>
                        <RouteButton value="Filter Your Results Now !" pathname="/CheckFireBase" state={this.CreateNiceToHaveArr()} />
                    </div>
                }
                <div>
                </div>
                <br />
                <br />

            </div>
        );
    }
}

export default NiceToHave;

// import { arrayExpression } from '@babel/types';

        // const NiceToHaveSelectElement = constNamesProp.map((Prop) => {
        //     return (
        //         <div >
        //             {Prop.name}  <br />
        //             <Checkbox name={Prop.name} id={Prop.name} onChange={e => this.change(e)} toggle />   <br />
        //         </div>
        //     )
        // });

    // AxiosPushSubletToServer = () => {

    //     var NiceToHaveParamsToPost = {
    //         // SubletID : ???,
    //         isRenovated: this.state.isRenovated,
    //         isBalcony: this.state.isBalcony,
    //         isAccessible: this.state.isAccessible,
    //         isParking: this.state.isParking,
    //         isYard: this.state.isYard,
    //         isElevator: this.state.isElevator,
    //         isBared: this.state.isBared,
    //         isStorage: this.state.isStorage,
    //         isConditioner: this.state.isConditioner,
    //         isFurnished: this.state.isFurnished,
    //         isAnimals: this.state.isAnimals,
    //     }

    //     var PublishSublet = 
    //     {

    //         CheckIn : this.state.searchOrPublishValues.dateCheckIn,
    //         CheckOut : this.state.searchOrPublishValues.dateCheckOut,
    //         Price : this.state.searchOrPublishValues.PricePerNight,
    //         NumOfRooms:  this.state.searchOrPublishValues.NumOfRooms,
    //         SquareMeter: this.state.searchOrPublishValues.PricePerNight,
    //         FloorNu : this.state.searchOrPublishValues.squareMeter,
    //         SubDescription : this.state.searchOrPublishValues.squareMeter,
    //         isFacebook : this.state.searchOrPublishValues.isFacebook, 
    //         Roommates : this.state.searchOrPublishValues.Roommates, 
    //         SubUserID : this.state.searchOrPublishValues.SubUserID, 
    //        // SubLocationID : this.state.searchOrPublishValues.SubUserID, 
    //        //  SubPropID :
    //        // Popularity :
    //     }
    //     // כרגע שני התהליכים האלה לא כתובים בשרת לדבר עם ברק
    //     await axios.post('http://proj.ruppin.ac.il/bgroup75/prod/api/NiceToHave/', NiceToHaveParamsToPost); // להכניס את הכתובת של הפרסום מודעות 

    //     await axios.post('http://proj.ruppin.ac.il/bgroup75/prod/api/Sublet/', PublishSublet); // להכניס את הכתובת של הפרסום מודעות 

    //     }