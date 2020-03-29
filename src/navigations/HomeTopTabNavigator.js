import React from 'react';
import styled from 'styled-components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeMy from '../scenes/HomeMy';
import HomeInfo from '../scenes/HomeInfo';
import HomeMarket from '../scenes/HomeMarket';
import HomeTabBar from '../components/home/HomeTabBar';
import { Ionicons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

const HomeTopTabNavigator = ({ route }) => {
  // console.log('route?? : ', route);

  return (
    <Container>
      <TopWrapper>
        <CoinOneLogo
          source={{
            uri: 'https://image.zdnet.co.kr/2018/01/10/lyk_KMgnJltaZmdsqbAf.jpg'
          }}
        />
        <Ionicons name="md-search" size={27} style={{ paddingRight: 15 }} />
      </TopWrapper>
      <Tab.Navigator
        initialRouteName="MARKET"
        tabBar={props => <HomeTabBar {...props} />}
      >
        <Tab.Screen name="MY" component={HomeMy} />
        <Tab.Screen name="MARKET" component={HomeMarket} />
        {/* <Tab.Screen name="INFO" component={HomeInfo} /> */}
      </Tab.Navigator>
    </Container>
  );
};

export default HomeTopTabNavigator;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

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
