import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { AsyncStorage } from 'react-native';

const Balance = () => {
  const [token, setToken] = useState('');
  const [asset, setAsset] = useState('');

  useEffect(() => {
    console.log('Balance UseEffect:', token);

    fetch(`http://10.58.2.252:8000/account/balance`, {
      method: 'GET', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
        Authorization: token
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('data: ', data);
        setAsset(data.total_asset);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // getDatas();
  }, [token]);

  _retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        console.log('value: ', value);
        setToken(value);
      }
    } catch (error) {
      console.log('retrieving data error');
      // Error retrieving data
    }
  };

  _retrieveToken();

  console.log('totalasset: ', asset);

  return (
    <Container>
      <AssetsTitle>총 보유자산</AssetsTitle>
      <AssetsAmount>{`${parseInt(asset)}원`}</AssetsAmount>
      {token ? (
        <DetailAssetsWrapper>
          <View style={{ flex: 1 }}>
            <KrwType>
              <AssetsTypeText>KRW</AssetsTypeText>
            </KrwType>
            <CoinDetailAmount>{`${parseInt(asset)}원`}</CoinDetailAmount>
          </View>
          <View style={{ flex: 1 }}>
            <CryptoType>
              <AssetsTypeText>Crypto</AssetsTypeText>
            </CryptoType>
            <CoinDetailAmount>0원</CoinDetailAmount>
          </View>
        </DetailAssetsWrapper>
      ) : (
        <View></View>
      )}

      <MainWrapper>
        <Circle>
          <CircleInner>
            {token ? (
              <CircleInnerText>현재 투자중인 자산이 없습니다</CircleInnerText>
            ) : (
              <CircleInnerText>
                {'            '}자산 화면에서{'\n'}
                한눈에 보유 현황을 확인하세요!
              </CircleInnerText>
            )}
          </CircleInner>
        </Circle>

        {token ? (
          <View></View>
        ) : (
          <>
            <LoginTitle>로그인 후에 조회가 가능합니다.</LoginTitle>
            <TouchableOpacity>
              <LoginButtonWrapper>
                <LoginButtonText>로그인</LoginButtonText>
              </LoginButtonWrapper>
            </TouchableOpacity>
          </>
        )}
      </MainWrapper>
    </Container>
  );
};

export default Balance;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

const AssetsTitle = styled.Text`
  margin-top: 50px;
  margin-left: 15px;
  font-size: 17px;
  font-weight: 500;
`;

const AssetsAmount = styled.Text`
  margin-left: 15px;
  font-size: 30px;
  font-weight: 600;
`;

const MainWrapper = styled.View`
  align-items: center;
`;

const Circle = styled.View`
  background-color: yellow;
  width: 230px;
  height: 230px;
  margin-top: 130px;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background-color: #f1f1f1;
`;

const CircleInner = styled.View`
  width: 155px;
  height: 155px;
  background-color: #fff;
  border-radius: 200px;
  justify-content: center;
  align-items: center;
`;

const CircleInnerText = styled.Text`
  font-size: 10px;
  color: #292929;
`;

const LoginTitle = styled.Text`
  margin-top: 30px;
`;

const LoginButtonWrapper = styled.View`
  width: 165px;
  height: 50px;
  margin-top: 20px;
  border-width: 0.3px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const LoginButtonText = styled.Text`
  font-weight: 500;
  font-size: 15px;
`;

const DetailAssetsWrapper = styled.View`
  padding: 0 15px;
  margin-top: 30px;
  flex-direction: row;
`;

const KrwType = styled.View`
  background-color: #999999;
  width: 35px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const CryptoType = styled.View`
  background-color: #999999;
  width: 45px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const AssetsTypeText = styled.Text`
  font-size: 11px;
  color: #fff;
  font-weight: 600;
`;

const CoinDetailAmount = styled.Text`
margin-top: 10px
  font-size: 16px;
  font-weight: 600;
`;
