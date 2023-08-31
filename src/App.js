import React from "react";
import MapContainer from "./components/Map";
import AutocompleteInput from "./components/AutocompleteInput";
import Sidebar from "./components/Sidebar";
import PlaceDetails from "./components/PlaceDetails";

function App() {
  return (
    <div>
      <h1 id="intro">Google Maps</h1>
      <AutocompleteInput />
      <div id="container">
        <MapContainer />
        <PlaceDetails
          name="Selected Place Name"
          address="Selected Place Address"
          phone="Selected Place Phone"
          website="Selected Place Website"
        />
        <Sidebar>
          <li>Recommended Place 1</li>
          <li>Recommended Place 2</li>
          {/* Add more recommended places */}
        </Sidebar>
      </div>
    </div>
  );
}

export default App;
