import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker, Map } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: "-1",
      lng: "-1",
      city: "Eilat",
      zoom: 13.4,
      markers: this.props.location.state.markers,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  componentWillMount() {
   // debugger;

    var markersToshow = [];
    var markersarrSpecificToshow = [];
    var markersarrFlexResultsToshow = [];

    if (this.props.location.state.arrSpecific.length != 0) {
     markersarrSpecificToshow = this.props.location.state.arrSpecific.map((Sublet) => [{ lat: Sublet.lat, lng: Sublet.lng }]);
     markersarrSpecificToshow.map((Sublet) =>
     markersToshow.push(Sublet));
    }
   //debugger;
    if (this.props.location.state.arrFlexResults.length != 0) {
    markersarrFlexResultsToshow = this.props.location.state.arrFlexResults.map((Sublet) => [{ lat: Sublet.lat, lng: Sublet.lng }]);
    markersarrFlexResultsToshow.map((Sublet) =>
    markersToshow.push(Sublet));
    }
   // debugger;
    markersToshow.map((Sublet) =>
    this.state.markers.push(Sublet),
    this.setState(this.state));

   // debugger;
    switch (this.props.location.state.city) {
    
      case "Tel-Aviv":
        this.setState({
          lat: 32.08088,
          lng: 34.78057
        });
        break;
      case "Haifa":
        this.setState({
          lat: 32.794044,
          lng: 34.9885 
        });
        break;
      case "Jerusalem":
        this.setState({
          lat: 31.771959,
          lng: 35.217018
        });
        break;
      case "Eilat":
        this.setState({
          lat: 29.5580500,
          lng: 34.9482100
        });
        break;
        case "Without preference":
        this.setState({
          lat: 31.771959,
          lng: 35.217018,
          zoom:7.3
        });
        break;
    }
  }


  componentDidMount() {
  //  debugger;
    this.setState(this.state);
  }

  render() {
  //  debugger;
   
    return (
      <div>

        <Map
          google={this.props.google}
         // zoom={13.5}
        // zoom={7.3}
        zoom={this.state.zoom}
          style={mapStyles}
          initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
        >

       {
        this.state.markers.map( (marker) => (  <Marker  position= {{ lat: marker[0].lat, lng: marker[0].lng }} />))
       } 

        {/* {
        this.state.markers.map( (marker) => ( 
           <Marker  position= {{ lat: marker[0].lat, lng: marker[0].lng }} 
           >
           <InfoWindow
           visible={true}>
           <div>{"hey"}</div>
       </InfoWindow>
       </Marker>
           ))
       }  */}

          {/* <Marker position={{ lat: this.state.lat, lng: this.state.lng}} /> */}
        </Map>

      </div>
      // <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
      //   <Marker onClick={this.onMarkerClick} name={'current location'} />
      //   <InfoWindow

      //     visible={this.state.showingInfoWindow}
      //     onClose={this.onClose}
      //   >
      //     <div>
      //       <h4>{this.state.selectedPlace.name}</h4>
      //     </div>
      //   </InfoWindow>
      // </CurrentLocation>


    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDv54o8dvZbSo3fMkBdwZm_NTJKQSJcdnc'
})(MapContainer);

