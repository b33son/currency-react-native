/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/components/logo/styles.js
 */
import { Dimensions } from "react-native";
import ExtStyleSheet from "react-native-extended-stylesheet";

const imgWidth = Dimensions.get("window").width / 2;
export default ExtStyleSheet.create({
  $largeImageSize: imgWidth,
  $smallImageSize: imgWidth / 2,

  container: {
    alignItems: "center"
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    width: "$largeImageSize",
    height: "$largeImageSize"
  },
  text: {
    marginTop: 15,
    color: "$white",
    fontWeight: "600",
    fontSize: 28,
    letterSpacing: -0.5
  }
});
