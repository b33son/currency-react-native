/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/index.js
 */

import React from "react";
//import Home from "./screens/home";
//import CurrencyList from "./screens/currency-list";
import { Root } from "native-base";
import Routes from "./config/routes";
import ExtStyleSheet from "react-native-extended-stylesheet";
import { Provider } from "react-redux";
import store from "./config/store";
// TODO:
//import "./reducers";

//  https://github.com/vitalets/react-native-extended-stylesheet
ExtStyleSheet.build({
  $primaryBlue: "#4f6d7a",
  $white: "#fff",
  $border: "#E2E2E2",
  $inputText: "#797979",
  $itemDisabled: "#D3D3D3",
  $darkText: "#343434"
});
export default () => (
  <Provider store={store}>
    <Root>
      <Routes onNavigationStateChange={null} />
    </Root>
  </Provider>
);
