import React from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Text, useColorScheme, View} from 'react-native';

const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    // <SafeAreaProvider>
    <View>
      <Text>Homegfniidfngiodfngiodfngiodn</Text>
    </View>
    // </SafeAreaProvider>
  );
};

export default Home;
