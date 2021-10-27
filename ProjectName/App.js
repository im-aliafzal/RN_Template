/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {LogBox, StyleSheet, Text, useColorScheme, View} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import globalStyles from 'src/config/globalStyles';
import {persistor, store} from 'src/Redux/ConfigureStore';

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1, width: '100%', ...globalStyles.center}}>
          <Text>HELLO</Text>
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
