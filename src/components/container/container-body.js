/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/components/container/container.js
 */
/// rfep

import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container } from "native-base";
import PropTypes from "prop-types";
import styles from "./styles";

export default class ContainerBody extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.container}>{this.props.children}</Container>
    );
  }
}
