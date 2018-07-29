export const UPDATED_LOCATION_TERM = 'UPDATED_LOCATION_TERM';
export const LOCATIONS_RESULT = 'LOCATIONS_RESULT';
export const LOCATIONS_ERROR = 'LOCATIONS_RESULT';

export const fetchLocations = term => ({
    type: FETCH_LOCATIONS,
    term
});

export const fetchLocationsSuccess = response => ({
    type: FETCH_LOCATIONS_SUCCESS,
    locations: response.results.docs
});

// TODO: Add LOCATIONS_ERROR