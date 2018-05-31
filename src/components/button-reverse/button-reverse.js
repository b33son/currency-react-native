/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/components/button-reverse/button-reverse.js
 */
import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Icon } from "native-base";
import styles from "./styles";

const ButtonReverse = ({ text, onPress }) => (
  <TouchableOpacity style={styles.touchable} onPress={onPress}>
    <View style={styles.wrapper}>
      <Icon style={styles.icon} active type="Entypo" name="swap" />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ButtonReverse.propTypes = {
  text: PropTypes.string,
  onPress: PropTypes.func
};

export default ButtonReverse;
