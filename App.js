import React from 'react';
import {StyleSheet, View} from 'react-native';

import Navigator from './navigation/tabs';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'blue',
    paddingHorizontal: 240,
    width: '100%',
    height: '100%',
  },
});

export default App;
