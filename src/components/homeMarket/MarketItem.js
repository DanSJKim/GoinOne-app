import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styled from 'styled-components';

/*
 *  Market List Item
 */

function MarketItem({
  nav,
  symbol,
  name,
  nowprice,
  volume,
  coinIndex,
  yesterdayprice,
  todaymaxprice
}) {
  const [fluctuation, setFluctuation] = useState('');

  const getFluctuation = () => {
    let rate = ((todaymaxprice - yesterdayprice) / yesterdayprice) * 100;
    console.log('rate:: ', rate);
    setFluctuation(rate);
  };

  useEffect(() => {
    getFluctuation();
  }, []);

  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigation.navigate('HomeMarketDetail', {
          symbol,
          name,
          nowprice,
          volume,
          coinIndex,
          fluctuation,
          // 어제 가격 오늘 가격 차이
          compare: todaymaxprice - yesterdayprice,
          // 등락률
          fluctuation: fluctuation
        });
      }}
    >
      <ItemWrapper>
        <MarketSymbolImageWrapper>
          <MarketSymbolImage
            source={{
              uri:
                'https://en.bitcoinwiki.org/upload/en/images/b/be/Bitsymb.png'
            }}
          />
        </MarketSymbolImageWrapper>

        <NameWrapper>
          <MarketSymbolName>{symbol}</MarketSymbolName>
          <MarketFullName>{name}</MarketFullName>
        </NameWrapper>

        <MarketCurrentPrice
          today={todaymaxprice}
          yesterday={yesterdayprice}
          fluctuation={fluctuation}
        >
          {parseInt(nowprice).toLocaleString()}
        </MarketCurrentPrice>
        <MarketFluctuationRate
          today={todaymaxprice}
          yesterday={yesterdayprice}
          fluctuation={fluctuation}
        >
          {fluctuation > 0
            ? `+${parseFloat(fluctuation).toFixed(2)}%`
            : `-${parseFloat(fluctuation).toFixed(2)}%`}
        </MarketFluctuationRate>
        <MarketTradingValue>
          {volume >= 1000000
            ? `${parseInt(volume / 1000000).toLocaleString()} 백만`
            : `${parseInt(volume).toLocaleString()}`}
        </MarketTradingValue>
      </ItemWrapper>
    </TouchableOpacity>
  );
}

export default MarketItem;

const ItemWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
  margin: 0 15px;
  border-bottom-width: 0.7px;
  border-color: #e5e5e5;
`;

const MarketSymbolImageWrapper = styled.View`
  height: 100%;
  padding-top: 3.5px;
`;

const MarketSymbolImage = styled.Image`
  width: 12px;
  height: 12px;
  margin-right: 6px;
`;

const NameWrapper = styled.View`
  flex: 1;
`;

const MarketSymbolName = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 3px;
`;

const MarketFullName = styled.Text`
  font-size: 11px;
  color: #919191;
`;

const MarketCurrentPrice = styled.Text`
  flex: 1.67;
  text-align: right;
  font-weight: 600;
  color: ${props =>
    props.today - props.yesterday > 0 ? '#e12243' : '#1863b6'};
`;

const MarketFluctuationRate = styled.Text`
  flex: 1;
  text-align: right;
  font-size: 13px;
  color: ${props =>
    props.today - props.yesterday > 0 ? '#e12243' : '#1863b6'};
`;

const MarketTradingValue = styled.Text`
  flex: 1;
  font-size: 12px;
  text-align: right;
  color: #aaaaaa;
  margin-right: 5px;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32
  },
  title: {
    fontSize: 24
  }
});
