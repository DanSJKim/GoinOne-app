import React from 'react';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Balance from '../scenes/Balance';
import Plus from '../scenes/Plus';
import More from '../scenes/More';
import MainTabBar from '../components/MainTabBar';
import HomeTopTabNavigator from './HomeTopTabNavigator';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const MainTabNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator tabBar={props => <MainTabBar {...props} />}>
      <Tab.Screen name="홈" component={HomeTopTabNavigator} />
      <Tab.Screen name="자산" component={Balance} />
      <Tab.Screen name="플러스" component={Plus} />
      <Tab.Screen name="더보기" component={More} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
