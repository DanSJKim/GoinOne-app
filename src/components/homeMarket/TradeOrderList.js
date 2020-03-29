import React from 'react';
import { View, Text, SectionList } from 'react-native';
import styled from 'styled-components';

/*
 * 매수, 매도 리스트
 */

// 매수, 매도를 위아래로 나눈 섹션 리스트
const TradeOrderList = ({ sellData, buyData }) => {
  // SectionList 데이터 구조에 맞게 변환
  let sell = {};
  let sellDatas = [];
  let buy = {};
  let buyDatas = [];
  let Datas = [];

  sellData.map(item => {
    item.title = 'sell';
    console.log('sell item: ', item);
    sellDatas.push(item);
  });
  // sellDatas.reverse();
  sell.data = sellDatas;
  Datas.push(sell);

  buyData.map(item => {
    item.title = 'buy';
    console.log('buy item: ', item);
    buyDatas.push(item);
  });
  buy.data = buyDatas;
  Datas.push(buy);

  console.log('Datas:: ', Datas);
  let amountList = [];
  buyDatas.map(item => amountList.push(item.amount));
  buyDatas.map(item => amountList.push(item.amount));
  console.log('max: ', Math.max(...amountList));
  let maxValue = Math.max(...amountList);
  console.log('maxVal::', maxValue);
  return (
    <Container>
      <SectionList
        sections={Datas}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => (
          <Item
            key={index}
            price={item.price}
            quantity={item.amount}
            title={item.title}
            maxValue={maxValue}
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

// 매수, 매도 각 아이템
function Item({ price, quantity, title, maxValue }) {
  // title이 Ask일 때 파란색, Bid일 때 빨강색으로 표시
  return (
    <ItemContainer>
      <PriceText title={title}>{parseInt(price).toLocaleString()}</PriceText>
      <QuantityWrapper>
        <QuantityBar thisValue={quantity} maxValue={maxValue} title={title} />
        <QuantityText title={title}>{`${parseFloat(quantity).toFixed(
          2
        )}`}</QuantityText>
      </QuantityWrapper>
    </ItemContainer>
  );
}

const Container = styled.View``;

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 0.2px;
  border-color: #a3a3a3;
`;

const PriceText = styled.Text`
  color: ${props => (props.title === 'sell' ? '#82b1ed' : '#ff7d9d')};
  font-weight: 700;
  padding: 13px;
  border-bottom-width: 3px;
  border-color: blue;
`;

const QuantityWrapper = styled.View`
  width: 50px;
`;

const QuantityBar = styled.View`
  height: 13px;
  background-color: ${props =>
    props.title === 'sell' ? '#82b1ed' : '#ff7d9d'};
  /* 코인 수량 비율별로 길이 계산 */
  width: ${props =>
    (parseInt(props.thisValue) / parseInt(props.maxValue)) * 100 + '%'};
`;

const QuantityText = styled.Text`
  color: ${props => (props.title === 'sell' ? '#82b1ed' : '#ff7d9d')};
  font-size: 9px;
`;
