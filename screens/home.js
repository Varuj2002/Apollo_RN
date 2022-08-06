import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import {Dropdown} from 'react-native-element-dropdown';
import {GET_CITY} from '../GraphQL/Querie';

export default function Home() {
  const dataCity = [
    {
      name: 'AM',
    },
    {
      name: 'RU',
    },
    {
      name: 'BR',
    },
    {
      name: 'SV',
    },
  ];

  const [chooseItem, setChooseItem] = React.useState();

  const {data} = useQuery(GET_CITY, {
    variables: {
      code: chooseItem,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'network-only',
  });

  const capital = data?.country?.capital;
  const currency = data?.country?.currency;
  const emoji = data?.country?.emoji;
  const name = data?.country?.name;
  const native = data?.country?.native;

  const [typesData, setTypesData] = React.useState();
  const [onBlur, setOnBlur] = React.useState(false);

  const renderItem = item => {
    return (
      <View>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <Dropdown
        style={styles.contain}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        containerStyle={styles.containerStyle}
        data={dataCity}
        inside={false}
        onBlur={() => {
          setOnBlur(!onBlur);
        }}
        onFocus={() => {
          setOnBlur(true);
        }}
        labelField="name"
        valueField="name"
        value={typesData}
        placeholder="Choose"
        onChange={item => {
          setTypesData(item);
          setChooseItem(item.name);
        }}
        renderItem={renderItem}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Capital {capital}</Text>
        <Text style={styles.title}>Emoji {emoji}</Text>
        <Text style={styles.title}>Currency {currency}</Text>
        <Text style={styles.title}>Name {name}</Text>
        <Text style={styles.title}>Native {native}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemName: {
    fontSize: 20,
    paddingLeft: 10,
    paddingVertical: 10,
    color: 'black',
  },
  selectedText: {
    color: 'black',
    fontSize: 20,
  },
  contain: {
    borderWidth: 1,
    marginTop: 15,
    marginHorizontal: 15,
    paddingLeft: 10,
    borderRadius: 20,
  },
  container: {
    padding: 24,
    backgroundColor: '#61dafb',
  },
  placeholder: {
    fontSize: 20,
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
