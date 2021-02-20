import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HeroList } from '../pages/HeroList';

const App = createStackNavigator();

const AppRoutes = () => {
  return (
    <App.Navigator
    screenOptions={{
      cardStyle: { backgroundColor: '#000' },
    }}
  >
      <App.Screen name="HeroList" component={HeroList} />
    </App.Navigator>
  )
}

export { AppRoutes };
