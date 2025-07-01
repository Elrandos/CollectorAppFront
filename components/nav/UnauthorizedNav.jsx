import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../pages/Login';
import Register from '../pages/Register';

// import AuthNav from './AuthNav';

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerShown: false,
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

export const UnauthorizedNav = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName={'Login'}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};
