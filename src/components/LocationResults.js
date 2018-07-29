import React from 'react';

import './LocationResults.css';

const LOCATION_TYPES = {
    C: 'City',
    S: 'Station',
    A: 'Airport',
    D: 'District'
};

const LocationResults = ({results, open}) => {
    if (!open) return null;

    let resultsHtml;
    if (!results || results.length === 0) {
        resultsHtml = <li className="list__item">No Results Found</li>;
    } else {
        resultsHtml = results.map(result => <li className="list__item" key={result.name}>
            <span className="location-type-badge">{LOCATION_TYPES[result.placeType]}</span>
            {result.name}
            <span className="location-address">{result.city}, {result.country}</span>
        </li>);
    }

    return (
        <ul className="list">
            {resultsHtml}
        </ul>
    );
}

export default LocationResults;