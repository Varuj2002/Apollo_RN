import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useMutation} from '@apollo/client';
import {ADD_FRUIT} from '../GraphQL/Mutation';
import Plus from '../images/2795.png';
import {
  Text,
  useColorScheme,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const Fruit = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const [mutateFunction, {data, loading, error}] = useMutation(ADD_FRUIT, {
    onCompleted() {
      navigation.navigate('Home');
      console.log('success');
    },
    onError(err) {
      console.log(error, 7777777);
    },
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm({
    defaultValues: {
      id: '',
      scientific_name: '',
      tree_name: '',
      family: '',
      origin: '',
      fruit_name: '',
      description: '',
      bloom: '',
      maturation_fruit: '',
      life_cycle: '',
      climatic_zone: '',
    },
  });

  const onSubmit = () => {
    const {
      id,
      scientific_name,
      tree_name,
      family,
      origin,
      description,
      bloom,
      maturation_fruit,
      fruit_name,
      life_cycle,
      climatic_zone,
    } = getValues();
    mutateFunction({
      variables: {
        id,
        scientific_name,
        tree_name,
        origin,
        description,
        bloom,
        family,
        maturation_fruit,
        life_cycle,
        fruit_name,
        climatic_zone,
      },
    });
  };
  return (
    <ScrollView style={styles.contain}>
      <Text style={styles.textAdded}>Added Fruit </Text>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'rules_password',
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            error={errors.email}
            style={styles.input}
            placeholder="Id"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="id"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'rules_password',
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            error={errors.email}
            style={styles.input}
            placeholder="Climatic Zone"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="climatic_zone"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            error={errors.maturation_fruit}
            style={styles.input}
            placeholder="Maturation Fruit"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="maturation_fruit"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'rules_password',
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            error={errors.email}
            style={styles.input}
            placeholder="Scientific Name"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="scientific_name"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'rules_password',
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            error={errors.email}
            style={styles.input}
            placeholder="Origin"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="origin"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'rules_password',
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            error={errors.email}
            style={styles.input}
            placeholder="Bloom"
            keyboardType="email-address"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="bloom"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'rules_password',
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            error={errors.email}
            style={styles.input}
            placeholder="Tree Name"
            keyboardType="email-address"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="tree_name"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'rules_password',
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            error={errors.email}
            style={styles.input}
            placeholder="Life Cycle"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="life_cycle"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'rules_password',
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            error={errors.email}
            style={styles.input}
            placeholder="Family"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="family"
      />
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: 'rules_password',
          },
        }}
        render={({field: {onChange, value}}) => (
          <TextInput
            error={errors.email}
            style={styles.input}
            placeholder="Fruit Name"
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fruit_name"
      />
      <TouchableOpacity
        onPress={() => {
          handleSubmit(onSubmit)();
        }}
        style={styles.touchContain}>
        <View style={styles.plusContain}>
          <Image source={Plus} style={styles.imagePlus} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Fruit;

const styles = StyleSheet.create({
  touchContain: {
    position: 'absolute',
    bottom: 50,
    right: 20,
  },
  contain: {
    flex: 1,
    backgroundColor: 'white',
  },
  textAdded: {
    fontSize: 30,
    color: 'black',
    marginLeft: 15,
  },
  input: {
    marginLeft: 15,
    marginRight: 15,
    paddingVertical: 10,
    paddingLeft: 10,
    marginBottom: 10,
    borderWidth: 1,
    color: 'black',
    backgroundColor: 'white',
  },
  imagePlus: {
    width: 40,
    height: 40,
  },
  plusContain: {
    backgroundColor: 'blue',
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
