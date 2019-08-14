import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import GLOBALS from '../config/globals';
import { CardSection } from '../components/Cards';
import { Input } from '../components/TextInput';
import { momChanged } from '../actions/momActions';

class MomForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            placeholder="Name"
            value={this.props.name}
            onChangeText={value =>
              this.props.momChanged({ prop: 'name', value })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="555-555-5555"
            value={this.props.phoneNumber}
            onChangeText={value =>
              this.props.momChanged({ prop: 'phoneNumber', value })
            }
          />
        </CardSection>
        <CardSection>
          <Input
            placeholder="90232"
            value={this.props.zipcode}
            onChangeText={value =>
              this.props.momChanged({ prop: 'zipcode', value })
            }
            keyboardType="numeric"
            maxLength={GLOBALS.ZIPCODE_LENGTH}
          />
        </CardSection>
      </View>
    );
  }
}

MomForm.propTypes = {
  momChanged: PropTypes.func,
  name: PropTypes.string,
  phoneNumber: PropTypes.string,
  zipcode: PropTypes.string,
  error: PropTypes.string
};

const mapStateToProps = ({ momForm }) => {
  const { name, phoneNumber, zipcode, error } = momForm;
  return {
    name,
    phoneNumber,
    zipcode,
    error
  };
};

export default connect(
  mapStateToProps,
  { momChanged }
)(MomForm);
