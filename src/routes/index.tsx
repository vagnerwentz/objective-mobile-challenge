import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HeroList } from '../pages/HeroList';

const App = createStackNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
  >
      <App.Screen name="HeroList" component={HeroList} />
    </App.Navigator>
  )
}

export { AppRoutes };
