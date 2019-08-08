import GLOBALS from '../config/globals';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';

import { Card, CardSection } from '../components/Cards';
import { Input } from '../components/TextInput';
import { Button } from '../components/Buttons';
import { userChanged, signUpUser } from '../actions/userActions';
import { Spinner } from '../components/Spinner';

class SignUpForm extends Component {
  onSignUpPress = () => {
    const { email, password, zipcode } = this.props;
    this.props.signUpUser({ email, password, zipcode });
  };

  renderButton = () => {
    if (this.props.loading) {
      return (
        <Spinner size="large" color={EStyleSheet.value('$primaryPurple')} />
      );
    }
    return <Button onPress={this.onSignUpPress}>Sign Up</Button>;
  };

  renderError = () => {
    if (this.props.error) {
      Alert.alert(
        'Sign Up Failed',
        this.props.error,
        [
          {
            text: 'Try Again'
          }
        ],
        { cancelable: false }
      );
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor={EStyleSheet.value('$primaryPurple')}
          leftComponent={{
            icon: 'left',
            type: 'antdesign',
            color: 'white',
            onPress: () => this.props.navigation.goBack()
          }}
        />

        <Card>
          {this.renderError()}
          <CardSection>
            <Input
              placeholder="Email"
              value={this.props.email}
              onChangeText={value =>
                this.props.userChanged({ prop: 'email', value })
              }
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Password"
              value={this.props.password}
              onChangeText={value =>
                this.props.userChanged({ prop: 'password', value })
              }
              secureTextEntry
            />
          </CardSection>
          <CardSection>
            <Input
              placeholder="Zip Code"
              value={this.props.zipcode}
              onChangeText={value =>
                this.props.userChanged({ prop: 'zipcode', value })
              }
              keyboardType="numeric"
              maxLength={GLOBALS.ZIPCODE_LENGTH}
            />
          </CardSection>
          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </View>
    );
  }
}

SignUpForm.propTypes = {
  userChanged: PropTypes.func,
  signUpUser: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  zipcode: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = ({ signUpForm }) => {
  const { email, password, zipcode, error, loading } = signUpForm;
  return {
    email,
    password,
    zipcode,
    error,
    loading
  };
};

export default connect(
  mapStateToProps,
  { userChanged, signUpUser }
)(SignUpForm);
