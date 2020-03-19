import React from 'react';
import { View, Text, SectionList } from 'react-native';
import styled from 'styled-components';

/*
 * 매수, 매도 리스트
 */

const DATA = [
  {
    title: 'Ask',

    data: [
      {
        title: 'Ask',
        id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb22ba',
        price: '4,675,000',
        quantity: '0.8918'
      },
      {
        title: 'Ask',
        id: 'bd7acbea-c1b1-46c2-aed5-3ad3a3bb2ba',
        price: '3,875,000',
        quantity: '0.8918'
      },
      {
        title: 'Ask',
        id: 'bd7acbea-c1b1-46c2-aed5-3ad3ab4b2ba',
        price: '8,075,000',
        quantity: '0.8918'
      }
    ]
  },
  {
    title: 'Bid',
    data: [
      {
        title: 'Bid',
        id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb52ba',
        price: '1,575,000',
        quantity: '0.8918'
      },
      {
        title: 'Bid',
        id: 'bd7acbea-c1b1-46c2-aed5-3ad3abb62ba',
        price: '2,475,000',
        quantity: '0.8918'
      },
      {
        title: 'Bid',
        id: 'bd7acbea-c1b1-46c2-aed5-3ad3ab7b2ba',
        price: '6,275,000',
        quantity: '0.8918'
      }
    ]
  }
];

// const DATA = [
//   {
//     title: 'Main dishes',
//     data: ['Pizza', 'Burger', 'Risotto']
//   },
//   {
//     title: 'Sides',
//     data: ['French Fries', 'Onion Rings', 'Fried Shrimps']
//   },
//   {
//     title: 'Drinks',
//     data: ['Water', 'Coke', 'Beer']
//   },
//   {
//     title: 'Desserts',
//     data: ['Cheese Cake', 'Ice Cream']
//   }
// ];

// 매수, 매도 각 아이템
function Item({ price, quantity, title }) {
  // title이 Ask일 때 파란색, Bid일 때 빨강색으로 표시
  return (
    <ItemContainer>
      <PriceText title={title}>{price}</PriceText>
      <QuantityWrapper>
        <QuantityBar title={title} />
        <QuantityText title={title}>{quantity}</QuantityText>
      </QuantityWrapper>
    </ItemContainer>
  );
}

// 매수, 매도를 위아래로 나눈 섹션 리스트
const TradeOrderList = () => {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <Item
            key={index}
            price={item.price}
            quantity={item.quantity}
            title={item.title}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View key={title}></View>
        )}
      />
    </Container>
  );
};

export default TradeOrderList;

const Container = styled.View``;

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.2px;
  border-color: #a3a3a3;
`;

const PriceText = styled.Text`
  color: ${props => (props.title === 'Ask' ? '#82b1ed' : '#ff7d9d')};
  font-weight: 700;
  padding: 13px;
  border-bottom-width: 3px;
  border-color: blue;
`;

const QuantityWrapper = styled.View`
  width: 102px;
`;

const QuantityBar = styled.View`
  width: 45%;
  height: 13px;
  background-color: ${props => (props.title === 'Ask' ? '#82b1ed' : '#ff7d9d')};
`;

const QuantityText = styled.Text`
  color: ${props => (props.title === 'Ask' ? '#82b1ed' : '#ff7d9d')};
  font-size: 9px;
`;
