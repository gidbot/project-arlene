import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Header } from 'react-native-elements';
import { connect } from 'react-redux';

import NavigationService from '../config/NavigationService';
import { Card, CardSection } from '../components/Cards';
import { Input } from '../components/TextInput';
import { Button } from '../components/Buttons';
import { Spinner } from '../components/Spinner';
import {
  emailChanged,
  sendPasswordReset,
  passwordResetCompleted
} from '../actions/passwordActions';

class ForgotPasswordForm extends Component {
  onPress = () => {
    const { email } = this.props;
    this.props.sendPasswordReset({ email });
  };

  renderButton = () => {
    if (this.props.loading) {
      return (
        <Spinner size="large" color={EStyleSheet.value('$primaryPurple')} />
      );
    }
    return <Button onPress={this.onPress}>Send Password Reset</Button>;
  };

  renderError = () => {
    if (this.props.error) {
      Alert.alert(
        'Password Reset Failed',
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

  renderEmailSent = () => {
    if (this.props.emailSent) {
      Alert.alert(
        'Password Has Been Reset',
        'Please Check Your Email',
        [
          {
            text: 'Ok',
            onPress: () => this.props.passwordResetCompleted()
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
          centerComponent={{
            text: 'Forgot Password',
            style: { color: '#fff', fontWeight: '900', fontSize: 30 }
          }}
          leftComponent={{
            icon: 'left',
            type: 'antdesign',
            color: 'white',
            onPress: () => NavigationService.goBack()
          }}
        />

        <Card>
          {this.renderError()}
          {this.renderEmailSent()}
          <CardSection>
            <Input
              placeholder="Enter Email"
              value={this.props.email}
              onChangeText={value => this.props.emailChanged({ value })}
            />
          </CardSection>
          <CardSection>{this.renderButton()}</CardSection>
        </Card>
      </View>
    );
  }
}

ForgotPasswordForm.propTypes = {
  emailChanged: PropTypes.func,
  sendPasswordReset: PropTypes.func,
  passwordResetCompleted: PropTypes.func,
  email: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
  emailSent: PropTypes.bool
};

const mapStateToProps = ({ forgotPasswordForm }) => {
  const { email, error, loading, emailSent } = forgotPasswordForm;
  return {
    email,
    error,
    loading,
    emailSent
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, sendPasswordReset, passwordResetCompleted }
)(ForgotPasswordForm);
