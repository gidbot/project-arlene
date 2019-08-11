import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import NavigationService from '../config/NavigationService';
import { Header, ListItem } from 'react-native-elements';
import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import GLOBALS from '../config/globals';
import { fetchMoms } from '../actions/momActions';

const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    subtitle: 'Vice Chairman'
  }
];

class MomList extends Component {
  componentDidMount() {
    this.props.fetchMoms({ userUid: this.props.user.uid });
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={GLOBALS.capitalize(item.name)}
      subtitle={item.phoneNumber}
      leftAvatar={{ icon: { name: 'user', type: 'antdesign' } }}
      onPress={() => NavigationService.navigate('MomForm')}
      chevron
    />
  );

  render() {
    return (
      <View>
        <Header
          backgroundColor={EStyleSheet.value('$primaryPurple')}
          centerComponent={{
            text: 'Moms',
            style: { color: '#fff', fontWeight: '900', fontSize: 30 }
          }}
          rightComponent={{
            icon: 'plus',
            type: 'antdesign',
            color: 'white',
            onPress: () => NavigationService.navigate('MomCreate')
          }}
        />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.momsList}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

MomList.propTypes = {
  fetchMoms: PropTypes.func,
  momsList: PropTypes.array,
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    momsList: state.moms.list
  };
};

export default connect(
  mapStateToProps,
  { fetchMoms }
)(MomList);
