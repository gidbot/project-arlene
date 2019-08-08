import PropTypes from 'prop-types';
import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

const Input = (props) => {
  const {
    value, secureTextEntry, placeholder, editable = true,
  } = props;

  const containerStyles = [styles.container];
  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }

  return (
    <View style={containerStyles}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        value={value}
        autoCapitalize="none"
        {...props}
      />
    </View>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  editable: PropTypes.bool,
};

export default Input;
