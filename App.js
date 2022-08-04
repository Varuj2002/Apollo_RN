import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import {GET_CITY} from './GraphQL/Querie';

export default function App() {
  const {data} = useQuery(GET_CITY, {
    variables: {
      code: 'Ru',
    },

    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });
  const capital = data?.country?.capital;
  const currency = data?.country?.currency;
  const emoji = data?.country?.emoji;
  const name = data?.country?.name;
  const native = data?.country?.native;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capital {capital}</Text>
      <Text style={styles.title}>Emoji {emoji}</Text>
      <Text style={styles.title}>Currency {currency}</Text>
      <Text style={styles.title}>Name {name}</Text>
      <Text style={styles.title}>Native {native}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#61dafb',
  },
  title: {
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
