import { UPDATED_LOCATION_TERM } from '../actions';

const initialState = {
    loadingLocations: false,
    locations: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATED_LOCATION_TERM:
            return {
                ...state,
                loadingLocations: true
            }
            
        default:
            return state;
    }
};

export default reducer;