import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackNav} from './HomeStackNav';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerShown: false,
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

export const AuthorizedNav = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={HomeStackNav} />
    </Stack.Navigator>
  );
};