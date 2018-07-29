import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocationResults from './LocationResults';
import { updatedLocationTerm } from '../actions';

import './SearchWidget.css';

const TEMP_RESULTS = [{
    type: 'station',
    name: 'Manchester Piccadilly',
    address: 'Somewhere Rd, Manchester'
}, {
    type: 'airport',
    name: 'Manchester Airport',
    address: 'Somewhere else St, Manchester'
}]

class SearchWidget extends Component {

    findResults = event => {
        this.props.dispatch(updatedLocationTerm(event.target.value));
        console.log(event.target.value);
    }

    render() {
        return (
            <div className="search-container">
                <h2>Where are you going?</h2>

                <div className="location-finder">
                    <label htmlFor="location-input">Pick-up Location</label>
                    <input id="location-input" placeholder="city, airport, station, region, district..."
                        aria-autocomplete="list"
                        aria-haspopup="true"
                        onChange={this.findResults}
                    />

                    <div className="results-container">
                        <LocationResults results={TEMP_RESULTS} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        locations: state.locations
    };
};

export default connect(mapStateToProps)(SearchWidget);
