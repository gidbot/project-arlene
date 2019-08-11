import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  StatusBar,
  KeyboardAvoidingView,
  Alert,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

import { loginUserChanged, loginUser, logoutUser } from '../actions/login';
import { LargeContainer, SmallContainer } from '../components/Containers';
import { Logo } from '../components/Logo';
import { Input } from '../components/TextInput';
import { Button } from '../components/Buttons';
import { Spinner } from '../components/Spinner';

class LoginForm extends Component {
  onLoginPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };

  renderButton = () => {
    if (this.props.loading) {
      return (
        <Spinner size="large" color={EStyleSheet.value('$primaryPurple')} />
      );
    }
    return <Button onPress={this.onLoginPress}>Login</Button>;
  };

  renderError = () => {
    if (this.props.error) {
      Alert.alert(
        'Login Failed',
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
      <LargeContainer>
        {this.renderError()}
        <StatusBar translucent={false} barStyle="light-content" />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <Input
            placeholder="Email Address"
            onChangeText={value =>
              this.props.loginUserChanged({ prop: 'email', value })
            }
          />
          <Input
            placeholder="Password"
            onChangeText={value =>
              this.props.loginUserChanged({ prop: 'password', value })
            }
            secureTextEntry
          />
          <SmallContainer>{this.renderButton()}</SmallContainer>

          <View
            style={{
              alignItems: 'center'
            }}
          >
            <Text style={{ color: '#fff' }}>
              Don't have an account? &nbsp;
              <Text
                onPress={() => this.props.navigation.navigate('SignUpForm')}
                style={{
                  fontSize: 15,
                  fontWeight: '900',
                  color: EStyleSheet.value('$primaryPurple')
                }}
              >
                Sign Up
              </Text>
            </Text>
          </View>
        </KeyboardAvoidingView>
      </LargeContainer>
    );
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func,
  loginUserChanged: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(
  mapStateToProps,
  {
    loginUser,
    logoutUser,
    loginUserChanged
  }
)(LoginForm);
