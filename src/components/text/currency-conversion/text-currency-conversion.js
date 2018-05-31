/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/components/text/currency-conversion/currency-conversion
 */

import React from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { Icon } from "native-base";
import moment from "moment";
import styles from "./styles";

const TextCurencyConversion = ({
  baseCurrency,
  quoteCurrency,
  date,
  conversionRate
}) => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>
      1 {baseCurrency} = {conversionRate} {quoteCurrency} as of{" "}
      {moment(date).format("MMMM D, YYYY")}
    </Text>
  </View>
);

TextCurencyConversion.propTypes = {
  baseCurrency: PropTypes.string,
  quoteCurrency: PropTypes.string,
  date: PropTypes.object,
  conversionRate: PropTypes.number
};

export default TextCurencyConversion;
