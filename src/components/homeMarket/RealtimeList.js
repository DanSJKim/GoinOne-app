import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const RealtimeList = () => {
  return (
    <Container>
      <Text>realtime</Text>
    </Container>
  );
};

export default RealtimeList;

const Container = styled.View`
  display: flex;
  flex: 1;
  background-color: #432643;
  align-items: center;
`;
