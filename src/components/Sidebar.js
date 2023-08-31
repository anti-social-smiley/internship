import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar-container">
        <h2>Recommended Places</h2>
        <ul id="places-list">{this.props.children}</ul>
      </div>
    );
  }
}

export default Sidebar;
