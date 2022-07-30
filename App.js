import * as React from 'react';
import {LogBox, View, Text} from 'react-native';

// import {store, persistor} from 'app/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import {PersistGate} from 'redux-persist/integration/react';

import Navigator from './navigation/tabs';
import GetCity from './components/GetCity';

const link = from([new HttpLink({uri: 'https://api.spacex.land/graphql/'})]);

//ERROR TypeError: undefined is not an object (evaluating 'this.resetStoreCallbacks = []')
//ERROR Invariant Violation: Module AppRegistry is not a registered callable module (calling runApplication). A frequent cause of the error is that the application entry file path is incorrect.
//       This can also happen when the JS bundle is corrupt or there is an early initialization error when loading React Native.

const client = ApolloClient({
  // cache: new InMemoryCache(),
  link: link,
});

export default function App() {
  return (
    // <GestureHandlerRootView>
    //   {/* <Provider>
    //     <PersistGate loading={null}> */}
    //       <Navigator />
    //     {/* </PersistGate>
    //   </Provider> */}
    // </GestureHandlerRootView>
    // <View>
    //   <Text>fdsioiodsnfdo</Text>
    // </View>
    <ApolloProvider client={client}>
      <GetCity />
    </ApolloProvider>
    // <Text>adsasdasd</Text>
  );
}
