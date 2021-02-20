import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import { AppRoutes } from './routes';

declare const global: {HermesInternal: null | {}};

const App = () => (
  <NavigationContainer>
    <View>
      <StatusBar backgroundColor='#000' />
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <AppRoutes />
      </View>
    </View>
  </NavigationContainer>
);
export { App };
