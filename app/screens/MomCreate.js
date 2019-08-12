import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { View } from 'react-native';

import NavigationService from '../config/NavigationService';
import { Card, CardSection } from '../components/Cards';
import { Button } from '../components/Buttons';
import MomForm from './MomForm';
import { createMom } from '../actions/momActions';

class MomCreate extends Component {
  onButtonPress = () => {
    const { name, phoneNumber, zipcode } = this.props;
    const userUid = this.props.userUid;
    this.props.createMom({ userUid, name, phoneNumber, zipcode });
  };

  renderError = () => {
    if (this.props.error) {
      Alert.alert(
        'Saving Mom Failed',
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
            onPress: () => NavigationService.goBack()
          }}
          centerComponent={{
            text: 'Add Mom',
            style: { color: '#fff', fontWeight: '900', fontSize: 30 }
          }}
        />
        <Card>
          {this.renderError()}
          <MomForm {...this.props} />
          <CardSection>
            <Button onPress={this.onButtonPress}>Save</Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

MomCreate.propTypes = {
  name: PropTypes.string,
  phoneNumber: PropTypes.string,
  zipcode: PropTypes.string,
  createMom: PropTypes.func
};

const mapStateToProps = state => {
  const { name, phoneNumber, zipcode } = state.momForm;
  const userUid = state.auth.user.uid;
  return { userUid, name, phoneNumber, zipcode };
};

export default connect(
  mapStateToProps,
  { createMom }
)(MomCreate);
