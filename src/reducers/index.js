import { UPDATED_LOCATION_TERM, LOCATIONS_RESULT } from '../actions';

const initialState = {
    loading: false,
    locations: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATED_LOCATION_TERM:
            return {
                ...state,
                loadingLocations: true
            }

        case LOCATIONS_RESULT:
            const results = action.response.results;
            return {
                loading: false,
                locations: results.numFound > 0 ? results.docs : []
            }
            
        default:
            return state;
    }
};

export default reducer;