import React, { Component } from 'react';
import { SearchTypesOfApartments, SearchCountryAreaCategory, SearchCityAreaCategory } from './Data.js';
import NiceToHave from './NiceToHave';
import { Button, Form, Checkbox, Header, Input } from 'semantic-ui-react';
import swal from 'sweetalert';
import NewLogIn from './NewLogIn.js';
import Autocomplete from 'react-google-autocomplete';
import { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react';

class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "123",
            goToNiceToHave: "-1",
            isPublishPage: "0",
            IsSearchPage: "1",
            city: "-11",
            cityArea: "-11",
            dateCheckIn: "",
            flexibleCheckIn: "0",
            dateCheckOut: "",
            flexibleCheckOut: "0",
            minPrice: "0",
            maxPrice: "",
            flexiblePrice: "0",
            propType: "-111",
            notifications: "",
            Arr: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };




    change = e => {
        // debugger;
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.type === "date") {
            this.setState({ [e.target.name]: Date.parse(e.target.value) });
        }
        if (e.target.type === "number") {
            this.setState({ [e.target.name]: parseInt(e.target.value) });
        }
    };

    handleSubmit() {
         // debugger;
        var d = new Date();
        if (this.state.dateCheckOut < this.state.dateCheckIn) {
            swal({
                title: "Err",
                text: "NOTE - The CheckOut Date have to be BIGGER than CheckIn Date",
                icon: "warning",
            });
            return false;
        }
        if ((this.state.dateCheckOut) != "" && this.state.dateCheckOut < d.getTime() || (this.state.dateCheckIn) != "" && this.state.dateCheckIn < d.getTime()) {
            swal({
                title: "Err",
                text: "NOTE - you cannot enter date that small than todey...",
                icon: "warning",
            });
            return false;
        }
        if (this.state.maxPrice < this.state.minPrice) {
            swal({
                title: "Err",
                text: "NOTE - The Maximun Price have to be BIGGER than Minimun Price",
                icon: "warning",
            });
            return false;
        }

        if (this.state.city === "-11" || this.state.city === "Choose City To Enjoy Your Sublet" ) {
            swal({
                title: "Err",
                text: "NOTE - Please choose a City",
                icon: "warning",
            });
            return false;
        }

        if (this.state.cityArea === "-11" || this.state.cityArea === "Choose City Area To Enjoy Your Sublet" ) {
            swal({
                title: "Err",
                text: "NOTE - Please choose a City Area",
                icon: "warning",
            });
            return false;
        }

        if (this.state.propType === "-111" || this.state.propType === "Choose Property Type" ) {
            swal({
                title: "Err",
                text: "NOTE - Please choose a Property Type",
                icon: "warning",
            });
            return false;
        }


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

    onPlaceSelected = ( place ) => {
       // debugger;
        //    var address = place.formatted_address,
    //    var     addressArray =  place.address_components
    //     var city = this.getCity( addressArray )
   
    //     // Set these values in the state.
    //       this.setState({
    //        city: ( city ) ? city : '',
    //       })
          };

    render() {
        //   debugger;
      
        var Userlocalstorage = JSON.parse(localStorage.getItem('UserObjectLoggedIn'));

        const NamesCities = SearchCountryAreaCategory.map((City, i) => { return (<option name="city" key={i} value={City.name} > {City.name} </option>) })

        const NamesList = SearchTypesOfApartments.map((Type, i) => { return (<option name="propType" key={i} value={Type.TypeName} > {Type.TypeName} </option>) })

        const NameCityArea = SearchCityAreaCategory.map((Area, i) => { return (<option name="cityArea" key={i} value={Area.kod} > {Area.name} </option>) })
        // debugger;
        // תומר
        if (this.state.goToNiceToHave === 1) {
            //  debugger;
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

            <div style={{ backgroundColor: "#fff9c4" }} >

                {/* <RouteButtonNotFulied icon="map" value="View With Map" pathname="/MapContainer" />   <Icon name='map' color="blue"  /> */}
                <Header as='h2' color='green' textAlign='center' block>   Search For Sublet </Header>
                <Form onSubmit={() => this.handleSubmit()}>
                    <Form.Field>
                        <select name="city" onChange={e => this.change(e)} >
                            <option> Choose City To Enjoy Your Sublet </option>
                            {NamesCities}
                        </select>
                    </Form.Field>

                    <Form.Field>
                        {/* <Autocomplete
                            style={{ width: '90%' }}
                            onPlaceSelected={(place) => {
                                console.log(place);
                            }}
                            types={['(regions)']}
                            componentRestrictions={{ country: "ru" }}
                        /> */}
               
{/*                 
                   <Autocomplete
                            style={{
                                width: '100%',
                                height: '40px',
                                paddingLeft: '16px',
                                marginTop: '2px',
                                marginBottom: '100px'
                            }}
                            onPlaceSelected={this.onPlaceSelected()}
                            types={['(regions)']}
            
                /> */}
                     
                    </Form.Field>


                    <Form.Field>
                        <select name="cityArea" onChange={e => this.change(e)} >
                            <option> Choose City Area To Enjoy Your Sublet </option>
                            {NameCityArea}
                        </select>
                    </Form.Field>

                    <Form.Field>
                        <Input type="date" name="dateCheckIn" icon="sign-in" required onChange={e => this.change(e)} /> <br />
                        <Input type="date" name="dateCheckOut" icon="sign-out" required onChange={e => this.change(e)} /> <br />
                    </Form.Field>

                    <Form.Field>
                        <Input type="number" icon="money bill alternate" min="0" name="minPrice" placeholder="Enter Your Minimun Price PerNight..." autocomplete="off" onChange={e => this.change(e)} required />
                        <br />
                        <Input type="number" icon="money bill alternate" min="0" name="maxPrice" placeholder="Enter Your Maximum Price PerNight..." autocomplete="off" onChange={e => this.change(e)} required /> <br />
                    </Form.Field>

                    <Form.Field>
                        < select name="propType" onChange={e => this.change(e)} required >
                            <option>Choose Property Type</option>
                            {NamesList}
                        </select >
                    </Form.Field>

                    <Form.Field>
                        <Checkbox label='Flexible Check In ? ' name="flexibleCheckIn" onChange={() => this.changeTuggle("flexibleCheckIn")} />   <br />
                    </Form.Field>

                    <Form.Field>
                        <Checkbox label='Flexible Check Out ?' name="flexibleCheckOut" onChange={() => this.changeTuggle("flexibleCheckOut")} />   <br />
                    </Form.Field>

                    <Form.Field>
                        <Checkbox label='Flexible Price ?' name="flexiblePrice" onChange={() => this.changeTuggle("flexiblePrice")} />   <br />
                    </Form.Field>

                    <br />
                    <Button fluid color="green" type='submit' > Submit </Button>
                    <br />
                </Form>

                <br />


            </div>

        );
    }
}


export default SearchPage;





           // componentDidMount() {
    //     // debugger;
    //     // Axios.get(`http://proj.ruppin.ac.il/bgroup75/prod/api/sublet`) // כאן יש לי כרגע את כל הסאבלטים שהגיעו מהמסד

    //     // .then(res => {
    //     //     console.log(res)

    //     // const arr = res.data;
    //     //   console.log(arr)
    //     // this.setState({Arr:arr});
    //     // debugger;
    //     // })

    //     // Axios.post(`http://proj.ruppin.ac.il/bgroup75/prod/api/UserPreferences`,{
    //     //     NewP: obj,
    //     // })    
    // }

