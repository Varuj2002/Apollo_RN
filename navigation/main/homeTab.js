import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../../screens/home';

const HomeStack = createNativeStackNavigator();

const HomeTabNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeTabNavigator;
