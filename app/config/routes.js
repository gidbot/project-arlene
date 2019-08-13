import { createStackNavigator, createAppContainer } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';

import LoginForm from '../screens/LoginForm';
import SignUpForm from '../screens/SignUpForm';
import MomCreate from '../screens/MomCreate';
import MomList from '../screens/MomList';
import MomView from '../screens/MomView';
import ForgotPasswordForm from '../screens/ForgotPasswordForm';

const RootStack = createStackNavigator(
  {
    LoginForm: {
      screen: LoginForm
    },
    SignUpForm: { screen: SignUpForm },
    ForgotPasswordForm: { screen: ForgotPasswordForm },
    MomCreate: { screen: MomCreate },
    MomView: { screen: MomView },
    MomList: { screen: MomList }
  },
  {
    initialRouteName: 'LoginForm',
    transitionConfig: () => fromRight(),
    mode: 'modal',
    headerMode: 'none'
  }
);

export default RootStack;
