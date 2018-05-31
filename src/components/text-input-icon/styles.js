/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/components/container/styles.js
 */

import ExtStyleSheet from "react-native-extended-stylesheet";
import StyleSheet from "react-native";
const BORDER_RADIUS = 4;
const INPUT_HEIGHT = 55;

export default ExtStyleSheet.create({
  item: {
    backgroundColor: "$white",
    marginVertical: 15,
    width: "100%",
    borderRadius: BORDER_RADIUS,
    height: INPUT_HEIGHT
  },
  itemDisabled: {
    backgroundColor: "$itemDisabled",
    marginVertical: 15,
    width: "100%",
    borderRadius: BORDER_RADIUS,
    height: INPUT_HEIGHT
  },
  button: {
    alignItems: "center"
  },
  buttonInner: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: "$border"
  },
  icon: {
    fontSize: 20,
    color: "#333",
    paddingLeft: 5
  },
  buttonText: { color: "$primaryBlue", fontSize: 20, fontWeight: "600" },
  input: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontSize: 25,
    paddingHorizontal: 8,
    color: "$inputText"
  }
});
