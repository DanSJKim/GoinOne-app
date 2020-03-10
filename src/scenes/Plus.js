import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Plus = () => {
  return (
    <Container>
      <Text>Plus</Text>
    </Container>
  );
};

export default Plus;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
