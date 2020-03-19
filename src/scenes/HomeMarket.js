import React from 'react';
import styled from 'styled-components';
import Top from '../components/homeMarket/Top';
import Main from '../components/homeMarket/Main';

/*
 * Home - MARKET탭
 */

const HomeMarket = navigation => {
  // console.log('HomeMarket: ', navigation);
  // navigation.setOptions({
  //   headerLeft: () => (
  //     <TopWrapper>
  //       <CoinOneLogo
  //         source={{
  //           uri: 'https://image.zdnet.co.kr/2018/01/10/lyk_KMgnJltaZmdsqbAf.jpg'
  //         }}
  //       />
  //     </TopWrapper>
  //   ),
  //   headerRight: () => (
  //     <Ionicons name="md-search" size={27} style={{ paddingRight: 15 }} />
  //   )
  // });
  return (
    <Container>
      {/* 마켓 정렬 필터 */}
      <Top />
      {/* 마켓 목록 */}
      <Main nav={navigation} />
    </Container>
  );
};

export default HomeMarket;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
