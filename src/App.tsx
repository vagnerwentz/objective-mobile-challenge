import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import { AppRoutes } from './routes';

declare const global: {HermesInternal: null | {}};

const App = () => (
  <NavigationContainer>
    <StatusBar backgroundColor='#000' />
    <View style={{ flex: 1, backgroundColor: '#000'}}>
      <AppRoutes />
    </View>
  </NavigationContainer>
);
export { App };
