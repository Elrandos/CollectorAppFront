import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Search from '../pages/Search';
import {HomeStackNav} from './HomeStackNav';
const Stack = createNativeStackNavigator();
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
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={HomeStackNav} />
      <Stack.Screen name="Home" component={HomeStackNav} />
      <Stack.Screen name="Home" component={HomeStackNav} />
    </Stack.Navigator>
  );
};
// <Tab.Navigator
//   screenOptions={({route}) => ({
//     headerShown: false,
//     tabBarShowLabel: false,
//     tabBarInactiveTintColor: '#4a4a4a',
//     tabBarActiveTintColor: 'black',
//     tabBarIcon: ({color, size}) => {
//       let iconName;

//       if (route.name === 'Home') {
//         iconName = 'home-outline';
//       } else if (route.name === 'Search') {
//         iconName = 'search-outline';
//       } else if (route.name === 'TI') {
//         iconName = 'information-circle-outline'; // możesz tu zmienić na dowolną inną ikonę
//       }

//       return <Ionicons name={iconName} size={size} color={color} />;
//     },
//   })}>
//   <Tab.Screen name="Home" component={HomeStackNav} />
//   <Tab.Screen name="Search" component={Search} />
// </Tab.Navigator>
