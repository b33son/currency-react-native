/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/components/text-input-icon/text-input-icon.js
 */
import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  Button,
  Item,
  Input,
  Icon,
  Text
} from "native-base";

import PropTypes from "prop-types";
import styles from "./styles";
import color from "color";

export default class TextInputIcon extends Component {
  static propTypes = {
    iconType: PropTypes.string,
    iconName: PropTypes.string,
    currency: PropTypes.string,
    editable: PropTypes.bool,
    onClick: PropTypes.func
  };

  constructor(props) {
    super(props);
  }

  render() {
    // const underlayColor = color(styles.$buttonBackgroundColorBase).darken(
    //   styles.$buttonBackgroundColorModifier
    // );

    return (
      <View style={styles.container}>
        <Item style={this.props.editable ? styles.item : styles.itemDisabled}>
          <Button
            iconLeft
            transparent
            primary
            style={styles.button}
            onPress={this.props.onClick}
          >
            <View style={styles.buttonInner}>
              {/* <Icon
                active
                type={this.props.iconType}
                name={this.props.iconName}
                style={styles.icon}
              /> */}
              <Text style={styles.buttonText}>{this.props.currency}</Text>
            </View>
          </Button>
          <View style={styles.border} />
          <Input style={styles.input} {...this.props} />
        </Item>
      </View>
    );
  }
}
