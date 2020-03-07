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
    console.log("Address test: ", address);

    this.setState({
      address: "",
      coordinates: latLng
    });
  };

  onChange = address => {
    this.setState({
      address: address
    });
  };

  render() {
    const { coordinates } = this.state;
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.onChange}
        onSelect={this.onSelect}
        shouldFetchSuggestions={this.state.address.length > 3}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
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
