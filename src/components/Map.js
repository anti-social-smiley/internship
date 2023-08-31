import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        initialCenter={{ lat: -22.5558, lng: 17.0733 }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAdoz3yBdY0BkamBfnKMI"
})(MapContainer);
