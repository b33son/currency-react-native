/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/screens/home.js
 */
// rfc

import React, { Component } from "react";
import { View, Text, StatusBar, KeyboardAvoidingView } from "react-native";
import ContainerBody from "../components/container/container-body";
import Logo from "../components/logo/logo";
import TextInputIcon from "../components/text-input-icon/text-input-icon";
import ButtonReverse from "../components/button-reverse/button-reverse";
import TextCurencyConversion from "../components/text/currency-conversion/text-currency-conversion";
import HeaderConfig from "../components/header/header-config";
const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_CONVERSION_RATE = 0.797;
const TEMP_CONVERSION_DATE = new Date();

export default class Home extends Component {
  onClickBase = () => {
    console.log("base clicked");
  };
  onClickQuote = () => {
    console.log("quote clicked");
  };
  onHandleChangeText = () => {};

  onPressSwapCurrency = () => {
    console.log("swap currency pressed");
  };

  render() {
    return (
      <ContainerBody>
        <HeaderConfig />
        <View>
          <StatusBar translucent={false} barStyle="default" />
          <KeyboardAvoidingView>
            <Logo />
            <TextInputIcon
              iconType="Ionicons"
              iconName="logo-usd"
              currency={TEMP_BASE_CURRENCY}
              editable={true}
              onClick={this.onClickBase}
              defaultValue={"100"}
              keyboardType="numeric"
              onChangeText={this.onHandleTextChange}
            />
            <TextInputIcon
              iconType="Foundation"
              iconName="pound"
              currency={TEMP_QUOTE_CURRENCY}
              editable={false}
              onClick={this.onClickQuote}
              keyboardType="numeric"
              value={"79.10"}
            />
            <TextCurencyConversion
              baseCurrency={TEMP_BASE_CURRENCY}
              quoteCurrency={TEMP_QUOTE_CURRENCY}
              conversionRate={TEMP_CONVERSION_RATE}
              date={TEMP_CONVERSION_DATE}
            />
            <ButtonReverse
              text="Swap Currencies"
              onPress={this.onPressSwapCurrency}
            />
          </KeyboardAvoidingView>
        </View>
      </ContainerBody>
    );
  }
}
