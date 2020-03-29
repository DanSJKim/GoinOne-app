import React, { useState, useEffect } from 'react';
import { View, Text, Switch, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import styled from 'styled-components';

const SignUpTerms = ({ navigation }) => {
  const [allCheck, setAllCheck] = useState(false);
  const [firstCheck, setFirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);
  const [thirdCheck, setThirdCheck] = useState(false);

  navigation.setOptions({
    headerTitle: () => {
      return (
        <Text style={{ fontSize: 17, fontWeight: '600' }}>coinone.co.kr</Text>
      );
    },
    headerLeft: () => (
      <Ionicons
        name="ios-arrow-round-back"
        size={40}
        onPress={() => {
          navigation.pop();
        }}
        style={{ marginLeft: 15 }}
      />
    )
  });

  useEffect(() => {
    console.log('useEffect');
    // 동의 체크가 모두 체크상태일 때만 모두 동의 버튼 체크
    if (firstCheck && secondCheck && thirdCheck) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [allCheck, firstCheck, secondCheck, thirdCheck]);

  const onCheck = e => {
    console.log('e: ', e);
  };

  // if (firstCheck || secondCheck || thirdCheck) {
  //   setAllCheck(true);
  // }

  console.log('first: ', firstCheck);
  console.log('second: ', secondCheck);
  console.log('third: ', thirdCheck);
  return (
    <Container>
      <ScrollView>
        <TopWrapper>
          <CoinOneLogo
            source={{
              uri:
                'https://image.zdnet.co.kr/2018/01/10/lyk_KMgnJltaZmdsqbAf.jpg'
            }}
          />
        </TopWrapper>
        <MainWrapper>
          <SignUpTitle>회원가입</SignUpTitle>
          <SubTitleWrapper>
            <SubTitleInnerWrapper>
              <AgreeTitleNumber>1</AgreeTitleNumber>
              <AgreeTitle>약관동의</AgreeTitle>
            </SubTitleInnerWrapper>
            <SubTitleMiddleLine />
            <SubTitleInnerWrapper>
              <InfoTitleNumber>2</InfoTitleNumber>
              <InfoTitle>정보입력</InfoTitle>
            </SubTitleInnerWrapper>
          </SubTitleWrapper>
          <AllCheckWrapper>
            <CheckBox
              checked={allCheck}
              onPress={() => {
                if (allCheck) {
                  setAllCheck(false);
                  setFirstCheck(false);
                  setSecondCheck(false);
                  setThirdCheck(false);
                } else {
                  setAllCheck(true);
                  setFirstCheck(true);
                  setSecondCheck(true);
                  setThirdCheck(true);
                }
              }}
            />
            <AllCheckText>아래 모든 항목에 동의합니다</AllCheckText>
          </AllCheckWrapper>
          <TermsOfUseWrapper>
            <TermsOfUseTitle>고인원 이용약관 (필수)</TermsOfUseTitle>
            <TermsOfUseDescWrapper>
              <TermsOfUseDescScroll>
                <TermsOfUseDesc>{FirstTerm}</TermsOfUseDesc>
              </TermsOfUseDescScroll>
            </TermsOfUseDescWrapper>
            <AgreeCheckBoxWrapper>
              <CheckBox
                checked={firstCheck}
                onPress={() => {
                  setFirstCheck(!firstCheck);
                }}
                containerStyle={{
                  margin: 0,
                  padding: 0
                }}
              />
              <AgreeText>동의합니다</AgreeText>
            </AgreeCheckBoxWrapper>
          </TermsOfUseWrapper>
          <TermsOfUseWrapper>
            <TermsOfUseTitle>개인정보 수집 및 이용 (필수)</TermsOfUseTitle>
            <TermsOfUseDescWrapper>
              <TermsOfUseDescScroll>
                <TermsOfUseDesc>{SecondTerm}</TermsOfUseDesc>
              </TermsOfUseDescScroll>
            </TermsOfUseDescWrapper>
            <AgreeCheckBoxWrapper>
              <CheckBox
                checked={secondCheck}
                onPress={() => setSecondCheck(!secondCheck)}
                containerStyle={{
                  margin: 0,
                  padding: 0
                }}
              />
              <AgreeText>동의합니다</AgreeText>
            </AgreeCheckBoxWrapper>
          </TermsOfUseWrapper>
          <TermsOfUseWrapper>
            <TermsOfUseTitle>이벤트 및 정보 수신 안내 (선택)</TermsOfUseTitle>
            <TermsOfUseDescWrapper>
              <TermsOfUseDescScroll>
                <TermsOfUseDesc>{ThirdTerm}</TermsOfUseDesc>
              </TermsOfUseDescScroll>
            </TermsOfUseDescWrapper>
            <AgreeCheckBoxWrapper>
              <CheckBox
                checked={thirdCheck}
                onPress={() => setThirdCheck(!thirdCheck)}
                containerStyle={{
                  margin: 0,
                  padding: 0
                }}
              />
              <AgreeText>동의합니다</AgreeText>
            </AgreeCheckBoxWrapper>
          </TermsOfUseWrapper>
          <MinorWarnWrapper>
            <MinorWarnText>
              * 19세 미만은 회원 자격이 없으며, 서비스 이용이 제한됩니다
            </MinorWarnText>
          </MinorWarnWrapper>
          <NextButtonWrapper first={firstCheck} second={secondCheck}>
            <NextButton
              first={firstCheck}
              second={secondCheck}
              onPress={() => navigation.navigate('SignUp')}
            >
              다음
            </NextButton>
          </NextButtonWrapper>
        </MainWrapper>
      </ScrollView>
    </Container>
  );
};

export default SignUpTerms;

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

const MainWrapper = styled.View`
  display: flex;
  align-items: center;
`;

const CoinOneLogo = styled.Image`
  width: 140px;
  height: 30px;
`;

const SignUpTitle = styled.Text`
  margin-top: 40px;
  font-size: 25px;
`;

const SubTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

const SubTitleInnerWrapper = styled.View`
  flex-direction: row;
`;

const AgreeTitleNumber = styled.Text`
  background-color: #3359ff;
  width: 20px;
  text-align: center;
  color: #fff;
  margin-right: 5px;
  border-radius: 20px;
`;

const AgreeTitle = styled.Text`
  color: #3359ff;
`;

const SubTitleMiddleLine = styled.View`
  width: 40px;
  height: 1px;
  background-color: #a4a4a4;
  margin: 0 10px;
`;

const InfoTitleNumber = styled.Text`
  background-color: #e4e5e8;
  width: 20px;
  text-align: center;
  color: #aeb3bb;
  margin-right: 5px;
  border-radius: 20px;
`;
const InfoTitle = styled.Text`
  color: #aeb3bb;
`;

// 아래 모든 항목에 동의합니다
const AllCheckWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  margin-top: 25px;
`;

const AllCheckText = styled.Text`
  font-weight: 700;
`;
//

const TermsOfUseWrapper = styled.View`
  margin: 15px;
`;

const TermsOfUseTitle = styled.Text`
  margin-bottom: 10px;
  color: #333333;
`;

const TermsOfUseDescWrapper = styled.View`
  height: 150px;
  border: 1px;
  border-radius: 3px;
  border-width: 0.3px;
  padding: 0 15px;
  border-color: #484848;
`;

const TermsOfUseDescScroll = styled.ScrollView``;

const TermsOfUseDesc = styled.Text`
  font-size: 13px;
  color: #393939;
  margin-top: 15px;
  font-weight: 200;
`;

const AgreeCheckBoxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 8px;
`;

const AgreeText = styled.Text``;

const MinorWarnWrapper = styled.View`
  height: 50px;
  border: 1px;
  border-width: 0.3px;
  padding: 0 15px;
  background-color: #f8f8f9;
  border-color: #484848;
  justify-content: center;
  width: 92%;
`;

const MinorWarnText = styled.Text`
  color: #6a6a6a;
`;

const NextButtonWrapper = styled.View`
  height: 50px;
  padding: 0 15px;
  background-color: ${props =>
    props.first && props.second ? '#3359ff' : '#dadada'};
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  width: 92%;
  margin-top: 50px;
  margin-bottom: 60px;
`;

const NextButton = styled.Text`
  color: ${props => (props.first && props.second ? '#fff' : '#6a6a6a')};
`;

const FirstTerm = `기본 약관의 주요 내용 고지
  본 약관은 회원과 회사 사이의 기본적인 사항을 규정하기 위한 것으로, 법인 회원의 경우 기본 약관 제19조의 규정을 확인하여 주시기 바랍니다.
  회사는 미성년자 또는 제한능력자의 서비스 이용을 제한합니다. 회사는 미성년자 또는 제한능력자가 회원으로 가입하였음을 확인한 경우 해당 회원을 회원의 동의 없이 탈퇴 처리할 수 있습니다.
  접속자가 회사의 서비스를 이용하기 위하여 회원의 계정, 비밀번호 기타 회원이 회사에게 제공한 로그인 정보와 일치하는 정보를 기입하여 회사의 모바일/웹 페이지, 어플리케이션에 접속할 경우, 해당 접속 기간 중 이루어지는 모든 거래 행위는 해당 회원의 진정한 의사에 기한 것으로 간주됩니다. 그러므로 회원은 계정, 비밀번호 기타 정보에 대한 보안을 유지하여야 하고, 자신의 귀책사유에 의하여 개인정보가 유출됨에 따라 발생할 수 있는 금융사고 또는 범죄로 인한 피해를 주의하여야 합니다.
  암호화폐(Crypto-Currency, 이하 ‘암호화폐’라 합니다)는 발행주체가 존재하지 아니하므로 대한민국 내·외의 (회사를 포함하여 어떠한) 제3자도 가치를 보증하거나 지급을 보증하지 아니합니다. 그러므로 암호화폐의 가치는 대한민국을 포함한 세계 각 국의 법률, 대한민국을 포함한 세계 각 국의 정책, 유권해석, 경제환경 등에 따라 매우 큰 변동성이 있을 수 있습니다. 특히, 암호화폐의 거래에 대한 법률행위의 해석은 국가 별로 상이하여 법정화폐와 다른 특유의 위험성이 내재되어 있으므로, 회원은 반드시 이 점에 주의하여야 합니다.
  고인원 거래서비스는 회원이 암호화폐를 다른 회원과 거래하거나, 회원이 고인원 거래소 내 전자지갑에 보관하고 있는 회원의 암호화폐를 블록체인 네트워크를 통하여 타 전자지갑으로 보내거나 타 전자지갑으로부터 고인원 거래소 내 회원의 전자지갑으로 받을 수 있는 서비스입니다. 현재 블록체인 기술은 제3자에 의하여 변조가 불가능한 것으로 평가받고 있으나, 이는 기술의 발전 또는 기타 예상할 수 없는 사정에 의하여 언제든지 변경될 수 있습니다.
  회원이 회사의 서비스를 이용하여 암호화폐를 거래하였을 경우, 해당 암호화폐의 거래내역은 고인원 거래서비스 시스템에 기록이 됩니다. 회사는 고인원 내 암호화폐 거래 과정에서 체결된 거래에 관하여 일정한 수수료를 지급받습니다.
  회원이 회사의 서비스를 이용하여 암호화폐를 전송하거나 전송받는 경우, 해당 암호화폐의 거래내역은 블록체인 네트워크에 기록되어 전 세계의 암호화폐 이용자가 해당 거래의 진실성 등을 확인할 수 있게 되고, 그 과정에서 채굴자에게 일정한 수수료를 지급하여야 합니다. 이 때에 회사가 회원으로부터 지급받는 수수료는 채굴자에게 지급되며 채굴 난이도가 상승하거나 전송 대기수요가 채굴 공급수요를 상회할 경우 채굴자는 더 높은 수수료를 지급하는 블록체인을 먼저 채굴하게 되므로, 회사가 채굴자에게 지급하는 수수료는 변동성이 있습니다.
  회사는 365일, 24시간 서비스를 제공하기 위하여 노력하고 있으나, 이를 보증하는 것이 아닙니다. 회원 또는 제3자의 불법행위 등으로 인하여 서비스가 일시 중단되거나 서비스에 오류가 발생하여 회원에게 표시되는 거래기록이 실제의 기록과 상이하게 표시되는 등의 문제가 발생할 경우, 회사는 문제를 해결하고 서비스를 재개합니다. 이 때, 회원은 회사에 대하여 회사가 보유하고 있는 거래 기록에 근거하여 암호화폐의 실제 기록으로 복구할 것을 요청할 수 있습니다.
  최근 스미싱, 파밍 등 전기통신금융사기의 수단으로 암호화폐를 이용하는 경우가 발생하고 있습니다. 그러므로 회원은 반드시 전기통신금융사기로 인하여 피해가 발생하지 않도록 스스로 주의를 기울여야 하고, 만일 전기통신금융사기로 인하여 수사기관, 사법기관, 행정기관 기타 공권력의 조사가 이루어져 해당 계정 및 전자지갑 등의 동결이 필요할 경우, 회사는 회원의 동의 없이 해당 계정 및 전자지갑 등을 동결할 수 있습니다.
  회원의 불법행위로 인하여 회사에게 손해가 발생할 경우, 회사는 회원에게 법률상 손해배상청구권을 행사할 수 있습니다. 그러므로 반드시 법령을 준수하여 회사의 서비스를 이용하여 주시기 바랍니다.`;

const SecondTerm = `주식회사 고인원(이하 '회사')은 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법'), 개인정보보호법에 따라 이용자의 개인정보 및 권익을 보호하고 개인정보와 관련된 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.

 본 개인정보처리방침은 회사의 웹사이트(https://coinone.co.kr)의 제반 서비스에 적용되며, 다른 웹사이트에서 제공되는 서비스에 대해서는 별개의 개인정보처리방침이 적용될 수 있습니다.

 회사가 개인정보처리방침을 개정할 때에는 웹사이트 공지사항(또는 개별공지)을 통하여 공지합니다.
 개인정보처리방침은 다음과 같은 중요한 의미를 가지고 있습니다.

 회사는 이용자에게 회사가 수집하는 개인정보의 내역, 이용 방법, 제공 또는 위탁되는 정보, 파기 방법 등을 개인정보처리방침을 통해 알려드리고 있습니다.
 이용자는 개인정보자기결정권을 비롯한 자신의 개인정보에 대한 법률상 권리를 보유하고 있습니다. 그리고 개인정보처리방침은 이용자의 개인정보에 대한 법률상 권리의 행사 방법을 안내합니다.
 또한 개인정보 침해사고를 예방하고, 사고가 이미 발생하였을 때 피해를 복구하기 위한 방법을 안내합니다.
 1. 개인정보의 처리 목적
 회사는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.
 
 가. 홈페이지 회원가입 및 관리
 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.`;

const ThirdTerm = `주식회사 고인원(이하 '회사')은 정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법'), 개인정보보호법에 따라 이용자의 개인정보 및 권익을 보호하고 개인정보와 관련된 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.

 본 개인정보처리방침은 회사의 웹사이트(https://coinone.co.kr)의 제반 서비스에 적용되며, 다른 웹사이트에서 제공되는 서비스에 대해서는 별개의 개인정보처리방침이 적용될 수 있습니다.
 
 회사가 개인정보처리방침을 개정할 때에는 웹사이트 공지사항(또는 개별공지)을 통하여 공지합니다.
 
 개인정보처리방침은 다음과 같은 중요한 의미를 가지고 있습니다.
 
 회사는 이용자에게 회사가 수집하는 개인정보의 내역, 이용 방법, 제공 또는 위탁되는 정보, 파기 방법 등을 개인정보처리방침을 통해 알려드리고 있습니다.
 이용자는 개인정보자기결정권을 비롯한 자신의 개인정보에 대한 법률상 권리를 보유하고 있습니다. 그리고 개인정보처리방침은 이용자의 개인정보에 대한 법률상 권리의 행사 방법을 안내합니다.
 또한 개인정보 침해사고를 예방하고, 사고가 이미 발생하였을 때 피해를 복구하기 위한 방법을 안내합니다.
 1. 개인정보의 처리 목적
 회사는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 이용 목적이 변경될 시에는 사전동의를 구할 예정입니다.
 
 가. 홈페이지 회원가입 및 관리
 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존 등을 목적으로 개인정보를 처리합니다.
 나. 재화 또는 서비스 제공
 서비스 제공, 콘텐츠 제공, 맞춤 서비스 제공, 수수료 결제·정산 등을 목적으로 개인정보를 처리합니다.
 다. 서비스 이용자의 본인확인 및 회원정보 변경업무 처리
 본인 인증, 계좌 인증, 점유 인증, 연령 인증, 신분증 진위여부 확인, 신분증 점유 확인 등을 목적으로 개인정보를 처리합니다.`;
