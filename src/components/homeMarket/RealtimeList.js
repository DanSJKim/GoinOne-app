import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styled from 'styled-components';

/*
 * 매도 리스트
 */
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb2ba',
    price: '6,675,000',
    quantity: '0.8918'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53ab28ba',
    price: '6,675,000',
    quantity: '0.8918'
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3d53abb28ba',
    price: '6,675,000',
    quantity: '0.8918'
  }
];

const RealtimeList = () => {
  const [tradingDatas, setTradingDatas] = useState([]);

  useEffect(() => {
    console.log('HomeMarketDetail UseEffect:');

    fetch(
      `http://10.58.2.252:8000/exchange/1`,
      // `https://api.upbit.com/v1/candles/days?market=KRW-${symbol}&count=200`,
      {
        method: 'GET' // or 'PUT'
      }
    )
      .then(response => response.json())
      .then(data => {
        setTradingDatas(data.data);
        data.data.map(item => {
          tradingPrices.push(parseInt(item.trade_price));
          console.log('item: ', parseInt(item.trade_price));
        });
        setChartOptions(prevState => {
          prevState.series[0].data = tradingPrices;
          return {
            ...prevState
          };
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // getDatas();
  }, []);

  return (
    <Container>
      {DATA.map((item, index) => {
        return (
          <ItemContainer key={index}>
            <PriceText>{item.price}</PriceText>
            <QuantityText>{item.quantity}</QuantityText>
          </ItemContainer>
        );
      })}
    </Container>
  );
};

export default RealtimeList;

const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 12px 8px 12px 8px;
  width: 10%;
`;

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const PriceText = styled.Text`
  color: #e95e76;
  margin-bottom: 5px;
  border-bottom-width: 3px;
  border-color: blue;
  font-size: 10px;
`;

const QuantityText = styled.Text`
  color: #e95e76;
  font-size: 9px;
`;
