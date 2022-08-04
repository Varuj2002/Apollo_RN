import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BottomTabNavigator from './bottamTab';

const MainStack = createNativeStackNavigator();

const Main = () => (
  <MainStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="BottomTabNavigator">
    <MainStack.Screen
      name="BottomTabNavigator"
      component={BottomTabNavigator}
    />
  </MainStack.Navigator>
);

export default Main;
