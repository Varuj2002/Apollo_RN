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
  ApolloLink,
} from '@apollo/client';

const link = from([
  // new HttpLink({uri: 'https://countries.trevorblades.com/graphql'}),
  new HttpLink({uri: 'https://fruits-api.netlify.app/graphql'}),
]);

// To do connected two and more Api's

// const link8 = from([
//   new HttpLink({uri: 'https://countries.trevorblades.com/graphql'}),
//   // new HttpLink({uri: 'https://fruits-api.netlify.app/graphql'}),
// ]);

// const c = ApolloLink.split(
//   o => {
//     o.getContext().clientName === 'mongo', console.log(o.getContext().clientName, 4444444444);
//   },
//   link,
//   (o => o.getContext().clientName === 'neo', link, link8), // by default -> postgre)
// );

// console.log(c);

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
