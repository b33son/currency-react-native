/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/reducers/reducer-currency.js
 */
import {
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY
} from "../actions/action-currencies";

// TODO: Used for initial authoring of file: Remove for production
//import { swapCurrency, changeCurrencyAmount } from "../actions/currencies";

// const initState = {
//   baseCurrency: "USD",
//   quoteCurrency: "GBP",
//   amount: 100,
//   conversions: {}
// };

const initState = {
  baseCurrency: "USD",
  quoteCurrency: "GBP",
  amount: 103,
  conversions: {
    USD: {
      isFetching: false,
      base: "USD",
      date: "2018-05-31",
      rates: {
        AUD: 1.3416,
        CAD: 1.3464,
        GBP: 0.77858
      }
    },
    GBP: {
      isFetching: false,
      base: "GBP",
      date: "2018-05-31",
      rates: {
        AUD: 1.3416,
        CAD: 1.3464,
        USD: 1.3466
      }
    }
  }
};

const reducer = (state = initState, action) => {
  console.log("reducer");
  switch (action.type) {
    case CHANGE_CURRENCY_AMOUNT:
      console.log("reducer CHANGE_CURRENCY_AMOUNT", action.payload);
      return {
        ...state,
        amount: action.amount || 0
      };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency
      };
    default:
      return state;
  }
};

// TODO: Used for initial authoring of file: Remove for production
// console.log("initState", initState);
// console.log("swapCurrency", reducer(initState, swapCurrency()));
// console.log(
//   "changeCurrencyAmount",
//   reducer(initState, changeCurrencyAmount(987))
// );

export default reducer;
