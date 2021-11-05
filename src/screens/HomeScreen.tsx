import styled from '@emotion/native';
import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from '../components/Carousel';

const screenWidth = Math.round(Dimensions.get('window').width);
const PAGES = [
  {
    num: 1,
    color: '#86E3CE',
  },
  {
    num: 2,
    color: '#D0E6A5',
  },
  {
    num: 3,
    color: '#FFDD94',
  },
  {
    num: 4,
    color: '#FA897B',
  },
  {
    num: 5,
    color: '#CCABD8',
  },
];

function HomeScreen() {
  return (
    <Container>
      <Carousel
        gap={0}
        offset={0}
        pages={PAGES}
        pageWidth={screenWidth - 0 * 2}
      />
      <LinkInputWrap>
        <LinkBlock>
          <Image source={require('../assets/icons/search.png')} />
          <LinktText>찾으시는 공간이 있나요?</LinktText>
        </LinkBlock>
      </LinkInputWrap>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex: 1;
`;

const LinkInputWrap = styled.View`
  width: 299px;
  height: 54px;
  margin: 0 auto;
  margin-top: 35px;
  border: 1px solid #e6e6e6;
  position: relative;
`;

const LinkBlock = styled.View`
  display: flex;
`;

const LinktText = styled.Text`
  padding-left: 48px;
`;

const Image = styled.Image`
  position: absolute;
  width: 12px;
  height: 12px;
  padding-left: 22.25px;
`;

export default HomeScreen;
