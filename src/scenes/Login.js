import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { check_email } from '../utils/regexp';
import { AsyncStorage } from 'react-native';
import { StackActions } from '@react-navigation/native';
import styled from 'styled-components';

const Login = ({ navigation }) => {
  const [emailFocus, setEmailFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [input, setInput] = useState({
    email: '',
    password: ''
  });
  const { email, password, correctEmail } = input;

  _storeToken = async token => {
    try {
      console.log('storedata try');
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      console.log('storing data error');
      // Error saving data
    }
  };

  _retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // We have data!!
        console.log('value: ', value);
      }
    } catch (error) {
      console.log('retrieving data error');
      // Error retrieving data
    }
  };

  const onPressSignUp = () => {
    navigation.navigate('SignUpTerms');
  };

  const handleChange = (evt, name) => {
    const { text } = evt.nativeEvent;
    console.log('email:', email);
    if (check_email.test(email)) {
      setInput({ ...input, correctEmail: true, [name]: text });
    } else {
      setInput({ ...input, correctEmail: false, [name]: text });
    }
  };

  // 로그인 버튼 클릭
  const onSignInPress = () => {
    console.log('signin email: ', email);
    console.log('signin password: ', password);
    fetch('http://10.58.2.252:8000/account/signin', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(response => response.json())
      .then(data => {
        console.log('response json data: ', data);
        // 토큰 값을 받아오는 것이 성공하면 받아온 토큰 값을 AsyncStorage에 저장한다.
        if (data.access_token) {
          console.log('!!!');
          _storeToken(data.access_token);
          // const popAction = StackActions.pop();
          // navigation.dispatch(popAction);
          navigation.reset({
            routes: [{ name: 'MainTabNavigator' }]
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <Container>
      <CoinOneLogo
        source={{
          uri: 'https://image.zdnet.co.kr/2018/01/10/lyk_KMgnJltaZmdsqbAf.jpg'
        }}
      />

      <InputWrapper>
        <EmailInput
          onChange={evt => handleChange(evt, 'email')}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          placeholder="이메일"
          emailFocus={emailFocus}
        />
        <PasswordInput
          onChange={evt => handleChange(evt, 'password')}
          onFocus={() => setPwdFocus(true)}
          onBlur={() => setPwdFocus(false)}
          placeholder="비밀번호"
          pwdFocus={pwdFocus}
          secureTextEntry={true}
        />
      </InputWrapper>
      <CorrectEmail email={email} correctEmail={correctEmail}>
        이메일 형식이 올바르지 않습니다
      </CorrectEmail>

      <SignInButtonWrapper
        onPress={onSignInPress}
        correctEmail={correctEmail}
        password={password}
      >
        <SignInButton correctEmail={correctEmail} password={password}>
          완료
        </SignInButton>
      </SignInButtonWrapper>

      <BottomButtonsWrapper>
        <View>
          <SignUpButton onPress={() => onPressSignUp()}>회원가입</SignUpButton>
        </View>
        <View>
          <FindPasswordButton>비밀번호 찾기</FindPasswordButton>
        </View>
      </BottomButtonsWrapper>
    </Container>
  );
};

export default Login;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
  align-items: center;
`;

const CoinOneLogo = styled.Image`
  width: 200px;
  height: 45px;
  margin-top: 60px;
  margin-bottom: 50px;
`;

const InputWrapper = styled.View`
  width: 100%;
`;

const EmailInput = styled.TextInput`
  height: 50px;
  margin: 10px 15px 5px 15px;
  border-width: ${props => (props.emailFocus && props.emailFocus ? 1.5 : 0.3)};
  border-color: ${props =>
    props.emailFocus && props.emailFocus ? '#3359ff' : '#757575'};
  padding: 0 10px;
`;

const PasswordInput = styled.TextInput`
  height: 50px;
  margin: 5px 15px 5px 15px;
  border-width: ${props => (props.pwdFocus && props.pwdFocus ? 1.5 : 0.3)};
  border-color: ${props =>
    props.pwdFocus && props.pwdFocus ? '#3359ff' : '#757575'};
  padding: 0 10px;
`;

const BottomButtonsWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

const SignUpButton = styled.Text`
  margin-right: 20px;
  color: #454545;
`;

const FindPasswordButton = styled.Text`
  color: #454545;
`;

const RightArrow = styled.View`
  transform: rotate(-42deg);
  border-right-width: 2px;
  border-bottom-width: 2px;
  border-color: #858585;
  width: 10px;
  height: 10px;
  margin-top: 29px;
  margin-bottom: 20px;
  margin-right: 5px;
`;

const SignInButtonWrapper = styled.TouchableOpacity`
  height: 50px;
  padding: 0 15px;
  background-color: ${props =>
    props.correctEmail && props.password ? '#3359ff' : '#dadada'};
  border-radius: 3px;
  justify-content: center;
  align-items: center;
  width: 93%;
  margin: 0;
`;

const SignInButton = styled.Text`
  color: ${props =>
    props.correctEmail && props.password ? '#fff' : '#6a6a6a'};
`;

const CorrectEmail = styled.Text`
  margin-top: 5px;
  color: #ff2b2b;
  opacity: ${props => (props.email && !props.correctEmail ? 100 : 0)};
  align-self: flex-start;
  padding: 0 15px;d
`;
