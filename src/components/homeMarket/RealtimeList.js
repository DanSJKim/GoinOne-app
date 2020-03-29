import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
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

const RealtimeList = ({ tradeData }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    console.log('HomeMarketDetail UseEffect:');

    // fetch(`http://10.58.2.252:8000/exchange/${coinIndex + 1}`, {
    //   method: 'GET' // or 'PUT'
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('data:: ', data.trade_data);
    //     setDatas(data.trade_data);
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });

    // getDatas();
  }, []);

  return (
    <Container>
      <ScrollView>
        {tradeData.map((item, index) => {
          console.log('item::: ', item);
          return (
            <ItemContainer key={index}>
              <PriceText isbuy={item.is_buy}>{parseInt(item.price)}</PriceText>
              <QuantityText isbuy={item.is_buy}>
                {parseFloat(item.amount).toFixed(4)}
              </QuantityText>
            </ItemContainer>
          );
        })}
      </ScrollView>
    </Container>
  );
};

export default RealtimeList;

const Container = styled.View`
  display: flex;
  align-items: center;
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 12px 8px 12px 8px;
  flex: 1;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 160px;
`;

const PriceText = styled.Text`
  color: #e95e76;
  margin-bottom: 5px;
  border-bottom-width: 3px;
  border-color: blue;
  font-size: 10px;
  color: ${props => (props.isbuy ? '#e95e76' : '#82b1ed')};
`;

const QuantityText = styled.Text`
  color: ${props => (props.isbuy ? '#e95e76' : '#82b1ed')};
  font-size: 9px;
`;
