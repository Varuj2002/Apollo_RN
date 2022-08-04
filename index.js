import React, {createContext, useState} from 'react';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from '@apollo/client';

const link = from([
  new HttpLink({uri: 'https://countries.trevorblades.com/graphql'}),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export const AuthContext = createContext();

const MyApp = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

AppRegistry.registerComponent(appName, () => MyApp);
