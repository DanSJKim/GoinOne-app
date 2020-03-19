import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabNavigator from './MainTabNavigator';
import HomeMarketDetail from '../scenes/HomeMarketDetail';
import HomeMarketProChart from '../scenes/HomeMarketProChart';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../scenes/Login';
import SignUpTerms from '../scenes/SignUpTerms';
import SignUp from '../scenes/SignUp';
import SignUpEmail from '../scenes/SignUpEmail';

const Stack = createStackNavigator();
const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          // options={{
          //   title: null,
          //   headerStyle: { shadowRadius: 0, shadowOffset: { height: 0 } }
          // }}
          options={{ headerShown: false }}
          name="MainTabNavigator"
          component={MainTabNavigator}
        />
        <Stack.Screen name="HomeMarketDetail" component={HomeMarketDetail} />
        <Stack.Screen
          name="HomeMarketProChart"
          component={HomeMarketProChart}
        />
        <Stack.Screen
          options={{
            title: null,
            headerStyle: { shadowRadius: 0, shadowOffset: { height: 0 } }
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="SignUpTerms" component={SignUpTerms} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpEmail" component={SignUpEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
