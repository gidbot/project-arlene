import React from 'react';
import { Provider } from 'react-redux';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import store from '../../app/config/store';

import MomCreate from '../../app/screens/MomCreate';
import LoginForm from '../../app/screens/LoginForm';

storiesOf('Onboard', module).add('Login', () => <LoginForm store={store} />);
storiesOf('Forms', module).add('Create Mom', () => <MomCreate store={store} />);
