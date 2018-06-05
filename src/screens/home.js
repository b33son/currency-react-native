/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/screens/home.js
 */
// rfc

import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StatusBar, KeyboardAvoidingView } from "react-native";
import ContainerBody from "../components/container/container-body";
import Logo from "../components/logo/logo";
import TextInputIcon from "../components/text-input-icon/text-input-icon";
import ButtonReverse from "../components/button-reverse/button-reverse";
import TextCurencyConversion from "../components/text/currency-conversion/text-currency-conversion";
import HeaderConfig from "../components/header/header-config";
import { connect } from "react-redux";
import {
  swapCurrency,
  changeCurrencyAmount,
  getInitConversion
} from "../actions/action-currencies";

// const TEMP_BASE_CURRENCY = "USD";
// const TEMP_QUOTE_CURRENCY = "GBP";
// const TEMP_AMOUNT = 100;
const TEMP_CONVERSION_RATE = 0.797;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    quotePrice: PropTypes.number
  };

  componentWillMount = () => {
    this.props.dispatch(getInitConversion());
  };

  onClickBase = () => {
    console.log("base clicked");
    this.props.navigation.navigate("CurrencyList", { title: "Base Currency" });
  };
  onClickQuote = () => {
    console.log("quote clicked");
    this.props.navigation.navigate("CurrencyList", { title: "Quote Currency" });
  };
  onHandleChangeText = amount => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };

  onPressSwapCurrency = () => {
    //console.log(swapCurrency());
    this.props.dispatch(swapCurrency());
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
              //currency={TEMP_BASE_CURRENCY}
              currency={this.props.baseCurrency}
              editable={true}
              onClick={this.onClickBase}
              //defaultValue={TEMP_AMOUNT}
              defaultValue={this.props.amount.toString()}
              keyboardType="numeric"
              onChangeText={this.onHandleChangeText}
            />
            <TextInputIcon
              iconType="Foundation"
              iconName="pound"
              //currency={TEMP_QUOTE_CURRENCY}
              currency={this.props.quoteCurrency}
              editable={false}
              onClick={this.onClickQuote}
              keyboardType="numeric"
              value={this.props.quotePrice.toFixed(2)}
            />
            <TextCurencyConversion
              //baseCurrency={TEMP_BASE_CURRENCY}
              currency={this.props.baseCurrency}
              //quoteCurrency={TEMP_QUOTE_CURRENCY}
              currency={this.props.quoteCurrency}
              //conversionRate={TEMP_CONVERSION_RATE}
              conversionRate={this.props.conversionRate}
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

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const amount = state.currencies.amount;

  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const conversionRate = rates[quoteCurrency] || 0;
  const quotePrice = amount * conversionRate;
  console.log("remapped mapStateToProps");
  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate,
    quotePrice
  };
};

function mapDispatchToProps(dispatch) {
  // When selectBook is called, the result is passed
  // to all reducers

  // Anything returned from this function will become
  // props on the container
  return bindActionCreators(
    { changeCurrencyAmount: changeCurrencyAmount },
    { swapCurrency: swapCurrency },
    dispatch
  );
}

export default connect(mapStateToProps)(Home);
