import React from 'react';
import styled from 'styled-components';
import TopFilterItem from './TopFilterItem';

const menu = [
  { name: '코인명' },
  { name: '현재가' },
  { name: '등락률' },
  { name: '거래대금' }
];

const Top = () => {
  return (
    <TopContainer>
      {menu.map((item, i) => (
        <TopFilterItem key={i} name={item.name} />
      ))}
    </TopContainer>
  );
};

export default Top;

const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 12px 15px 10px 15px;
`;
