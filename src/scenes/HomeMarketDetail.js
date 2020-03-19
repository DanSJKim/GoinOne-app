import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import HighchartsReactNative from '@highcharts/highcharts-react-native';
import TradeOrderList from '../components/homeMarket/TradeOrderList';
import RealtimeList from '../components/homeMarket/RealtimeList';
import BottomSheet from 'reanimated-bottom-sheet';
import { StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

const HomeMarketDetail = ({ route, navigation }) => {
  const [tradingDatas, setTradingDatas] = useState([]);
  const { symbol, name, nowprice, volume, coinIndex } = route.params;
  let tradingPrices = [];
  console.log('route::: ', route.params.nav);

  navigation.setOptions({
    headerTitle: () => {
      return (
        <HeaderWrapper>
          <HeaderSymbol>{symbol} / KRW</HeaderSymbol>
          <HeaderName>{name}</HeaderName>
        </HeaderWrapper>
      );
    },
    headerLeft: () => (
      <Ionicons
        name="ios-arrow-round-back"
        size={40}
        onPress={() => {
          const popAction = StackActions.pop();
          navigation.dispatch(popAction);
        }}
        style={{ marginLeft: 15 }}
      />
    )
  });

  // useEffect(() => {
  //   console.log('HomeMarketDetail UseEffect:');

  //   fetch(
  //     `http://10.58.2.252:8000/exchange/report/${coinIndex + 1}/days`,
  //     // `https://api.upbit.com/v1/candles/days?market=KRW-${symbol}&count=200`,
  //     {
  //       method: 'GET' // or 'PUT'
  //     }
  //   )
  //     .then(response => response.json())
  //     .then(data => {
  //       setTradingDatas(data.data);
  //       data.data.map(item => {
  //         tradingPrices.push(parseInt(item.trade_price));
  //         console.log('item: ', parseInt(item.trade_price));
  //       });
  //       setChartOptions(prevState => {
  //         prevState.series[0].data = tradingPrices;
  //         return {
  //           ...prevState
  //         };
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });

  //   // getDatas();
  // }, []);

  const [chartOptions, setChartOptions] = useState(
    {
      legend: {
        enabled: false
      },
      chart: {
        width: 160,
        height: 120,
        padding: 0,
        margin: 0
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      xAxis: {
        visible: false
      },
      yAxis: {
        visible: false
      },
      tooltip: {
        formatter: function() {
          return 'Point Y: ' + this.y;
        }
      },
      series: [
        {
          type: 'area',
          color: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, '#ff7d9d'],
              [1, '#ffffff']
            ]
          },
          data: []
        }
      ],
      plotOptions: {
        series: {
          lineColor: '#e44f72',
          lineWidth: 1,
          marker: {
            enabled: false
          }
        }
      }
    },
    [tradingPrices]
  );

  renderContent = () => {
    <View>12312313</View>;
  };

  renderHeader = () => {
    <View>53555</View>;
  };

  return (
    <Container>
      <TopContainer>
        {/* 코인 가격 정보 */}
        <LeftContainer>
          <View>
            <Price>{parseInt(nowprice)}</Price>
            <FluctuationPrice>162,0200</FluctuationPrice>
            <TradingValue>{parseInt(volume)}</TradingValue>
          </View>
          <FluctuationRateWrapper>
            <FluctuationRate>-2.38%</FluctuationRate>
          </FluctuationRateWrapper>
        </LeftContainer>
        {/* 차트 */}
        <RightContainer>
          <TouchableOpacity onPress={() => console.log('123')}>
            <HighchartsReactNative
              useCDN={true}
              styles={styles.chartContainer}
              options={chartOptions}
              animation={false}
            />
          </TouchableOpacity>
        </RightContainer>
      </TopContainer>
      <MainContainer>
        <TradeOrder>
          {/* 매수, 매도 리스트  */}
          <TradeOrderList />
        </TradeOrder>
        {/* 실시간 거래 체결 리스트 */}
        <RealtimeList coinIndex={coinIndex} />
      </MainContainer>
      <View>
        <BottomSheet snapPoints={[450, 300, 0]} />
      </View>
    </Container>
  );
};

export default HomeMarketDetail;

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: '#fff',
    padding: 0,
    width: 160,
    height: 120
  }
});

const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

const TopContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px 5px 10px 20px;
  width: 370px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 0px 2px 3.84px rgba(189, 189, 189, 0.8);
  justify-content: space-between;
`;

const LeftContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

const Price = styled.Text`
  font-size: 20px;
  font-weight: 600;
  margin-top: 10px;
`;

const FluctuationPrice = styled.Text`
  margin-top: 5px;
  color: #e12243;
  font-weight: 600;
`;

const FluctuationRateWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FluctuationRate = styled.Text`
  color: #e12243;
`;

const TradingValue = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #a6a6a6;
`;

const RightContainer = styled.View``;

// const chartContainer = styled.HighchartsReactNative``;

const MainContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15px;
  height: 100%;
`;

const TradeOrder = styled.View``;

const HeaderWrapper = styled.View`
  align-items: center;
`;
const HeaderSymbol = styled.Text`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 2px;
`;
const HeaderName = styled.Text`
  font-size: 11px;
  color: #494949;
`;
