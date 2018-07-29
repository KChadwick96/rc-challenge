import React from 'react';

import './LocationResults.css';

const LOCATION_TYPES = {
    C: {
        name: 'City',
        colour: '#6eb8fa'
    },
    T: {
        name: 'Station',
        colour: '#9d9dbb'
    },
    A: {
        name: 'Airport',
        colour: '#f2817f'
    },
    D: {
        name:'District',
        colour: '#70d58e',
    }
};

const DEFAULT_LOCATION_TYPE = {
    colour: '#000'
};

const LocationResults = ({results, open}) => {
    if (!open) return null;

    let resultsHtml;
    if (!results || results.length === 0) {
        resultsHtml = <li className="list__item">No Results Found</li>;
    } else {
        resultsHtml = results.map(result => {
            const locationType = LOCATION_TYPES[result.placeType] || {...DEFAULT_LOCATION_TYPE, name: result.placeType};
            const address = (result.city ? `${result.city}, ` : '') + result.country;

            return <li className="list__item" key={result.name}>
                <span className="location-type-badge" style={{backgroundColor: locationType.colour}}>
                    {locationType.name}
                </span>
                {result.name}
                <span className="location-address">{address}</span>
            </li>
        });
    }

    return (
        <ul className="list">
            {resultsHtml}
        </ul>
    );
}

export default LocationResults;