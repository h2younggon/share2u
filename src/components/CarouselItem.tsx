import React from 'react';
import styled from '@emotion/native';
import {Text, ViewStyle} from 'react-native';

export type CarouselItemProps = {
  item: {num: number; color: string};
  style: ViewStyle;
};

const Item = styled.View<{color: string}>`
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

function CarouselItem({item, style}: CarouselItemProps) {
  return (
    <Item color={item.color} style={style}>
      <Text>item</Text>
    </Item>
  );
}

export default CarouselItem;
