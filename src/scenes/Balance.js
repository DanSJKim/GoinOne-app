import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Balance = () => {
  return (
    <Container>
      <Text>Balance</Text>
    </Container>
  );
};

export default Balance;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
