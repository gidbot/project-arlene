import PropTypes from 'prop-types';
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const Spinner = props => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator color={props.color} size={props.size} />
  </View>
);

Spinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
};

export default Spinner;
