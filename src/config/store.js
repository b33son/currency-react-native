/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/config/store.js
 */

import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "../reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger); // should always be the last middleware pushed
}

const store = createStore(reducers, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
