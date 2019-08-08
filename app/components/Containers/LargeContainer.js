import PropTypes from 'prop-types';
import React from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

const LargeContainer = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.largeContainer}>{children}</View>
  </TouchableWithoutFeedback>
);

LargeContainer.propTypes = {
  children: PropTypes.array,
};

export default LargeContainer;
