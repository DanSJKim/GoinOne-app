import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const Home = () => {
  return (
    <Container>
      <TopWrapper>
        <CoinOneLogo
          source={{
            uri: 'https://image.zdnet.co.kr/2018/01/10/lyk_KMgnJltaZmdsqbAf.jpg'
          }}
        />
        <Ionicons name="md-search" size={27} />
      </TopWrapper>
    </Container>
  );
};

export default Home;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const TopWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
`;

const CoinOneLogo = styled.Image`
  width: 140px;
  height: 30px;
`;
