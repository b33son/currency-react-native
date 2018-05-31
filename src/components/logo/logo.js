/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/components/logo/logo.js
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Image, Text, Keyboard, Animated } from "react-native";
import styles from "./styles";

class Logo extends Component {
  constructor(props) {
    super(props);

    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }
  componentDidMount() {
    this.keyboardShowListener = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardHide
    );
  }

  keyboardShow = () => {
    Animated.timing(this.imageWidth, {
      toValue: styles.$smallImageSize
    }).start();
  };

  keyboardHide = () => {
    Animated.timing(this.imageWidth, {
      toValue: styles.$largeImageSize
    }).start();
  };

  render() {
    const imageStyle = [
      styles.image,
      {
        width: this.imageWidth,
        height: this.imageWidth
      }
    ];
    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={imageStyle}
          source={require("../../../assets/substitute-icon-15.png")}
        />
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

Logo.propTypes = {};

export default Logo;
