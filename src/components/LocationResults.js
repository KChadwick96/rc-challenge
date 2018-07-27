import React from 'react';

import './LocationResults.css';

const LocationResults = ({results}) => {
    let resultsHtml;
    if (!results || results.length === 0) {
        resultsHtml = <li class="list__item">No Results Found</li>;
    } else {
        resultsHtml = results.map(result => <li className="list__item" key={result.name}>
            <span className="location-type-badge">{result.type}</span>
            {result.name}
            <span className="location-address">{result.address}</span>
        </li>);
    }

    return (
        <ul className="list">
            {resultsHtml}
        </ul>
    );
}

export default LocationResults;