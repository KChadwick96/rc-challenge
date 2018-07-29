export const UPDATED_LOCATION_TERM = 'UPDATED_LOCATION_TERM';
export const LOCATIONS_RESULT = 'LOCATIONS_RESULT';
export const LOCATIONS_ERROR = 'LOCATIONS_RESULT';

export const updatedLocationTerm = term => ({
    type: UPDATED_LOCATION_TERM,
    term
});

export const locationsResult = response => ({
    type: LOCATIONS_RESULT,
    locations: response.results.docs
});

// TODO: Add LOCATIONS_ERROR