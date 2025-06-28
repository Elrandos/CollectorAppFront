import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import AddCollections from '../pages/AddCollections';
import CollectionPage from '../pages/CollectionPage';
import AddCollectionItem from '../pages/AddCollectionItem';
import CollectionItemPage from '../pages/CollectionItemPage';
import EditCollections from '../pages/EditCollections';
import EditCollectionItem from '../pages/EditCollectionItem';
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

export const HomeStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      initialRouteName={'Home'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddCollections" component={AddCollections} />
      <Stack.Screen name="EditCollections" component={EditCollections} />
      <Stack.Screen name="CollectionPage" component={CollectionPage} />
      <Stack.Screen name="CollectionItemPage" component={CollectionItemPage} />
      <Stack.Screen name="AddCollectionItem" component={AddCollectionItem} />
      <Stack.Screen name="EditCollectionItem" component={EditCollectionItem} />
      {/* <Stack.Screen name="Wiad" component={ChatScreenMessages} /> */}
    </Stack.Navigator>
  );
};
