import React, { Component } from "react";
import PlacesAutocomplete, {
  getLatLng,
  geocodeByAddress
} from "react-places-autocomplete";

export default class Location extends Component {
  state = {
    address: "",
    coordinates: {
      lat: null,
      lng: null
    }
  };

  onSelect = async address => {
    const results = await geocodeByAddress(address);
    const latLng = await getLatLng(results[0]);

    this.props.handleSelection(address, { ...latLng });
    this.setState({
      address: "",
      coordinates: {
        lat: null,
        lng: null
      }
    });
  };

  onChange = address => {
    this.setState({
      address: address
    });
  };

  render() {
    console.log("Render of location component state test:", this.state);

    const { coordinates } = this.state;
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.onChange}
        onSelect={this.onSelect}
        shouldFetchSuggestions={this.state.address.length > 3}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Enter address"
              })}
            />
            <div>
              {loading && <div>...loading...</div>}
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "grey" : "lightgrey"
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
