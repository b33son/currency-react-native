/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/config/routes.js
 */

import { createStackNavigator } from "react-navigation";
import Home from "../screens/home";
import CurrencyList from "../screens/currency-list";

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: () => null,
      headerTitle: "Home"
    }
  }

  // TODO: configuration screen, etc
});

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyList,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title
    })
  }
});

export default createStackNavigator({
  Home: {
    screen: HomeStack
  },
  CurrencyList: {
    screen: CurrencyListStack
  }
});
