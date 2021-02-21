import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../pages/Home';
import { Detail } from '../components/Heros/Detail';

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
      <App.Screen name="Detail" component={Detail} />
    </App.Navigator>
  )
}

export { AppRoutes };
