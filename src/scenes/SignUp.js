import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import {
  check_email,
  upper_case,
  lower_case,
  number_case
} from '../utils/regexp';

const SignUp = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [pwdCheckFocus, setPwdCheckFocus] = useState(false);
  const [input, setInput] = useState({
    email: '',
    // 처음 실행 시 두 비밀번호가 같아도 체크 버튼 뜨지 않게 초기 비밀번호 다르게 지정.
    password: '@',
    passwordCheck: '#'
  });

  const { email, password, passwordCheck, correctEmail } = input;

  const [upper, setUpper] = useState(false);
  const [lower, setLower] = useState(false);
  const [number, setNumber] = useState(false);
  const [length, setLength] = useState(false);

  useEffect(() => {
    console.log('useEffect:');
    if (upper_case.test(password)) {
      setUpper(true);
    } else {
      setUpper(false);
    }
    if (lower_case.test(password)) {
      setLower(true);
    } else {
      setLower(false);
    }
    if (number_case.test(password)) {
      setNumber(true);
    } else {
      setNumber(false);
    }
    if (password.length >= 10) {
      setLength(true);
    } else {
      setLength(false);
    }
  }, [input, password, correctEmail, upper, lower, number, length]);

  const handleChange = (evt, name) => {
    const { text } = evt.nativeEvent;
    console.log('email:', email);
    if (check_email.test(email)) {
      setInput({ ...input, correctEmail: true, [name]: text });
    } else {
      setInput({ ...input, correctEmail: false, [name]: text });
    }
  };

  const onSubmitPress = () => {
    console.log('press');
    fetch('http://10.58.2.252:8000/account/signup', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(response => response.json())
      .then(data => {
        console.log('response data: ', data);
        if (data.message === 'SUCCESS') {
          console.log('isSuccess');
          navigation.navigate('SignUpEmail', { email: email });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  // console.log('email: ', email);
  // console.log('password: ', password);
  // console.log('passwordCheck: ', passwordCheck);
  console.log('upper: ', upper);
  console.log('lower: ', lower);
  console.log('number: ', number);
  console.log('length: ', length);
  return (
    <Container>
      <TopWrapper>
        <CoinOneLogo
          source={{
            uri: 'https://image.zdnet.co.kr/2018/01/10/lyk_KMgnJltaZmdsqbAf.jpg'
          }}
        />
      </TopWrapper>

      <KeyboardAwareScrollView>
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
          <InputWrapper>
            <InputTitle>이메일</InputTitle>
            <TextInputWrapper>
              <InputForm
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                placeholder="아이디로 사용할 이메일 입력"
                onChange={evt => handleChange(evt, 'email')}
                correctEmail={correctEmail}
                emailFocus={emailFocus}
              />
              <Ionicons
                name="ios-checkmark-circle"
                size={25}
                color="#00cb6f"
                style={{ marginLeft: 10, opacity: correctEmail ? 100 : 0 }}
              />
            </TextInputWrapper>
            <CorrectEmail email={email} correctEmail={correctEmail}>
              이메일 형식이 올바르지 않습니다
            </CorrectEmail>
            <PasswordWrapper>
              <InputTitle>비밀번호</InputTitle>
              <TextInputWrapper>
                <PasswordInputForm
                  placeholder="비밀번호 입력"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                  onChange={evt => handleChange(evt, 'password')}
                  pwdFocus={pwdFocus}
                  secureTextEntry={true}
                  upper={upper}
                  lower={lower}
                  number={number}
                  length={length}
                />
                <Ionicons
                  name="ios-checkmark-circle"
                  size={25}
                  color="#00cb6f"
                  style={{
                    marginLeft: 10,
                    opacity: upper && lower && number && length ? 100 : 0
                  }}
                />
              </TextInputWrapper>
            </PasswordWrapper>

            <ValidCheckWrapper>
              <ValidUpperText upper={upper}>* 영문 대문자 포함 </ValidUpperText>
              <ValidLowerText lower={lower}>* 영문 소문자 포함 </ValidLowerText>
              <ValidNumber number={number}>* 숫자 포함 </ValidNumber>
              <ValidTextCount length={length}>* 10자 이상 </ValidTextCount>
            </ValidCheckWrapper>
            <TextInputWrapper>
              <PasswordCheckInputForm
                placeholder="비밀번호 확인"
                onFocus={() => setPwdCheckFocus(true)}
                onBlur={() => setPwdCheckFocus(false)}
                onChange={evt => handleChange(evt, 'passwordCheck')}
                pwdCheckFocus={pwdCheckFocus}
                secureTextEntry={true}
                password={password}
                passwordCheck={passwordCheck}
              />
              <Ionicons
                name="ios-checkmark-circle"
                size={25}
                color="#00cb6f"
                style={{
                  marginLeft: 10,
                  opacity:
                    password === passwordCheck &&
                    password.length > 0 &&
                    passwordCheck.length > 0
                      ? 100
                      : 0
                }}
              />
            </TextInputWrapper>

            <CorrectPassword
              pwdCheckFocus={pwdCheckFocus}
              password={password}
              passwordCheck={passwordCheck}
            >
              비밀번호가 서로 일치하지 않습니다
            </CorrectPassword>
          </InputWrapper>

          <SubmitButtonWrapper
            correctEmail={correctEmail}
            password={password}
            passwordCheck={passwordCheck}
            onPress={onSubmitPress}
            upper={upper}
            lower={lower}
            number={number}
            length={length}
          >
            <SubmitButton
              correctEmail={correctEmail}
              password={password}
              passwordCheck={passwordCheck}
              upper={upper}
              lower={lower}
              number={number}
              length={length}
            >
              완료
            </SubmitButton>
          </SubmitButtonWrapper>
        </MainWrapper>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default SignUp;

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
  padding: 0 15px;
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
  margin-bottom: 30px;
`;

const SubTitleInnerWrapper = styled.View`
  flex-direction: row;
`;

const AgreeTitleNumber = styled.Text`
  background-color: #e4e5e8;
  width: 20px;
  text-align: center;
  color: #aeb3bb;
  margin-right: 5px;
  border-radius: 20px;
`;

const AgreeTitle = styled.Text`
  color: #aeb3bb;
`;

const SubTitleMiddleLine = styled.View`
  width: 40px;
  height: 1px;
  background-color: #a4a4a4;
  margin: 0 10px;
`;

const InfoTitleNumber = styled.Text`
  background-color: #3359ff;
  width: 20px;
  text-align: center;
  color: #fff;
  margin-right: 5px;
  border-radius: 20px;
`;
const InfoTitle = styled.Text`
  color: #3359ff;
`;

const InputWrapper = styled.View`
  width: 100%;
`;

const InputTitle = styled.Text`
  margin-bottom: 10px;
`;

const InputForm = styled.TextInput`
  flex: 1;
  height: 50px;
  margin: 0;
  border-width: ${props => (props.emailFocus && props.emailFocus ? 1.5 : 0.3)};
  border-color: ${props =>
    props.emailFocus && props.emailFocus ? '#3359ff' : '#757575'};
  padding: 0 10px;
  border-radius: 3px;
  background-color: ${props => (props.correctEmail ? '#e9ffa6' : '#fff')};
`;

const PasswordInputForm = styled.TextInput`
  flex: 1;
  height: 50px;
  margin: 0;
  padding: 0 10px;
  border-width: ${props => (props.pwdFocus && props.pwdFocus ? 1.5 : 0.3)};
  border-color: ${props =>
    props.pwdFocus && props.pwdFocus ? '#3359ff' : '#757575'};
  background-color: ${props =>
    props.upper && props.lower && props.number && props.length
      ? '#e9ffa6'
      : '#fff'};
  border-radius: 3px;
`;

const PasswordCheckInputForm = styled.TextInput`
  flex: 1;
  height: 50px;
  margin: 0;
  padding: 0 10px;
  border-width: ${props =>
    props.pwdCheckFocus && props.pwdCheckFocus ? 1.5 : 0.3};
  border-color: ${props =>
    props.pwdCheckFocus && props.pwdCheckFocus ? '#3359ff' : '#757575'};
  background-color: ${props =>
    props.password === props.passwordCheck &&
    props.password.length > 0 &&
    props.passwordCheck.length > 0
      ? '#e9ffa6'
      : '#fff'};
  border-radius: 3px;
`;

const PasswordWrapper = styled.View`
  margin-top: 50px;
`;

const ValidCheckWrapper = styled.View`
  height: 120px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-width: 0.3px;
  border-color: #959595;
  background-color: #fafafa;
  padding: 15px;
  justify-content: space-between;
`;

const ValidUpperText = styled.Text`
  color: ${props => (props.upper ? '#00cb6f' : '#4a4a4a')};
  font-weight: ${props => (props.upper ? 600 : 400)};
`;

const ValidLowerText = styled.Text`
  color: ${props => (props.lower ? '#00cb6f' : '#4a4a4a')};
  font-weight: ${props => (props.lower ? 600 : 400)};
`;

const ValidNumber = styled.Text`
  color: ${props => (props.number ? '#00cb6f' : '#4a4a4a')};
  font-weight: ${props => (props.number ? 600 : 400)};
`;

const ValidTextCount = styled.Text`
  color: ${props => (props.length ? '#00cb6f' : '#4a4a4a')};
  font-weight: ${props => (props.length ? 600 : 400)};
`;

const CorrectEmail = styled.Text`
  margin-top: 5px;
  color: #ff2b2b;
  opacity: ${props => (props.email && !props.correctEmail ? 100 : 0)};
`;

const CorrectPassword = styled.Text`
  margin-top: 5px;
  color: #ff2b2b;
  opacity: ${props =>
    props.pwdCheckFocus && props.password !== props.passwordCheck ? 100 : 0};
`;

const SubmitButtonWrapper = styled.TouchableOpacity`
  height: 50px;
  padding: 0 15px;
  background-color: ${props =>
    props.correctEmail &&
    props.password === props.passwordCheck &&
    props.password.length > 0 &&
    props.passwordCheck.length > 0 &&
    props.upper &&
    props.lower &&
    props.number &&
    props.length
      ? '#3359ff'
      : '#dadada'};
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 60px;
`;

const SubmitButton = styled.Text`
  color: ${props =>
    props.correctEmail &&
    props.password === props.passwordCheck &&
    props.password.length > 0 &&
    props.passwordCheck.length > 0 &&
    props.upper &&
    props.lower &&
    props.number &&
    props.length
      ? '#fff'
      : '#6a6a6a'};
`;

const TextInputWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
