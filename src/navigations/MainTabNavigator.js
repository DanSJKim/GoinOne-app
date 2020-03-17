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
  navigation.setOptions({
    headerLeft: () => (
      <TopWrapper>
        <CoinOneLogo
          source={{
            uri: 'https://image.zdnet.co.kr/2018/01/10/lyk_KMgnJltaZmdsqbAf.jpg'
          }}
        />
      </TopWrapper>
    ),
    headerRight: () => (
      <Ionicons name="md-search" size={27} style={{ paddingRight: 15 }} />
    )
  });
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

const TopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

const CoinOneLogo = styled.Image`
  width: 140px;
  height: 30px;
`;
