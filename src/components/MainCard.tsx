import styled from '@emotion/native';
import React from 'react';
import {View} from 'react-native';

const Container = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  width: 351px;
  height: 400px;
  position: relative;
`;

const TextBlock = styled.View`
  position: absolute;
  margin: auto 0 0 auto;
  background: rgba(0, 0, 0, 0.8);
  width: 351px;
  padding: 12px 39px 8px 15px;
  bottom: -10%;
  right: 0;
`;

const Title = styled.Text`
  color: #ffffff;
  font-size: 24px;
  line-height: 36px;
  font-weight: bold;
`;

const Content = styled.Text`
  color: #767676;
  font-size: 16px;
  margin-top: 59px;
  margin-bottom: 30px;
  padding: 0 24px;
  line-height: 24px;
  text-align: left;
`;

function MainCard() {
  return (
    <Container>
      <View>
        <Image source={require('../assets/images/main.png')} />
        <TextBlock>
          <Title>흰 공간과 그림만 있다면 어떤 전시회든 열 수 있어</Title>
        </TextBlock>
      </View>

      <Content>
        {`
      공공과 함께하는 이 달의 문화생활! 
      일상을 여행처럼 즐기는 회원님께 추천해드려요.
      `}
      </Content>
    </Container>
  );
}

export default MainCard;
