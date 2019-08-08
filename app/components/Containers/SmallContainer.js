import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const SmallContainer = props => (
  <View style={styles.smallContainer}>{props.children}</View>
);

SmallContainer.propTypes = {
  children: PropTypes.object,
};

export default SmallContainer;
