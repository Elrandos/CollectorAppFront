import React, {Component, useEffect} from 'react';
import {StyleSheet, AppState, Text, View, SafeAreaView} from 'react-native';
// import {AuthNav} from './AuthNav';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import store from '../store';
import {MUST_LOGIN} from '../actions/types';
import {loadUser2} from '../actions/auth';
import {UnauthorizedNav} from './UnauthorizedNav';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Home from '../pages/Home';
import {AuthorizedNav} from './AuthorizedNav';
import {HomeStackNav} from './HomeStackNav';
const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerShown: false,
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

class Nav extends Component {
  state = {
    appState: AppState.currentState,
    loaded: false,
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    newMessage: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.loadUser2()
  }

  render() {
    const {newmessage, isLoading} = this.props;
    return (
      <>
        {!this.props.isLoading ? (
          <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
              {!this.props.isAuthenticated ? (
                <Stack.Screen name="Login" component={UnauthorizedNav} />
              ) : (
                <Stack.Screen name="Home" component={HomeStackNav} />
              )}
            </Stack.Navigator>
          </NavigationContainer>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
            <Text>Loading...</Text>
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.auth.isLoading,
});

export default connect(mapStateToProps, {loadUser2})(Nav);
