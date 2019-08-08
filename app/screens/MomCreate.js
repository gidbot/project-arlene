import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection } from '../components/Cards';
import { Button } from '../components/Buttons';
import MomForm from './MomForm';
import { createMom } from '../actions/momActions';

class MomCreate extends Component {
  onButtonPress = () => {
    const { name, phoneNumber, zipcode } = this.props;
    this.props.createMom({ name, phoneNumber, zipcode });
  };

  render() {
    return (
      <Card>
        <MomForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress}>Save</Button>
        </CardSection>
      </Card>
    );
  }
}

MomCreate.propTypes = {
  name: PropTypes.string,
  phoneNumber: PropTypes.string,
  zipcode: PropTypes.string,
  createMom: PropTypes.func,
};

const mapStateToProps = (state) => {
  const { name, phoneNumber, zipcode } = state.momForm;
  return { name, phoneNumber, zipcode };
};

export default connect(
  mapStateToProps,
  { createMom },
)(MomCreate);
