import React, { Component } from 'react';
import { connect } from 'react-redux';

import LocationResults from './LocationResults';
import { updatedLocationTerm } from '../actions';

import './SearchWidget.css';

const MIN_TERM_LENGTH = 2;

class SearchWidget extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: '',
            showResults: false
        };
    }

    findResults = event => {
        const term = event.target.value;
        this.setState({term});

        if (term && term.length >= MIN_TERM_LENGTH) {
            this.props.dispatch(updatedLocationTerm(event.target.value));
        }
    }

    render() {
        const resultsVisible = this.props.locations.length > 0 || this.state.term.length >= MIN_TERM_LENGTH;

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
                        <LocationResults results={this.props.locations} open={resultsVisible} />
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
