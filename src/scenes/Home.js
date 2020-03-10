import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
