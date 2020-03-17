import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import HomeMarketDetail from '../scenes/HomeMarketDetail';
import HomeMarketProChart from '../scenes/HomeMarketProChart';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: null,
            headerStyle: { shadowRadius: 0, shadowOffset: { height: 0 } }
          }}
          name="MainTabNavigator"
          component={MainTabNavigator}
        />
        <Stack.Screen name="HomeMarketDetail" component={HomeMarketDetail} />
        <Stack.Screen
          name="HomeMarketProChart"
          component={HomeMarketProChart}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
