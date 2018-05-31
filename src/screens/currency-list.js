/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/screens/currency-list.js
 */

import React, { Component } from "react";
import {
  Text,
  List,
  ListItem,
  Right,
  Left,
  Icon,
  Content,
  Container
} from "native-base";
import { View, StatusBar, TouchableHighlight } from "react-native";
//import PropTypes from "prop-types";
import ExtStyleSheet from "react-native-extended-stylesheet";
import currencyCodes from "../data/currency-codes.json";

const TEMP_CUR_CURRENCY = "AMD";

export default class CurrencyList extends Component {
  componentWillMount = () => {
    let codeArr = Object.values(currencyCodes).map(item => item.code);
    this.setState({ codes: codeArr });
  };

  onPressListItem = () => {
    console.log("list item pressed");
  };

  getListItem = text => {
    const selected = text === TEMP_CUR_CURRENCY;
    return (
      <TouchableHighlight onPress={this.onPressListItem}>
        <ListItem selected={selected}>
          <Left>
            <Text>{text}</Text>
          </Left>
          <Right>
            {selected ? <Icon type="EvilIcons" name="check" /> : null}
          </Right>
        </ListItem>
      </TouchableHighlight>
    );
  };

  render() {
    return (
      <Container>
        <Content>
          <List
            dataArray={this.state.codes}
            renderRow={row => this.getListItem(row)}
            keyExtractor={item => item}
          />
        </Content>
      </Container>
    );
  }
}

const styles = ExtStyleSheet.create({
  row: {}
});
