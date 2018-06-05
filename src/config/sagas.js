/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/config/sagas.js
 */

// 1. Swap currency
// 2. Change base
// 3. Execute initial request at app load

import { takeEvery, select, call } from "redux-saga/effects";
import {
  SWAP_CURRENCY,
  CHANGE_BASE_CURRENCY,
  GET_INIT_CONVERSION,
  CONVERSION_ERROR,
  CONVERSION_RESULT
} from "../actions/action-currencies";

const api_url = `http://fixer.handlebarlabs.com`;

const getLatestRate = currency => {
  console.log("getLatestRate: ", currency);
  return fetch(`${api_url}/latest?base=${currency}`);
};

function* fetchLatestConversionRates(action) {
  //console.log("TODO: update sagas.fetchLatestConversionRates");
  //console.log("test 1");

  try {
    let currency = action.currency;
    if (currency === undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }

    const res = yield call(getLatestRate, currency);
    const result = yield res.json();

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result: result });
    }
  } catch (err) {
    console.log("Saga error: ", err);
    yield put({ type: CONVERSION_ERROR, error: err.message });
  }

  // getLatestRate("USD")
  //   .then(res => res.json())
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));

  // yield;
}

// generator function
export default function* rootSaga() {
  yield takeEvery(GET_INIT_CONVERSION, fetchLatestConversionRates); // pause when called
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates); // pause when called
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRates); // pause when called
}
