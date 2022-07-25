import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeTabNavigator from './homeTab';
import ProfileTabNavigator from './profileTab';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: 'blue',
        tabBarActiveTintColor: 'black',
        headerShown: false,
        borderRadius: 20,
        marginLeft: 15,
        marginRight: 15,
        minHeight: 65,
        borderTopWidth: 0,
        tabBarIconStyle: {
          bottom: -15,
        },
        tabBarLabelStyle: {
          fontSize: 20,
          paddingTop: 15,
          paddingBottom: 10,
          bottom: 0,
        },
      }}>
      <BottomTab.Screen
        name="HomeTab"
        component={HomeTabNavigator}
        options={{
          title: 'Home',
        }}
      />
      <BottomTab.Screen
        name="MyOrdersTab"
        component={ProfileTabNavigator}
        options={{
          title: 'Profile',
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
