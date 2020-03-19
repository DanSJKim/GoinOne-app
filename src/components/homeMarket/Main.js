import React, { useState, useEffect } from 'react';
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

  const [marketList, setMarketList] = useState([]);

  useEffect(() => {
    fetch('http://10.58.2.252:8000/exchange/1', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log('response data: ', data.item_data);
        setMarketList(data.item_data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  console.log('marketList: ', marketList);
  // console.log('DATA: ', DATA);
  return (
    <View>
      {/* <MarketList
        sections={marketList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          console.log('item: ', item);
          return (
            <MarketItem nav={props.nav} symbol={item.code} name={item.name} />
          );
        }}
        renderSectionHeader={({ section: { title } }) => (
          <HeaderText>{title}</HeaderText>
        )}
      /> */}
      <MarketLists
        data={marketList}
        renderItem={({ item, index }) => (
          <MarketItem
            nav={props.nav}
            symbol={item.code}
            name={item.name}
            nowprice={item.now_price}
            volume={item['24_trade_volume']}
            coinIndex={index}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Main;

const MarketList = styled.SectionList``;

const MarketLists = styled.FlatList``;

const HeaderText = styled.Text`
  font-weight: 600;
  color: #565656;
  background-color: #f8f8f8;
  padding: 5px 15px;
`;
