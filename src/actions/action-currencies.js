/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/actions/currencies.js
 */

export const SWAP_CURRENCY = "SWAP_CURRENCY";
export const CHANGE_CURRENCY_AMOUNT = "CHANGE_CURRENCY_AMOUNT";
export const CHANGE_BASE_CURRENCY = "CHANGE_BASE_CURRENCY";
export const CHANGE_QUOTE_CURRENCY = "CHANGE_QUOTE_CURRENCY";
export const GET_INIT_CONVERSION = "GET_INIT_CONVERSION";
export const CONVERSION_RESULT = "CONVERSION_RESULT";
export const CONVERSION_ERROR = "CONVERSION_ERROR";

export const swapCurrency = () => ({
  type: SWAP_CURRENCY,
  payload: null
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount)
});

export const changeBaseCurrecy = currency => ({
  type: CHANGE_BASE_CURRENCY,
  currency
});

export const changeQuoteCurrecy = currency => ({
  type: CHANGE_QUOTE_CURRENCY,
  currency
});

export const getInitConversion = () => ({
  type: GET_INIT_CONVERSION
});
