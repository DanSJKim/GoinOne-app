import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const HomeMy = () => {
  return (
    <Container>
      <MainWrapper>
        <TitleWrapper>
          <View>
            <TopText>5분만에 보는 주간사항</TopText>
            <BottomText>코인원 암호화폐 동향</BottomText>
          </View>
          <ReadButtonWrapper>
            <ReadButtonText>바로 읽기</ReadButtonText>
          </ReadButtonWrapper>
        </TitleWrapper>
        <FavoriteCoinWRapper>
          <FavoriteCoinPlus>+</FavoriteCoinPlus>
          <FavoriteCoinText>관심 코인을 등록하세요.</FavoriteCoinText>
        </FavoriteCoinWRapper>
      </MainWrapper>
    </Container>
  );
};

export default HomeMy;

const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

const MainWrapper = styled.View`
  padding: 15px 20px;
  flex: 1;
  width: 100%;
`;

const TitleWrapper = styled.View`
  background-color: #3c6cff;
  width: 100%;
  height: 75px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const TopText = styled.Text`
  color: #fff;
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const BottomText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: 700;
`;

const ReadButtonWrapper = styled.View`
  margin-left: 20px;
  background-color: #fff;
  width: 60px;
  height: 25px;
  border-radius: 3px;
  justify-content: center;
  align-items: center;
`;

const ReadButtonText = styled.Text`
  color: #3c6cff;
  font-size: 13px;
`;

const FavoriteCoinWRapper = styled.View`
  margin-top: 20px;
  background-color: #fff;
  width: 100%;
  height: 150px;
  border-radius: 5px;
  align-items: center;
  border-width: 0.3px;
  border-color: #797979;
`;

const FavoriteCoinPlus = styled.Text`
  margin-top: 15px;
  color: #d9d9d9;
  font-size: 60px;
`;

const FavoriteCoinText = styled.Text`
  color: #797979;
  font-size: 12px;
`;
