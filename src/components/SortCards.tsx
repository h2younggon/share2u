import React from 'react';
import styled from '@emotion/native';
import SortCard from './SortCard';

export type SortCardProps = {};

const cards = [
  {
    url: require('../assets/icons/sort/best.png'),
    title: '테스트입니다.',
    subTItle: '서브테스트입니다.',
  },
  {
    url: require('../assets/icons/sort/best.png'),
    title: '테스트입니다.',
    subTItle: '서브테스트입니다.',
  },
  {
    url: require('../assets/icons/sort/best.png'),
    title: '테스트입니다.',
    subTItle: '서브테스트입니다.',
  },
  {
    url: require('../assets/icons/sort/best.png'),
    title: '테스트입니다.',
    subTItle: '서브테스트입니다.',
  },
];

const Container = styled.ScrollView`
  padding: 0 10px;
  margin-bottom: 35px;
`;

const Wrap = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 600px;
  height: 175px;
`;

function SortCards({}: SortCardProps) {
  return (
    <Container horizontal>
      <Wrap>
        {cards.map((card, index) => {
          return (
            <SortCard
              key={index}
              url={card.url}
              title={card.title}
              subTitle={card.subTItle}
            />
          );
        })}
      </Wrap>
    </Container>
  );
}

export default SortCards;
