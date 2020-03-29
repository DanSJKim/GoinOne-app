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
  const [marketList, setMarketList] = useState([]);
  const [tradeData, setTradeData] = useState([]);
  const [sellData, setSellData] = useState([]);
  const [buyData, setBuyData] = useState([]);
  const [tradingDatas, setTradingDatas] = useState([]);
  const [chartColor, setChartColor] = useState('');
  const {
    symbol,
    name,
    nowprice,
    volume,
    coinIndex,
    compare,
    fluctuation
  } = route.params;
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

  useEffect(() => {
    console.log('HomeMarketDetail UseEffect:');

    // 코인 가격 변동 리스트
    fetch(
      `http://10.58.2.33:8000/exchange/report/${coinIndex + 1}/days`,
      // `https://api.upbit.com/v1/candles/days?market=KRW-${symbol}&count=200`,
      {
        method: 'GET' // or 'PUT'
      }
    )
      .then(response => response.json())
      .then(data => {
        setTradingDatas(data.data);
        data.data.map(item => {
          tradingPrices.push(parseInt(item.trade_price));
          console.log('item: ', parseInt(item.trade_price));
        });

        let chartColor = '';
        let lineColor = '';
        if (compare > 0) {
          chartColor = '#ff7d9d';
          lineColor = '#e44f72';
        } else {
          chartColor = '#82b1ed';
          lineColor = '#1863b6';
        }
        setChartOptions(prevState => {
          // 차트 색상
          prevState.series[0].color.stops[0] = [0, chartColor];
          // 차트 선 색상
          prevState.plotOptions.series.lineColor = lineColor;
          prevState.series[0].data = tradingPrices;
          return {
            ...prevState
          };
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // 거래 체결 리스트
    fetch(`http://10.58.2.33:8000/exchange/${coinIndex + 1}`, {
      method: 'GET' // or 'PUT'
    })
      .then(response => response.json())
      .then(data => {
        console.log('data:: ', data.trade_data);
        setTradeData(data.trade_data);
        setSellData(data.offer_sell_data);
        setBuyData(data.offer_buy_data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // getDatas();
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
              [0, '#e12243'],
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
    return (
      <BottomWrapper>
        <Text>123123</Text>
      </BottomWrapper>
    );
  };

  renderHeader = () => {
    return (
      <BottomWrapper>
        <Text>123243</Text>
      </BottomWrapper>
    );
  };

  console.log('tradeData??', tradeData);
  return (
    <Container>
      <TopContainer>
        {/* 코인 가격 정보 */}
        <LeftContainer>
          <View>
            <Price>{parseInt(nowprice).toLocaleString()}</Price>
            <FluctuationPrice compare={compare}>
              {compare.toLocaleString()}
            </FluctuationPrice>
            <TradingValue>
              {volume >= 1000000
                ? `${parseInt(volume / 1000000).toLocaleString()} 백만`
                : `${parseInt(volume).toLocaleString()}`}
            </TradingValue>
          </View>
          <FluctuationRateWrapper>
            <FluctuationRate compare={compare}>
              {fluctuation > 0
                ? `+${parseFloat(fluctuation).toFixed(2)}%`
                : `-${parseFloat(fluctuation).toFixed(2)}%`}
            </FluctuationRate>
          </FluctuationRateWrapper>
        </LeftContainer>
        {/* 차트 */}
        <RightContainer>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('HomeMarketProChart', {
                coinIndex
              })
            }
          >
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
          <TradeOrderList sellData={sellData} buyData={buyData} />
        </TradeOrder>
        {/* 실시간 거래 체결 리스트 */}
        <RealtimeList tradeData={tradeData} />
      </MainContainer>
      <BottomWrapper>
        {/* <BuyButtonWrapper>
          <BuyButtonText>매수</BuyButtonText>
        </BuyButtonWrapper>
        <SellButtonWrapper>
          <SellButtonText>매도</SellButtonText>
        </SellButtonWrapper> */}
      </BottomWrapper>
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
  color: ${props => (props.compare > 0 ? '#e12243' : '#1863b6')};
  font-weight: 600;
`;

const FluctuationRateWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FluctuationRate = styled.Text`
  color: ${props => (props.compare > 0 ? '#e12243' : '#1863b6')};
`;

const TradingValue = styled.Text`
  margin-top: 5px;
  font-size: 12px;
  color: #a6a6a6;
`;

const RightContainer = styled.View``;

const MainContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 15px 15px 0 15px;
  flex: 9;
`;

const TradeOrder = styled.View`
  flex: 1;
`;

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

const BottomWrapper = styled.Text`
  flex: 1;
  width: 100%;
`;

// const BuyButtonWrapper = styled.View`
//   background-color: #e12243;
//   flex: 1;
//   margin-right: 5px;
// `;

// const BuyButtonText = styled.Text`
//   color: #fff;
// `;

// const SellButtonWrapper = styled.View`
//   background-color: #3359ff;
//   width: 50%;
//   flex: 1;
// `;

// const SellButtonText = styled.Text`
//   color: #fff;
//   font-size: 15px;
// `;
