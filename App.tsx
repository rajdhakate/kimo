import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import MainTabs from './src/screens/MainTabs';

import {NavigationContainer} from '@react-navigation/native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
