import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Search from '../pages/Search';
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// import AuthNav from './AuthNav';

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
    // <Stack.Navigator
    //   screenOptions={screenOptionStyle}
    //   initialRouteName={'Home'}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#4a4a4a',
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
    // </Stack.Navigator>
  );
};
