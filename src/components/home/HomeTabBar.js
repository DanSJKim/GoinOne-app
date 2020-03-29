import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from 'react-native';
import { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import styled from 'styled-components';

function HomeTabBar({ state, descriptors, navigation, position }) {
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;
  // When the user opens the application, it's the first tab that is open.
  // The initial value of translateX is 0.

  const [translateValue] = useState(new Animated.Value(tabWidth));

  return (
    <SafeAreaView>
      <View>
        <View style={StyleSheet.absoluteFillObject}>
          <Animated.View
            style={[
              S.activeTab,
              {
                marginTop: 40,
                width: tabWidth,
                transform: [{ translateX: translateValue }]
              }
            ]}
          >
            <View style={S.activeTabInner} />
          </Animated.View>
        </View>
      </View>
      <View style={S.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          if (!isFocused) {
            // timing - animating style
            Animated.timing(translateValue, {
              toValue: state.index * tabWidth,
              // The translateX value should change depending on the chosen route
              duration: 150,
              velocity: 10,
              useNativeDriver: true,
              delay: 300
            }).start(); // the animation that animates the active tab circle
          }
          const onPress = routeIndex => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);

              // timing - 애니메이션 스타일
              Animated.timing(translateValue, {
                toValue: routeIndex * tabWidth,
                // The translateX value should change depending on the chosen route
                duration: 150,
                velocity: 10,
                useNativeDriver: true,
                delay: 300
              }).start(); // the animation that animates the active tab circle
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={() => {
                onPress(index);
              }}
              onLongPress={onLongPress}
              style={S.tabButton}
            >
              <MenuText focused={isFocused}>{label}</MenuText>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default HomeTabBar;

const MenuText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${props => (props.focused ? '#000' : '#d5d5d5')};
`;

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    borderTopColor: '#E8E8E8'
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTabInner: {
    width: 65,
    height: 2,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center'
  }
});
