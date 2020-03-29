import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';

const Plus = () => {
  return (
    <Container>
      {/* <MainImage
        source={{
          uri:
            'https://user-images.githubusercontent.com/53449023/77091536-0b6d6980-6a4c-11ea-9df9-cc9f5b85c82d.png'
        }}
      /> */}
    </Container>
  );
};

export default Plus;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const MainImage = styled.Image`
  width: 100%;
  height: 100%;
`;
