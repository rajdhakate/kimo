import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import store from './src/store';
import MainTabs from './src/screens/MainTabs';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainTabs />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
