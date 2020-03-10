import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../scenes/Home';
import Balance from '../scenes/Balance';
import Plus from '../scenes/Plus';
import More from '../scenes/More';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Balance" component={Balance} />
        <Tab.Screen name="Plus" component={Plus} />
        <Tab.Screen name="More" component={More} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabNavigator;
