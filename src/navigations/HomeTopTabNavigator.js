import React from 'react';
import styled from 'styled-components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeMy from '../scenes/HomeMy';
import HomeInfo from '../scenes/HomeInfo';
import HomeMarket from '../scenes/HomeMarket';
import HomeTabBar from '../components/home/HomeTabBar';

const Tab = createMaterialTopTabNavigator();

const HomeTopTabNavigator = () => {
  return (
    <Container>
      <Tab.Navigator
        initialRouteName="MARKET"
        tabBar={props => <HomeTabBar {...props} />}
      >
        <Tab.Screen name="MY" component={HomeMy} />
        <Tab.Screen name="MARKET" component={HomeMarket} />
        <Tab.Screen name="INFO" component={HomeInfo} />
      </Tab.Navigator>
    </Container>
  );
};

export default HomeTopTabNavigator;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
