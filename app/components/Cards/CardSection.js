import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const CardSection = props => (
  <View style={styles.cardSection}>{props.children}</View>
);

CardSection.propTypes = {
  children: PropTypes.node,
};

export default CardSection;
