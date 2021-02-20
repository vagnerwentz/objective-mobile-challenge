import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';

const App = createStackNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
      <App.Screen name="Home" component={Home} />
    </App.Navigator>
  )
}

export { AppRoutes };
