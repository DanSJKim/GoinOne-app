import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import styled from 'styled-components';
import DATA from './Data.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MarketItem from './MarketItem.js';

/*
 * Home - MARKET탭 - 마켓 목록
 */

const Main = props => {
  // console.log('DATA: ', DATA);
  return (
    <View>
      <MarketList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          // console.log('item: ', item);
          // console.log('props.nav: ', props.nav);
          return (
            <MarketItem nav={props.nav} symbol={item.symbol} name={item.name} />
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <HeaderText>{title}</HeaderText>
        )}
      />
    </View>
  );
};

export default Main;

const MarketList = styled.SectionList``;

const HeaderText = styled.Text`
  font-weight: 600;
  color: #565656;
  background-color: #f8f8f8;
  padding: 5px 15px;
`;
