import styled from '@emotion/native';
import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from '../components/Carousel';
import MainCard from '../components/MainCard';
import SortCard from '../components/SortCards';

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

const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`;

const LinkInputWrap = styled.View`
  width: 299px;
  height: 54px;
  margin: 0 auto;
  margin-top: 35px;
  border: 1px solid #e6e6e6;
  background-color: #f7f7f7;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 30px;
`;

const LinktText = styled.Text`
  padding-left: 13.75px;
  font-weight: 500;
  font-size: 16px;
`;

const Image = styled.Image`
  width: 12px;
  height: 12px;
  margin-left: 22.25px;
`;

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
        <Image source={require('../assets/icons/search.png')} />
        <LinktText>찾으시는 공간이 있나요?</LinktText>
      </LinkInputWrap>
      <SortCard />
      <MainCard />
      <MainCard />
      <MainCard />
      <MainCard />
    </Container>
  );
}

export default HomeScreen;
