import React, { Component } from 'react';
import { GoogleApiWrapper, Marker, Map } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class MapOneSublet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.location.state.lat,
      lng: this.props.location.state.lng,
      city: "Eilat",
      zoom: 13.4,
      markers: this.props.location.state.markers,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  };

  componentWillMount() {
   // debugger;
  }


  componentDidMount() {
   // debugger;
    this.setState(this.state);
  }

  render() {
   // debugger;
   
    return (
      <div>

        <Map
          google={this.props.google}
          zoom={this.state.zoom}
          style={mapStyles}
          initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
        >

       {
          <Marker  position= {{ lat: this.state.lat, lng: this.state.lng }} />
       } 
        </Map>
      </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDv54o8dvZbSo3fMkBdwZm_NTJKQSJcdnc'
})(MapOneSublet);

