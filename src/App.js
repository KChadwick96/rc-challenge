import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="search-container">
          <h2>Where are you going?</h2>

          <div className="location-finder">
            <label for="location-input">Pick-up Location</label>
            <input id="location-input" placeholder="city, airport, station, region, district..."  aria-label="" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
