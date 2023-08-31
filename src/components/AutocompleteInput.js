import React, { Component } from "react";
import TextField from "@mui/material/TextField";

class AutocompleteInput extends Component {
  render() {
    return (
      <TextField
        id="search-input"
        label="Search for a place"
        variant="outlined"
      />
    );
  }
}

export default AutocompleteInput;
