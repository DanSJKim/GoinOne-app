import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const More = () => {
  return (
    <Container>
      <Text>More</Text>
    </Container>
  );
};

export default More;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
