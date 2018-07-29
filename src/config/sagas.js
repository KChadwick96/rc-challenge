import { takeLatest, call, put } from 'redux-saga/effects';

import { UPDATED_LOCATION_TERM, LOCATIONS_RESULT, LOCATIONS_ERROR } from '../actions';

const MAX_RESULTS = 6;
const getLocations = term => fetch(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${MAX_RESULTS}&solrTerm=${term}`);

function* fetchLocations(action) {
    try {
        const response = yield call(getLocations, action.term);
        const result = yield response.json();

        yield put({ type: LOCATIONS_RESULT, response: result });
    } catch (ex) {
        yield put({ type: LOCATIONS_ERROR, error: ex.message });
    }
}

export default function* rootSaga() {
    yield takeLatest(UPDATED_LOCATION_TERM, fetchLocations);
}