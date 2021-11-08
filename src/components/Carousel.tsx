import React, {useState} from 'react';
import styled from '@emotion/native';
import CarouselItem from './CarouselItem';

export type CarouselProps = {
  gap: number;
  offset: number;
  pages: any[];
  pageWidth: number;
};

function Carousel({gap, offset, pages, pageWidth}: CarouselProps) {
  const [page, setPage] = useState(0);

  const renderItem = ({item}: any) => {
    return (
      <CarouselItem
        item={item}
        style={{width: pageWidth, marginHorizontal: gap / 2}}
      />
    );
  };

  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };

  const IndicatorWrapper = styled.View`
    flex-direction: row;
    position: absolute;
    width: 100%;
    bottom: 61px;
    justify-content: center;
  `;

  const Indicator = styled.View<{focused: boolean}>`
    margin: 0;
    background-color: ${props => (props.focused ? '#AAAAAA' : '#dfdfdf')};
    width: 28px;
    height: 3px;
    border-radius: 3px;
  `;

  return (
    <Container>
      <Content
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{
          paddingHorizontal: offset + gap / 2,
        }}
        data={pages}
        decelerationRate="fast"
        horizontal
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <IndicatorWrapper>
        {Array.from({length: pages.length}, (_, i) => i).map(i => (
          <Indicator key={`indicator_${i}`} focused={i === page} />
        ))}
      </IndicatorWrapper>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  overflow: hidden;
  height: 560px;
`;

const Content = styled.FlatList`
  width: 100%;
  height: 100%;
`;

export default Carousel;
