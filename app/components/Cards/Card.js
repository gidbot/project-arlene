import PropTypes from 'prop-types';
import React from 'react';
import { View, SafeAreaView } from 'react-native';
import styles from './styles';

const Card = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.card}>{props.children}</View>
  </SafeAreaView>
);

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
