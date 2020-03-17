import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';
import HighchartsReactNative from '@highcharts/highcharts-react-native';
import TradeOrder from '../components/homeMarket/TradeOrder';
import RealtimeList from '../components/homeMarket/RealtimeList';

const HomeMarketDetail = () => {
  const [tradingDatas, setTradingDatas] = useState([]);
  let tradingPrices = [];

  useEffect(() => {
    // 거래 종가 가져오기
    const getDatas = async () => {
      const response = await fetch(
        'https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=100'
      );
      const jsonResponse = await response.json();
      setTradingDatas(jsonResponse);
      jsonResponse.map(item => tradingPrices.push(item.trade_price));
      setChartOptions(prevState => {
        prevState.series[0].data = tradingPrices;
        return {
          ...prevState
        };
      });
    };

    getDatas();
  }, []);

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
              [0, '#dee0ff'],
              [1, '#ffffff']
            ]
          },
          data: []
        }
      ],
      plotOptions: {
        series: {
          lineColor: '#1763b6',
          lineWidth: 1,
          marker: {
            enabled: false
          }
        }
      }
    },
    [tradingPrices]
  );
  console.log('[series[0].data]: ', chartOptions.series[0].data);

  return (
    <Container>
      <TopContainer>
        {/* 코인 가격 정보 */}
        <LeftContainer>
          <View>
            <Price>6,738,000</Price>
            <FluctuationPrice>162,000</FluctuationPrice>
            <TradingValue>42,829백만</TradingValue>
          </View>
          <FluctuationRateWrapper>
            <FluctuationRate>-2.38%</FluctuationRate>
          </FluctuationRateWrapper>
        </LeftContainer>
        {/* 차트 */}
        <RightContainer>
          <HighchartsReactNative
            useCDN={true}
            styles={styles.chartContainer}
            options={chartOptions}
          />
        </RightContainer>
      </TopContainer>
      <MainContainer>
        {/* 매수 매도 리스트  */}
        <TradeOrder />
        {/* 실시간 거래 체결 리스트 */}
        <RealtimeList />
      </MainContainer>
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

const InnerContainer = styled.View``;

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
  margin-top: 13px;
`;
