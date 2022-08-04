import React from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, useColorScheme, View} from 'react-native';

const Profile = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SafeAreaProvider>
      <View>
        <Text>Profile</Text>
      </View>
    // </SafeAreaProvider>
  );
};

export default Profile;
