import React from 'react';

const LocationResults = ({results}) => {
    let resultsHtml;
    if (!results || results.length === 0) {
        resultsHtml = <div>No Results Found</div>;
    } else {
        resultsHtml = results.map(result => <div>{result.name}</div>);
    }

    return (
        <div>
            {resultsHtml}
        </div>
    );
}

export default LocationResults;