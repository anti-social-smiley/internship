import React, { Component } from "react";

class PlaceDetails extends Component {
  render() {
    const { name, address, phone, website } = this.props;
    return (
      <div id="place-details">
        <h2 id="place-name">{name}</h2>
        <p id="place-address">{address}</p>
        <p id="place-phone">{phone}</p>
        <p id="place-website">{website}</p>
      </div>
    );
  }
}

export default PlaceDetails;
