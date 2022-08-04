import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Profile from '../../screens/profile';

const ProfileStack = createNativeStackNavigator();

const ProfileTabNavigator = ({route}) => {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileTabNavigator;
