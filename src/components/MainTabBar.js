import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from 'react-native';
import { useState } from 'react';
import { Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

/*
 * Main - Customed BottomTabBar
 */

function MainTabBar({ state, descriptors, navigation }) {
  const totalWidth = Dimensions.get('window').width;
  const tabWidth = totalWidth / state.routes.length;

  const [translateValue] = useState(new Animated.Value(0));
  // When the user opens the application, it's the first tab that is open.
  // The initial value of translateX is 0.

  return (
    <SafeAreaView>
      <View style={S.container}>
        <View>
          <View style={StyleSheet.absoluteFillObject}>
            <Animated.View
              style={[
                S.activeTab,
                {
                  width: tabWidth,
                  transform: [{ translateX: translateValue }]
                }
              ]}
            >
              <View style={S.activeTabInner} />
            </Animated.View>
            {/* the container that we animate */}
          </View>
        </View>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          // 탭 메뉴 별 아이콘
          let iconName;
          if (label == '홈') {
            iconName = 'md-home';
          } else if (label == '자산') {
            iconName = 'ios-pie';
          } else if (label == '플러스') {
            iconName = 'ios-stats';
          } else if (label == '더보기') {
            iconName = 'ios-more';
          }

          const isFocused = state.index === index;

          const onPress = routeIndex => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }

            Animated.timing(translateValue, {
              toValue: routeIndex * tabWidth,
              duration: 170,
              // The translateX value should change depending on the chosen route
              velocity: 10,
              useNativeDriver: true
            }).start(); // the animation that animates the active tab circle
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
              <Ionicons
                name={iconName}
                size={20}
                style={{ color: isFocused ? '#fff' : '#cacaca' }}
              />
              <Text
                style={{ color: isFocused ? '#fff' : '#cacaca', fontSize: 12 }}
              >
                {label}
              </Text>
              {isFocused}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

export default MainTabBar;

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 54,
    borderTopWidth: 1,
    borderTopColor: '#E8E8E8'
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  activeTab: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeTabInner: {
    width: 85,
    height: 45,
    backgroundColor: '#3c72f8',
    borderRadius: 5
  }
});
