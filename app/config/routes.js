import { createStackNavigator, createAppContainer } from 'react-navigation';
import { fromRight } from 'react-navigation-transitions';

import LoginForm from '../screens/LoginForm';
import SignUpForm from '../screens/SignUpForm';
import MomCreate from '../screens/MomCreate';

const RootStack = createStackNavigator(
  {
    LoginForm: {
      screen: LoginForm
    },
    SignUpForm: { screen: SignUpForm },
    MomCreate: { screen: MomCreate }
  },
  {
    initialRouteName: 'LoginForm',
    transitionConfig: () => fromRight(),
    mode: 'modal',
    headerMode: 'none'
  }
);

export default RootStack;
