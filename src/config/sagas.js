import { takeEvery, call, put } from 'redux-saga/effects';

import { UPDATED_LOCATION_TERM, LOCATIONS_RESULT, LOCATIONS_ERROR } from '../actions';

const getLocations = term => fetch(`https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=6&solrTerm=${term}`);

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
    yield takeEvery(UPDATED_LOCATION_TERM, fetchLocations);
}