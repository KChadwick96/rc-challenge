import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocationResults from './LocationResults';
import { updatedLocationTerm } from '../actions';

import './SearchWidget.css';

class SearchWidget extends Component {

    findResults = event => {
        this.props.dispatch(updatedLocationTerm(event.target.value));
    }

    render() {
        console.log(this.props);
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
                        <LocationResults results={this.props.locations} />
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
