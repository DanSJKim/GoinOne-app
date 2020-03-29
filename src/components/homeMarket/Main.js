import React, { useState, useEffect } from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import styled from 'styled-components';
import DATA from './Data.js';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MarketItem from './MarketItem.js';

/*
 * Home - MARKET탭 - 마켓 목록
 */

const Main = props => {
  // console.log('DATA: ', DATA);

  const [marketList, setMarketList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('http://10.58.2.33:8000/exchange/1', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log('response data: ', data.item_data);
        setMarketList(data.item_data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const getData = () => {
    setIsLoading(true);
    fetch('http://10.58.2.33:8000/exchange/1', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log('response data: ', data.item_data);
        setMarketList(data.item_data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  console.log('marketList: ', marketList);
  // console.log('DATA: ', DATA);
  return (
    <View>
      {/* <MarketList
        sections={marketList}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => {
          return (
            <MarketItem nav={props.nav} symbol={item.code} name={item.name} />
          );
        }}
        renderSectionHeader={({ section: { code } }) => (
          <HeaderText>{title}</HeaderText>
        )}
      /> */}
      <MarketLists
        refreshing={isLoading}
        onRefresh={getData}
        data={marketList}
        renderItem={({ item, index }) => (
          <MarketItem
            nav={props.nav}
            symbol={item.code}
            name={item.name}
            nowprice={item.now_price}
            todaymaxprice={item.today_max_price}
            yesterdayprice={item.yesterday_max_price}
            volume={item['24_trade_volume']}
            coinIndex={index}
          />
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Main;

const MarketList = styled.SectionList``;

const MarketLists = styled.FlatList``;

const HeaderText = styled.Text`
  font-weight: 600;
  color: #565656;
  background-color: #f8f8f8;
  padding: 5px 15px;
`;

const mock = [
  {
    candle_price: '260554378548.79486000',
    candle_volume: '39045.60065848',
    currency: 'KRW',
    date: 1584057600.0,
    high_price: '7470000.00000000',
    item: 'BTC',
    low_price: '5489000.00000000',
    opening_price: '6362000.00000000',
    trade_price: '7133000.00000000',
    unit: 'days'
  },
  {
    candle_price: '235086071483.29202000',
    candle_volume: '29866.02509793',
    currency: 'KRW',
    date: 1583971200.0,
    high_price: '9537000.00000000',
    item: 'BTC',
    low_price: '5980000.00000000',
    opening_price: '9507000.00000000',
    trade_price: '6363000.00000000',
    unit: 'days'
  },
  {
    candle_price: '38718191633.97910000',
    candle_volume: '4110.01716377',
    currency: 'KRW',
    date: 1583884800.0,
    high_price: '9637000.00000000',
    item: 'BTC',
    low_price: '9163000.00000000',
    opening_price: '9574000.00000000',
    trade_price: '9510000.00000000',
    unit: 'days'
  },
  {
    candle_price: '42778061109.16792000',
    candle_volume: '4439.33233281',
    currency: 'KRW',
    date: 1583798400.0,
    high_price: '9849000.00000000',
    item: 'BTC',
    low_price: '9413000.00000000',
    opening_price: '9726000.00000000',
    trade_price: '9574000.00000000',
    unit: 'days'
  },
  {
    candle_price: '74351398658.28822000',
    candle_volume: '7692.57580749',
    currency: 'KRW',
    date: 1583712000.0,
    high_price: '10064000.00000000',
    item: 'BTC',
    low_price: '9356000.00000000',
    opening_price: '9883000.00000000',
    trade_price: '9726000.00000000',
    unit: 'days'
  },
  {
    candle_price: '51846074009.69201000',
    candle_volume: '5043.98089229',
    currency: 'KRW',
    date: 1583625600.0,
    high_price: '10699000.00000000',
    item: 'BTC',
    low_price: '9820000.00000000',
    opening_price: '10678000.00000000',
    trade_price: '9876000.00000000',
    unit: 'days'
  },
  {
    candle_price: '25243997328.05842000',
    candle_volume: '2335.98366227',
    currency: 'KRW',
    date: 1583539200.0,
    high_price: '10980000.00000000',
    item: 'BTC',
    low_price: '10648000.00000000',
    opening_price: '10852000.00000000',
    trade_price: '10678000.00000000',
    unit: 'days'
  },
  {
    candle_price: '25470551278.05139000',
    candle_volume: '2353.86089792',
    currency: 'KRW',
    date: 1583452800.0,
    high_price: '10890000.00000000',
    item: 'BTC',
    low_price: '10720000.00000000',
    opening_price: '10791000.00000000',
    trade_price: '10840000.00000000',
    unit: 'days'
  },
  {
    candle_price: '38380097237.09234000',
    candle_volume: '3582.13634673',
    currency: 'KRW',
    date: 1583366400.0,
    high_price: '10869000.00000000',
    item: 'BTC',
    low_price: '10494000.00000000',
    opening_price: '10504000.00000000',
    trade_price: '10791000.00000000',
    unit: 'days'
  },
  {
    candle_price: '23622827783.23433000',
    candle_volume: '2250.68759875',
    currency: 'KRW',
    date: 1583280000.0,
    high_price: '10588000.00000000',
    item: 'BTC',
    low_price: '10420000.00000000',
    opening_price: '10502000.00000000',
    trade_price: '10503000.00000000',
    unit: 'days'
  },
  {
    candle_price: '30119548760.45767000',
    candle_volume: '2858.43820794',
    currency: 'KRW',
    date: 1583193600.0,
    high_price: '10689000.00000000',
    item: 'BTC',
    low_price: '10405000.00000000',
    opening_price: '10675000.00000000',
    trade_price: '10502000.00000000',
    unit: 'days'
  },
  {
    candle_price: '31672027841.03262000',
    candle_volume: '3010.56353784',
    currency: 'KRW',
    date: 1583107200.0,
    high_price: '10749000.00000000',
    item: 'BTC',
    low_price: '10326000.00000000',
    opening_price: '10358000.00000000',
    trade_price: '10675000.00000000',
    unit: 'days'
  },
  {
    candle_price: '34073229456.85715000',
    candle_volume: '3275.71519136',
    currency: 'KRW',
    date: 1583020800.0,
    high_price: '10559000.00000000',
    item: 'BTC',
    low_price: '10287000.00000000',
    opening_price: '10380000.00000000',
    trade_price: '10374000.00000000',
    unit: 'days'
  },
  {
    candle_price: '22523893822.66752000',
    candle_volume: '2145.36310753',
    currency: 'KRW',
    date: 1582934400.0,
    high_price: '10631000.00000000',
    item: 'BTC',
    low_price: '10371000.00000000',
    opening_price: '10575000.00000000',
    trade_price: '10374000.00000000',
    unit: 'days'
  },
  {
    candle_price: '54606619565.01113000',
    candle_volume: '5181.61535688',
    currency: 'KRW',
    date: 1582848000.0,
    high_price: '10840000.00000000',
    item: 'BTC',
    low_price: '10306000.00000000',
    opening_price: '10696000.00000000',
    trade_price: '10575000.00000000',
    unit: 'days'
  },
  {
    candle_price: '68530906781.28176000',
    candle_volume: '6437.73425905',
    currency: 'KRW',
    date: 1582761600.0,
    high_price: '10888000.00000000',
    item: 'BTC',
    low_price: '10313000.00000000',
    opening_price: '10742000.00000000',
    trade_price: '10699000.00000000',
    unit: 'days'
  },
  {
    candle_price: '82455216388.67130000',
    candle_volume: '7477.71264507',
    currency: 'KRW',
    date: 1582675200.0,
    high_price: '11408000.00000000',
    item: 'BTC',
    low_price: '10628000.00000000',
    opening_price: '11330000.00000000',
    trade_price: '10741000.00000000',
    unit: 'days'
  },
  {
    candle_price: '44619424372.32915000',
    candle_volume: '3895.25756826',
    currency: 'KRW',
    date: 1582588800.0,
    high_price: '11639000.00000000',
    item: 'BTC',
    low_price: '11280000.00000000',
    opening_price: '11635000.00000000',
    trade_price: '11330000.00000000',
    unit: 'days'
  },
  {
    candle_price: '36343856049.82913000',
    candle_volume: '3115.02855796',
    currency: 'KRW',
    date: 1582502400.0,
    high_price: '11840000.00000000',
    item: 'BTC',
    low_price: '11555000.00000000',
    opening_price: '11753000.00000000',
    trade_price: '11633000.00000000',
    unit: 'days'
  },
  {
    candle_price: '38424742191.86900000',
    candle_volume: '3288.45979643',
    currency: 'KRW',
    date: 1582416000.0,
    high_price: '11831000.00000000',
    item: 'BTC',
    low_price: '11482000.00000000',
    opening_price: '11495000.00000000',
    trade_price: '11753000.00000000',
    unit: 'days'
  },
  {
    candle_price: '21067376074.52816000',
    candle_volume: '1836.08707185',
    currency: 'KRW',
    date: 1582329600.0,
    high_price: '11529000.00000000',
    item: 'BTC',
    low_price: '11395000.00000000',
    opening_price: '11498000.00000000',
    trade_price: '11496000.00000000',
    unit: 'days'
  },
  {
    candle_price: '49077437552.63174000',
    candle_volume: '4249.29863364',
    currency: 'KRW',
    date: 1582243200.0,
    high_price: '11620000.00000000',
    item: 'BTC',
    low_price: '11454000.00000000',
    opening_price: '11532000.00000000',
    trade_price: '11498000.00000000',
    unit: 'days'
  },
  {
    candle_price: '72234337182.59335000',
    candle_volume: '6303.71044042',
    currency: 'KRW',
    date: 1582156800.0,
    high_price: '11580000.00000000',
    item: 'BTC',
    low_price: '11350000.00000000',
    opening_price: '11419000.00000000',
    trade_price: '11520000.00000000',
    unit: 'days'
  },
  {
    candle_price: '67070310930.24622000',
    candle_volume: '5713.59402305',
    currency: 'KRW',
    date: 1582070400.0,
    high_price: '11973000.00000000',
    item: 'BTC',
    low_price: '11350000.00000000',
    opening_price: '11837000.00000000',
    trade_price: '11415000.00000000',
    unit: 'days'
  },
  {
    candle_price: '62996029296.63419000',
    candle_volume: '5450.87588390',
    currency: 'KRW',
    date: 1581984000.0,
    high_price: '11900000.00000000',
    item: 'BTC',
    low_price: '11308000.00000000',
    opening_price: '11438000.00000000',
    trade_price: '11838000.00000000',
    unit: 'days'
  },
  {
    candle_price: '67010421516.05557000',
    candle_volume: '5888.97179664',
    currency: 'KRW',
    date: 1581897600.0,
    high_price: '11691000.00000000',
    item: 'BTC',
    low_price: '11136000.00000000',
    opening_price: '11659000.00000000',
    trade_price: '11438000.00000000',
    unit: 'days'
  },
  {
    candle_price: '61959756344.30487000',
    candle_volume: '5377.24392055',
    currency: 'KRW',
    date: 1581811200.0,
    high_price: '11766000.00000000',
    item: 'BTC',
    low_price: '11320000.00000000',
    opening_price: '11513000.00000000',
    trade_price: '11659000.00000000',
    unit: 'days'
  },
  {
    candle_price: '56761104058.12535000',
    candle_volume: '4844.00618252',
    currency: 'KRW',
    date: 1581724800.0,
    high_price: '11889000.00000000',
    item: 'BTC',
    low_price: '11400000.00000000',
    opening_price: '11857000.00000000',
    trade_price: '11503000.00000000',
    unit: 'days'
  },
  {
    candle_price: '52247414483.74660000',
    candle_volume: '4420.81384236',
    currency: 'KRW',
    date: 1581638400.0,
    high_price: '11899000.00000000',
    item: 'BTC',
    low_price: '11717000.00000000',
    opening_price: '11793000.00000000',
    trade_price: '11845000.00000000',
    unit: 'days'
  },
  {
    candle_price: '108560211308.22157000',
    candle_volume: '9190.66395973',
    currency: 'KRW',
    date: 1581552000.0,
    high_price: '12044000.00000000',
    item: 'BTC',
    low_price: '11580000.00000000',
    opening_price: '11793000.00000000',
    trade_price: '11793000.00000000',
    unit: 'days'
  },
  {
    candle_price: '78341582233.66280000',
    candle_volume: '6619.13819041',
    currency: 'KRW',
    date: 1581465600.0,
    high_price: '11956000.00000000',
    item: 'BTC',
    low_price: '11761000.00000000',
    opening_price: '11820000.00000000',
    trade_price: '11793000.00000000',
    unit: 'days'
  },
  {
    candle_price: '69984450456.13070000',
    candle_volume: '6034.79122331',
    currency: 'KRW',
    date: 1581379200.0,
    high_price: '11950000.00000000',
    item: 'BTC',
    low_price: '11269000.00000000',
    opening_price: '11520000.00000000',
    trade_price: '11819000.00000000',
    unit: 'days'
  },
  {
    candle_price: '60459892531.15172000',
    candle_volume: '5213.48423455',
    currency: 'KRW',
    date: 1581292800.0,
    high_price: '11864000.00000000',
    item: 'BTC',
    low_price: '11392000.00000000',
    opening_price: '11821000.00000000',
    trade_price: '11520000.00000000',
    unit: 'days'
  },
  {
    candle_price: '57924089180.77049000',
    candle_volume: '4936.95291749',
    currency: 'KRW',
    date: 1581206400.0,
    high_price: '11863000.00000000',
    item: 'BTC',
    low_price: '11567000.00000000',
    opening_price: '11568000.00000000',
    trade_price: '11821000.00000000',
    unit: 'days'
  },
  {
    candle_price: '49928407922.05405000',
    candle_volume: '4372.50942089',
    currency: 'KRW',
    date: 1581120000.0,
    high_price: '11600000.00000000',
    item: 'BTC',
    low_price: '11257000.00000000',
    opening_price: '11490000.00000000',
    trade_price: '11568000.00000000',
    unit: 'days'
  },
  {
    candle_price: '47385485847.47539000',
    candle_volume: '4139.85704717',
    currency: 'KRW',
    date: 1581033600.0,
    high_price: '11610000.00000000',
    item: 'BTC',
    low_price: '11256000.00000000',
    opening_price: '11269000.00000000',
    trade_price: '11490000.00000000',
    unit: 'days'
  },
  {
    candle_price: '64300123937.46006000',
    candle_volume: '5742.27238319',
    currency: 'KRW',
    date: 1580947200.0,
    high_price: '11410000.00000000',
    item: 'BTC',
    low_price: '10905000.00000000',
    opening_price: '11068000.00000000',
    trade_price: '11264000.00000000',
    unit: 'days'
  },
  {
    candle_price: '61300553914.19267000',
    candle_volume: '5644.68431028',
    currency: 'KRW',
    date: 1580860800.0,
    high_price: '11116000.00000000',
    item: 'BTC',
    low_price: '10589000.00000000',
    opening_price: '10636000.00000000',
    trade_price: '11054000.00000000',
    unit: 'days'
  },
  {
    candle_price: '45509665494.21313000',
    candle_volume: '4273.50735062',
    currency: 'KRW',
    date: 1580774400.0,
    high_price: '10790000.00000000',
    item: 'BTC',
    low_price: '10504000.00000000',
    opening_price: '10750000.00000000',
    trade_price: '10635000.00000000',
    unit: 'days'
  },
  {
    candle_price: '39872569783.43320000',
    candle_volume: '3683.40186368',
    currency: 'KRW',
    date: 1580688000.0,
    high_price: '10975000.00000000',
    item: 'BTC',
    low_price: '10715000.00000000',
    opening_price: '10765000.00000000',
    trade_price: '10750000.00000000',
    unit: 'days'
  },
  {
    candle_price: '35841614441.05652000',
    candle_volume: '3318.26175912',
    currency: 'KRW',
    date: 1580601600.0,
    high_price: '10887000.00000000',
    item: 'BTC',
    low_price: '10680000.00000000',
    opening_price: '10820000.00000000',
    trade_price: '10765000.00000000',
    unit: 'days'
  },
  {
    candle_price: '31294876435.39403000',
    candle_volume: '2886.09737910',
    currency: 'KRW',
    date: 1580515200.0,
    high_price: '10918000.00000000',
    item: 'BTC',
    low_price: '10770000.00000000',
    opening_price: '10781000.00000000',
    trade_price: '10820000.00000000',
    unit: 'days'
  },
  {
    candle_price: '38857928207.28571000',
    candle_volume: '3618.06000067',
    currency: 'KRW',
    date: 1580428800.0,
    high_price: '10841000.00000000',
    item: 'BTC',
    low_price: '10642000.00000000',
    opening_price: '10778000.00000000',
    trade_price: '10781000.00000000',
    unit: 'days'
  },
  {
    candle_price: '53656097225.64684000',
    candle_volume: '5029.07029051',
    currency: 'KRW',
    date: 1580342400.0,
    high_price: '10882000.00000000',
    item: 'BTC',
    low_price: '10520000.00000000',
    opening_price: '10670000.00000000',
    trade_price: '10779000.00000000',
    unit: 'days'
  },
  {
    candle_price: '56351664844.84832000',
    candle_volume: '5305.29886421',
    currency: 'KRW',
    date: 1580256000.0,
    high_price: '10780000.00000000',
    item: 'BTC',
    low_price: '10500000.00000000',
    opening_price: '10570000.00000000',
    trade_price: '10670000.00000000',
    unit: 'days'
  },
  {
    candle_price: '68462839033.31838000',
    candle_volume: '6620.77416871',
    currency: 'KRW',
    date: 1580169600.0,
    high_price: '10601000.00000000',
    item: 'BTC',
    low_price: '10127000.00000000',
    opening_price: '10128000.00000000',
    trade_price: '10570000.00000000',
    unit: 'days'
  },
  {
    candle_price: '48415199217.52405000',
    candle_volume: '4801.26130294',
    currency: 'KRW',
    date: 1580083200.0,
    high_price: '10277000.00000000',
    item: 'BTC',
    low_price: '9948000.00000000',
    opening_price: '9966000.00000000',
    trade_price: '10132000.00000000',
    unit: 'days'
  },
  {
    candle_price: '21899391391.92468000',
    candle_volume: '2221.71968044',
    currency: 'KRW',
    date: 1579996800.0,
    high_price: '9986000.00000000',
    item: 'BTC',
    low_price: '9700000.00000000',
    opening_price: '9745000.00000000',
    trade_price: '9966000.00000000',
    unit: 'days'
  },
  {
    candle_price: '14030173932.57782000',
    candle_volume: '1443.81660204',
    currency: 'KRW',
    date: 1579910400.0,
    high_price: '9816000.00000000',
    item: 'BTC',
    low_price: '9669000.00000000',
    opening_price: '9816000.00000000',
    trade_price: '9745000.00000000',
    unit: 'days'
  },
  {
    candle_price: '28685136535.53574000',
    candle_volume: '2941.43472294',
    currency: 'KRW',
    date: 1579824000.0,
    high_price: '9885000.00000000',
    item: 'BTC',
    low_price: '9631000.00000000',
    opening_price: '9750000.00000000',
    trade_price: '9813000.00000000',
    unit: 'days'
  },
  {
    candle_price: '35440547073.00841000',
    candle_volume: '3630.52737210',
    currency: 'KRW',
    date: 1579737600.0,
    high_price: '9930000.00000000',
    item: 'BTC',
    low_price: '9623000.00000000',
    opening_price: '9922000.00000000',
    trade_price: '9750000.00000000',
    unit: 'days'
  },
  {
    candle_price: '29600935084.98802000',
    candle_volume: '2972.58459218',
    currency: 'KRW',
    date: 1579651200.0,
    high_price: '10091000.00000000',
    item: 'BTC',
    low_price: '9845000.00000000',
    opening_price: '9960000.00000000',
    trade_price: '9922000.00000000',
    unit: 'days'
  },
  {
    candle_price: '28124677203.53503000',
    candle_volume: '2842.75512757',
    currency: 'KRW',
    date: 1579564800.0,
    high_price: '10014000.00000000',
    item: 'BTC',
    low_price: '9800000.00000000',
    opening_price: '9856000.00000000',
    trade_price: '9958000.00000000',
    unit: 'days'
  },
  {
    candle_price: '32790031642.56386000',
    candle_volume: '3320.61609519',
    currency: 'KRW',
    date: 1579478400.0,
    high_price: '9951000.00000000',
    item: 'BTC',
    low_price: '9775000.00000000',
    opening_price: '9886000.00000000',
    trade_price: '9851000.00000000',
    unit: 'days'
  },
  {
    candle_price: '86262593734.92220000',
    candle_volume: '8567.01218693',
    currency: 'KRW',
    date: 1579392000.0,
    high_price: '10484000.00000000',
    item: 'BTC',
    low_price: '9734000.00000000',
    opening_price: '10085000.00000000',
    trade_price: '9887000.00000000',
    unit: 'days'
  },
  {
    candle_price: '38838416041.82468000',
    candle_volume: '3865.42130063',
    currency: 'KRW',
    date: 1579305600.0,
    high_price: '10167000.00000000',
    item: 'BTC',
    low_price: '9900000.00000000',
    opening_price: '9997000.00000000',
    trade_price: '10085000.00000000',
    unit: 'days'
  },
  {
    candle_price: '83412175524.28444000',
    candle_volume: '8319.12836052',
    currency: 'KRW',
    date: 1579219200.0,
    high_price: '10216000.00000000',
    item: 'BTC',
    low_price: '9719000.00000000',
    opening_price: '9789000.00000000',
    trade_price: '9992000.00000000',
    unit: 'days'
  },
  {
    candle_price: '39665434450.60096000',
    candle_volume: '4081.48265366',
    currency: 'KRW',
    date: 1579132800.0,
    high_price: '9855000.00000000',
    item: 'BTC',
    low_price: '9561000.00000000',
    opening_price: '9735000.00000000',
    trade_price: '9785000.00000000',
    unit: 'days'
  },
  {
    candle_price: '79085766458.35992000',
    candle_volume: '8125.75207139',
    currency: 'KRW',
    date: 1579046400.0,
    high_price: '9917000.00000000',
    item: 'BTC',
    low_price: '9498000.00000000',
    opening_price: '9716000.00000000',
    trade_price: '9735000.00000000',
    unit: 'days'
  },
  {
    candle_price: '110231380420.97162000',
    candle_volume: '11554.39037004',
    currency: 'KRW',
    date: 1578960000.0,
    high_price: '9859000.00000000',
    item: 'BTC',
    low_price: '9162000.00000000',
    opening_price: '9179000.00000000',
    trade_price: '9716000.00000000',
    unit: 'days'
  },
  {
    candle_price: '18249005011.62269000',
    candle_volume: '1991.09310408',
    currency: 'KRW',
    date: 1578873600.0,
    high_price: '9227000.00000000',
    item: 'BTC',
    low_price: '9101000.00000000',
    opening_price: '9218000.00000000',
    trade_price: '9172000.00000000',
    unit: 'days'
  },
  {
    candle_price: '22101988619.26872000',
    candle_volume: '2412.74898932',
    currency: 'KRW',
    date: 1578787200.0,
    high_price: '9250000.00000000',
    item: 'BTC',
    low_price: '9014000.00000000',
    opening_price: '9066000.00000000',
    trade_price: '9213000.00000000',
    unit: 'days'
  },
  {
    candle_price: '38861047625.40993000',
    candle_volume: '4233.99262116',
    currency: 'KRW',
    date: 1578700800.0,
    high_price: '9350000.00000000',
    item: 'BTC',
    low_price: '9047000.00000000',
    opening_price: '9218000.00000000',
    trade_price: '9060000.00000000',
    unit: 'days'
  },
  {
    candle_price: '62925329692.41817000',
    candle_volume: '6980.82897357',
    currency: 'KRW',
    date: 1578614400.0,
    high_price: '9250000.00000000',
    item: 'BTC',
    low_price: '8750000.00000000',
    opening_price: '8940000.00000000',
    trade_price: '9233000.00000000',
    unit: 'days'
  },
  {
    candle_price: '46561753849.07573000',
    candle_volume: '5174.23891081',
    currency: 'KRW',
    date: 1578528000.0,
    high_price: '9142000.00000000',
    item: 'BTC',
    low_price: '8900000.00000000',
    opening_price: '9084000.00000000',
    trade_price: '8941000.00000000',
    unit: 'days'
  },
  {
    candle_price: '123019277437.88495000',
    candle_volume: '13024.51495279',
    currency: 'KRW',
    date: 1578441600.0,
    high_price: '9736000.00000000',
    item: 'BTC',
    low_price: '9030000.00000000',
    opening_price: '9386000.00000000',
    trade_price: '9085000.00000000',
    unit: 'days'
  },
  {
    candle_price: '80878156552.87780000',
    candle_volume: '8896.19194694',
    currency: 'KRW',
    date: 1578355200.0,
    high_price: '9444000.00000000',
    item: 'BTC',
    low_price: '8865000.00000000',
    opening_price: '8866000.00000000',
    trade_price: '9398000.00000000',
    unit: 'days'
  },
  {
    candle_price: '46379071124.21256000',
    candle_volume: '5340.14041587',
    currency: 'KRW',
    date: 1578268800.0,
    high_price: '8890000.00000000',
    item: 'BTC',
    low_price: '8446000.00000000',
    opening_price: '8451000.00000000',
    trade_price: '8866000.00000000',
    unit: 'days'
  },
  {
    candle_price: '24039161184.35222000',
    candle_volume: '2807.83217200',
    currency: 'KRW',
    date: 1578182400.0,
    high_price: '8645000.00000000',
    item: 'BTC',
    low_price: '8436000.00000000',
    opening_price: '8483000.00000000',
    trade_price: '8454000.00000000',
    unit: 'days'
  },
  {
    candle_price: '16789801499.44245000',
    candle_volume: '1987.26688134',
    currency: 'KRW',
    date: 1578096000.0,
    high_price: '8520000.00000000',
    item: 'BTC',
    low_price: '8382000.00000000',
    opening_price: '8476000.00000000',
    trade_price: '8482000.00000000',
    unit: 'days'
  },
  {
    candle_price: '49021606425.72705000',
    candle_volume: '5887.00880804',
    currency: 'KRW',
    date: 1578009600.0,
    high_price: '8525000.00000000',
    item: 'BTC',
    low_price: '7910000.00000000',
    opening_price: '8038000.00000000',
    trade_price: '8474000.00000000',
    unit: 'days'
  },
  {
    candle_price: '16790797168.07339000',
    candle_volume: '2054.03956598',
    currency: 'KRW',
    date: 1577923200.0,
    high_price: '8310000.00000000',
    item: 'BTC',
    low_price: '8026000.00000000',
    opening_price: '8300000.00000000',
    trade_price: '8037000.00000000',
    unit: 'days'
  },
  {
    candle_price: '8582255396.02558000',
    candle_volume: '1030.45814676',
    currency: 'KRW',
    date: 1577836800.0,
    high_price: '8387000.00000000',
    item: 'BTC',
    low_price: '8287000.00000000',
    opening_price: '8308000.00000000',
    trade_price: '8300000.00000000',
    unit: 'days'
  },
  {
    candle_price: '15395058519.21328000',
    candle_volume: '1846.54091910',
    currency: 'KRW',
    date: 1577750400.0,
    high_price: '8439000.00000000',
    item: 'BTC',
    low_price: '8260000.00000000',
    opening_price: '8343000.00000000',
    trade_price: '8312000.00000000',
    unit: 'days'
  },
  {
    candle_price: '19849732355.62998000',
    candle_volume: '2355.80361501',
    currency: 'KRW',
    date: 1577664000.0,
    high_price: '8496000.00000000',
    item: 'BTC',
    low_price: '8331000.00000000',
    opening_price: '8486000.00000000',
    trade_price: '8341000.00000000',
    unit: 'days'
  },
  {
    candle_price: '21095568479.77485000',
    candle_volume: '2486.01610538',
    currency: 'KRW',
    date: 1577577600.0,
    high_price: '8639000.00000000',
    item: 'BTC',
    low_price: '8388000.00000000',
    opening_price: '8428000.00000000',
    trade_price: '8486000.00000000',
    unit: 'days'
  },
  {
    candle_price: '14554673138.96279000',
    candle_volume: '1725.51270450',
    currency: 'KRW',
    date: 1577491200.0,
    high_price: '8479000.00000000',
    item: 'BTC',
    low_price: '8376000.00000000',
    opening_price: '8385000.00000000',
    trade_price: '8432000.00000000',
    unit: 'days'
  },
  {
    candle_price: '20006753451.82146000',
    candle_volume: '2402.06470551',
    currency: 'KRW',
    date: 1577404800.0,
    high_price: '8424000.00000000',
    item: 'BTC',
    low_price: '8195000.00000000',
    opening_price: '8367000.00000000',
    trade_price: '8385000.00000000',
    unit: 'days'
  },
  {
    candle_price: '23015609826.01268000',
    candle_volume: '2740.21127940',
    currency: 'KRW',
    date: 1577318400.0,
    high_price: '8595000.00000000',
    item: 'BTC',
    low_price: '8317000.00000000',
    opening_price: '8370000.00000000',
    trade_price: '8371000.00000000',
    unit: 'days'
  },
  {
    candle_price: '15603911383.43883000',
    candle_volume: '1857.22709208',
    currency: 'KRW',
    date: 1577232000.0,
    high_price: '8471000.00000000',
    item: 'BTC',
    low_price: '8317000.00000000',
    opening_price: '8460000.00000000',
    trade_price: '8370000.00000000',
    unit: 'days'
  },
  {
    candle_price: '30918612123.69409000',
    candle_volume: '3635.40093186',
    currency: 'KRW',
    date: 1577145600.0,
    high_price: '8630000.00000000',
    item: 'BTC',
    low_price: '8354000.00000000',
    opening_price: '8520000.00000000',
    trade_price: '8470000.00000000',
    unit: 'days'
  },
  {
    candle_price: '47475904169.37631000',
    candle_volume: '5451.74735760',
    currency: 'KRW',
    date: 1577059200.0,
    high_price: '8890000.00000000',
    item: 'BTC',
    low_price: '8456000.00000000',
    opening_price: '8688000.00000000',
    trade_price: '8520000.00000000',
    unit: 'days'
  },
  {
    candle_price: '23008097682.24533000',
    candle_volume: '2717.84588660',
    currency: 'KRW',
    date: 1576972800.0,
    high_price: '8696000.00000000',
    item: 'BTC',
    low_price: '8277000.00000000',
    opening_price: '8295000.00000000',
    trade_price: '8689000.00000000',
    unit: 'days'
  },
  {
    candle_price: '7904936683.07831000',
    candle_volume: '952.39697702',
    currency: 'KRW',
    date: 1576886400.0,
    high_price: '8342000.00000000',
    item: 'BTC',
    low_price: '8260000.00000000',
    opening_price: '8342000.00000000',
    trade_price: '8295000.00000000',
    unit: 'days'
  },
  {
    candle_price: '19260477837.46148000',
    candle_volume: '2315.68010263',
    currency: 'KRW',
    date: 1576800000.0,
    high_price: '8395000.00000000',
    item: 'BTC',
    low_price: '8241000.00000000',
    opening_price: '8329000.00000000',
    trade_price: '8338000.00000000',
    unit: 'days'
  },
  {
    candle_price: '37094382370.39195000',
    candle_volume: '4444.33915592',
    currency: 'KRW',
    date: 1576713600.0,
    high_price: '8590000.00000000',
    item: 'BTC',
    low_price: '8210000.00000000',
    opening_price: '8466000.00000000',
    trade_price: '8328000.00000000',
    unit: 'days'
  },
  {
    candle_price: '58866546299.65807000',
    candle_volume: '7394.86247818',
    currency: 'KRW',
    date: 1576627200.0,
    high_price: '8668000.00000000',
    item: 'BTC',
    low_price: '7546000.00000000',
    opening_price: '7741000.00000000',
    trade_price: '8466000.00000000',
    unit: 'days'
  },
  {
    candle_price: '36267738374.63466000',
    candle_volume: '4587.86377499',
    currency: 'KRW',
    date: 1576540800.0,
    high_price: '8108000.00000000',
    item: 'BTC',
    low_price: '7700000.00000000',
    opening_price: '8058000.00000000',
    trade_price: '7742000.00000000',
    unit: 'days'
  },
  {
    candle_price: '19139495161.41346000',
    candle_volume: '2333.04536211',
    currency: 'KRW',
    date: 1576454400.0,
    high_price: '8347000.00000000',
    item: 'BTC',
    low_price: '8017000.00000000',
    opening_price: '8319000.00000000',
    trade_price: '8050000.00000000',
    unit: 'days'
  },
  {
    candle_price: '15864899581.16213000',
    candle_volume: '1911.20234202',
    currency: 'KRW',
    date: 1576368000.0,
    high_price: '8440000.00000000',
    item: 'BTC',
    low_price: '8190000.00000000',
    opening_price: '8277000.00000000',
    trade_price: '8319000.00000000',
    unit: 'days'
  },
  {
    candle_price: '20194039087.57045000',
    candle_volume: '2408.92097104',
    currency: 'KRW',
    date: 1576281600.0,
    high_price: '8520000.00000000',
    item: 'BTC',
    low_price: '8200000.00000000',
    opening_price: '8490000.00000000',
    trade_price: '8277000.00000000',
    unit: 'days'
  },
  {
    candle_price: '18349093540.30931000',
    candle_volume: '2163.02130941',
    currency: 'KRW',
    date: 1576195200.0,
    high_price: '8577000.00000000',
    item: 'BTC',
    low_price: '8430000.00000000',
    opening_price: '8438000.00000000',
    trade_price: '8490000.00000000',
    unit: 'days'
  },
  {
    candle_price: '20772768614.45036000',
    candle_volume: '2457.07047864',
    currency: 'KRW',
    date: 1576108800.0,
    high_price: '8566000.00000000',
    item: 'BTC',
    low_price: '8360000.00000000',
    opening_price: '8490000.00000000',
    trade_price: '8437000.00000000',
    unit: 'days'
  },
  {
    candle_price: '16156817415.65165000',
    candle_volume: '1897.01475656',
    currency: 'KRW',
    date: 1576022400.0,
    high_price: '8592000.00000000',
    item: 'BTC',
    low_price: '8419000.00000000',
    opening_price: '8539000.00000000',
    trade_price: '8490000.00000000',
    unit: 'days'
  },
  {
    candle_price: '25451639641.20134000',
    candle_volume: '2949.17212834',
    currency: 'KRW',
    date: 1575936000.0,
    high_price: '8749000.00000000',
    item: 'BTC',
    low_price: '8480000.00000000',
    opening_price: '8679000.00000000',
    trade_price: '8537000.00000000',
    unit: 'days'
  },
  {
    candle_price: '27444900233.54980000',
    candle_volume: '3125.56191138',
    currency: 'KRW',
    date: 1575849600.0,
    high_price: '8891000.00000000',
    item: 'BTC',
    low_price: '8640000.00000000',
    opening_price: '8807000.00000000',
    trade_price: '8679000.00000000',
    unit: 'days'
  },
  {
    candle_price: '17561562887.79252000',
    candle_volume: '2000.92140277',
    currency: 'KRW',
    date: 1575763200.0,
    high_price: '8857000.00000000',
    item: 'BTC',
    low_price: '8670000.00000000',
    opening_price: '8784000.00000000',
    trade_price: '8807000.00000000',
    unit: 'days'
  },
  {
    candle_price: '16856577567.12357000',
    candle_volume: '1910.69581081',
    currency: 'KRW',
    date: 1575676800.0,
    high_price: '8897000.00000000',
    item: 'BTC',
    low_price: '8776000.00000000',
    opening_price: '8815000.00000000',
    trade_price: '8784000.00000000',
    unit: 'days'
  },
  {
    candle_price: '26463749586.85809000',
    candle_volume: '3039.17313756',
    currency: 'KRW',
    date: 1575590400.0,
    high_price: '8852000.00000000',
    item: 'BTC',
    low_price: '8614000.00000000',
    opening_price: '8685000.00000000',
    trade_price: '8813000.00000000',
    unit: 'days'
  },
  {
    candle_price: '34354288789.64471000',
    candle_volume: '3969.79229665',
    currency: 'KRW',
    date: 1575504000.0,
    high_price: '8810000.00000000',
    item: 'BTC',
    low_price: '8480000.00000000',
    opening_price: '8515000.00000000',
    trade_price: '8685000.00000000',
    unit: 'days'
  }
];
