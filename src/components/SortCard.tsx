import styled from '@emotion/native';
import React from 'react';

export type SortCardProps = {
  url: any;
  title: string;
  subTitle: string;
};

const Block = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  & + & {
    padding-bottom: 15px;
    padding-right: 30px;
  }
`;

const ImageBlock = styled.View`
  border: 1px solid #e6e6e6;
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 10px;
  width: 80px;
  height: 80px;
`;

const Image = styled.Image`
  width: 50%;
  height: 50%;
  margin: auto;
`;

const TextBlock = styled.View`
  padding-left: 20px;
`;

const Title = styled.Text`
  font-weight: 500;
  font-size: 16px;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  line-height: 21px;
  color: #767676;
`;

function SortCard({url, title, subTitle}: SortCardProps) {
  return (
    <Block>
      <ImageBlock>
        <Image source={url} />
      </ImageBlock>
      <TextBlock>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TextBlock>
    </Block>
  );
}

export default SortCard;
