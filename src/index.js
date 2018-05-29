/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/index.js
 */

import React from "react";
import Home from "./screens/home";
import ExtStyleSheet from "react-native-extended-stylesheet";

//  https://github.com/vitalets/react-native-extended-stylesheet
ExtStyleSheet.build({
  $primaryBlue: "#4f6d7a"
});
export default () => <Home />;
