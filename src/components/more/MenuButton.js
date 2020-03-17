import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const MenuButton = props => {
  console.log('props: ', props);
  return (
    <Container>
      <MenuText>{props.name}</MenuText>
      <RightArrow />
    </Container>
  );
};

export default MenuButton;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  border-bottom-width: 0.2px;
  justify-content: space-between;
`;

const MenuText = styled.Text`
  font-size: 17px;
  font-weight: 200;
  margin: 25px 0;
`;

const RightArrow = styled.View`
  transform: rotate(-42deg);
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-color: #858585;
  width: 10px;
  height: 10px;
  margin-top: 29px;
  margin-bottom: 20px;
  margin-right: 5px;
`;
