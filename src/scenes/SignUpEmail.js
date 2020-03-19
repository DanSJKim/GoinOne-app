import React from 'react';
import { View, Text, Image } from 'react-native';
import { StackActions } from '@react-navigation/native';
import styled from 'styled-components';

const SignUpEmail = ({ navigation, route }) => {
  const { email } = route.params;

  const onCompletePress = () => {
    console.log('press');
    const popAction = StackActions.pop(3);

    navigation.dispatch(popAction);
  };

  return (
    <Container>
      <TopWrapper>
        <CoinOneLogo
          source={{
            uri: 'https://image.zdnet.co.kr/2018/01/10/lyk_KMgnJltaZmdsqbAf.jpg'
          }}
        />
      </TopWrapper>
      <MainWrapper>
        <EmailIcon
          source={{
            uri:
              'https://lh3.googleusercontent.com/proxy/3n997zyS-BKTRFrF_2_27oGxepoeNHFoEdvGdv11F5Itpc6FjCdSD9nlaIBVpAw5kGuzywEf4EzZvpUcj0gs-Q1DMK--G0ZK0EWLb-jCdJRFQ8MluRos'
          }}
        />
        <CompleteTitle>인증 메일이 발송되었습니다</CompleteTitle>
        <CompleteDesc>
          메일함에서 <EmailText>{email}</EmailText> 인증 메일을 확인 바랍니다.
          이메일의 인증 버튼을 선택하면 회원가입이 완료됩니다
        </CompleteDesc>
        <CautionWrapper>
          <CautionTitle>유의사항</CautionTitle>
          <CautionDesc>
            * 인증 메일은 발송 시점으로부터 24시간 동안 유효하며, 재발송 시 기존
            인증 코드는 만료됩니다. 반드시 마지막에 수신된 메일을 확인 바랍니다
          </CautionDesc>
          <CautionDesc>
            * 메일이 도착하지 않았다면 스팸함을 확인해 주시기 바랍니다
          </CautionDesc>
          <CompleteButtonWrapper>
            <CompleteButton title="완료" onPress={onCompletePress} />
          </CompleteButtonWrapper>
        </CautionWrapper>
      </MainWrapper>
    </Container>
  );
};

export default SignUpEmail;
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const MainWrapper = styled.View`
  display: flex;
  align-items: center;
  padding: 0 15px;
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

const EmailIcon = styled.Image`
  margin-top: 70px;
  width: 50px;
  height: 35px;
`;

const CompleteTitle = styled.Text`
  margin-top: 30px;
  font-size: 23px;
`;

const CompleteDesc = styled.Text`
  margin-top: 30px;
`;

const EmailText = styled.Text`
  color: #3359ff;
`;

const CautionWrapper = styled.View`
  height: 170px;
  width: 100%;
  background-color: #f9f9f9;
  border-width: 0.3px;
  border-color: #898989;
  border-radius: 3px;
  padding: 20px;
  margin-top: 50px;
`;

const CautionTitle = styled.Text`
  font-weight: 600;
  align-self: center;
`;

const CautionDesc = styled.Text`
  margin-top: 15px;
  color: #494949;
  font-size: 12px;
`;

const CompleteButtonWrapper = styled.View`
  margin-top: 15px;
`;

const CompleteButton = styled.Button``;
