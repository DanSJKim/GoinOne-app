import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styled from 'styled-components';
import MenuButton from '../components/more/MenuButton';

const menu = [{ name: '고객센터' }, { name: '알림설정' }, { name: '환경설정' }];

const More = () => {
  return (
    <Container>
      <Wrapper>
        {/* login button */}
        <LoginButtonWrapper>
          <LoginButton title="로그인" />
        </LoginButtonWrapper>

        {/* welcome text */}
        <WelcomeWrapper>
          <LogoImage
            source={{
              uri:
                'https://www.theteams.kr/includes/uploads/company_profile/8578fb039900e8375efe8d784666e78520181207120749_nail.jpg'
            }}
          />
          <WelcomeTextWrapper>
            <HelloText>안녕하세요</HelloText>
            <WelcomeText>코인원에 오신 것을 환영합니다.</WelcomeText>
          </WelcomeTextWrapper>
        </WelcomeWrapper>

        {/* menu buttons */}
        {menu.map((item, i) => (
          <MenuButton key={i} name={item.name} />
        ))}

        {/* 코인원 Pass button */}
        <CoinOneButtonWrapper>
          <CoinOnePassImage
            source={{
              uri:
                'https://static-s.aa-cdn.net/img/gp/20600012186009/JkQvGqFHr5AJ_9envvBlMIsPtIAssVtGGoOstzQB7mpJJQxH3lG1ExlKQKaQg1-pS2g=s300?v=1'
            }}
          />
          <CoinOneButtonTextWrapper>
            <CoinOnePassText>코인원 PASS</CoinOnePassText>
            <CoinOnePassDesc>
              안전하고 간편하게 본인인증을 진행하세요.
            </CoinOnePassDesc>
          </CoinOneButtonTextWrapper>
        </CoinOneButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default More;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const Wrapper = styled.View`
  padding: 15px;
`;

// 로그인 버튼
const LoginButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LoginButton = styled.Button`
  color: #050066;
`;

// 상단
const WelcomeWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const LogoImage = styled.Image`
  width: 70px;
  height: 70px;
  margin-left: 5px;
  margin-right: 10px;
`;

const WelcomeTextWrapper = styled.View``;
// 안녕하세요
const HelloText = styled.Text`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 15px;
`;
// 코인원에 오신것을 환영합니다.
const WelcomeText = styled.Text`
  color: #919191;
`;

const CoinOneButtonWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
  border-width: 0.2px;
  border-radius: 5px;
  height: 100px;
  padding: 15px;
`;

const CoinOnePassImage = styled.Image`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 5px;
`;

const CoinOneButtonTextWrapper = styled.View``;

const CoinOnePassText = styled.Text`
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const CoinOnePassDesc = styled.Text`
  font-size: 12px;
  color: #7d7d7d;
`;
