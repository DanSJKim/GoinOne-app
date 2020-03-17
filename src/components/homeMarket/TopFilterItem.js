import React from 'react';
import styled from 'styled-components';

/*
 * Home - MARKET - 상단 필터 버튼
 */

const TopFilterItem = props => {
  return (
    <FilterWrapper>
      <FilterText>{props.name}</FilterText>
      <ArrowWrapper>
        <TopArrow />
        <BottomArrow />
      </ArrowWrapper>
    </FilterWrapper>
  );
};

export default TopFilterItem;

const FilterWrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 0.2px;
  border-color: #d8d8d8;
  border-radius: 5px;
  margin-right: 3px;
  padding: 8px;
  flex: ${props => {
    let filterName = props.children[0].props.children;
    if (filterName === '코인명' || filterName === '현재가') {
      return 1.5;
    } else {
      return 1;
    }
  }};
`;

const FilterText = styled.Text`
  color: #a4a4a4;
  font-weight: 600;
  font-size: 13px;
`;

const ArrowWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopArrow = styled.View`
  width: 0;
  height: 0;
  border-left-width: 4;
  border-right-width: 4;
  border-bottom-width: 4;
  background-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #e5e5e5;
  margin-bottom: 2.5px;
`;

const BottomArrow = styled.View`
  width: 0;
  height: 0;
  border-left-width: 4;
  border-right-width: 4;
  border-top-width: 4;
  background-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-top-color: #e5e5e5;
`;
