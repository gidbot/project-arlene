import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Header, ListItem } from 'react-native-elements';
import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';

import NavigationService from '../config/NavigationService';
import GLOBALS from '../config/globals';
import { fetchMoms, refreshMoms } from '../actions/momActions';
import { Spinner } from '../components/Spinner';

class MomList extends Component {
  componentWillMount() {
    if (!this.props.momsListInitialized) {
      this.props.fetchMoms({
        userUid: this.props.userUid
      });
    }
  }

  renderItem = ({ item }) => (
    <ListItem
      title={GLOBALS.capitalize(item.name)}
      subtitle={item.phoneNumber}
      leftAvatar={{ icon: { name: 'user', type: 'antdesign' } }}
      onPress={() => NavigationService.navigate('MomView')}
      chevron
    />
  );

  _listEmptyComponent = () => {
    const middleComponent = this.props.momsListLoading
      ? this.renderSpinner()
      : this.renderNoMoms();
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: 200
        }}
      >
        {middleComponent}
      </View>
    );
  };

  renderSpinner = () => {
    return <Spinner size="large" color={EStyleSheet.value('$primaryPurple')} />;
  };

  renderNoMoms = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: 200
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>No Moms</Text>
        <Text
          onPress={() => NavigationService.navigate('MomCreate')}
          style={{
            paddingTop: 20,
            fontSize: 15,
            fontWeight: '900',
            color: EStyleSheet.value('$primaryPurple')
          }}
        >
          Add One
        </Text>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          backgroundColor={EStyleSheet.value('$primaryPurple')}
          centerComponent={{
            text: 'My Moms',
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
          style={{ flex: 1 }}
          ListEmptyComponent={this._listEmptyComponent}
          keyExtractor={(item, index) => index.toString()}
          data={this.props.momsList}
          renderItem={this.renderItem}
          onRefresh={() =>
            this.props.refreshMoms({
              userUid: this.props.userUid
            })
          }
          refreshing={this.props.momListRefreshing}
        />
      </View>
    );
  }
}

MomList.propTypes = {
  momsListInitialized: PropTypes.bool,
  momsListLoading: PropTypes.bool,
  momListRefreshing: PropTypes.bool,
  fetchMoms: PropTypes.func,
  refreshMoms: PropTypes.func,
  momsList: PropTypes.array,
  user: PropTypes.object
};

const mapStateToProps = state => {
  return {
    userUid: state.auth.user.uid,
    momsList: state.moms.list,
    momsListInitialized: state.moms.listInitialized,
    momsListLoading: state.moms.listLoading,
    momListRefreshing: state.moms.listRefreshing
  };
};

export default connect(
  mapStateToProps,
  { fetchMoms, refreshMoms }
)(MomList);
