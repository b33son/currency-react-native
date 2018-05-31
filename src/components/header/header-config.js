/*
 * File: /Users/michaelbeeson/Documents/VSCode/react-native-ud/currency-react-native/src/components/header/header.js
 */

import React from "react";
import PropTypes from "prop-types";
import { Container, Left, Body, Right, Button, Icon, Title } from "native-base";
import { Header } from "native-base";
import styles from "./styles";
const HeaderConfig = ({ onPress }) => {
  return (
    <Header>
      <Right>
        <Button transparent onPress={onPress}>
          <Icon type="EvilIcons" name="gear" />
        </Button>
      </Right>
    </Header>
  );
};

HeaderConfig.propTypes = {
  onPress: PropTypes.func
};

export default HeaderConfig;
