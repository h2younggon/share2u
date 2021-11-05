import styled from '@emotion/native';
import React from 'react';
import {Text} from 'react-native';

function ChatScreen() {
  return (
    <Container>
      <Text>ChatScreen</Text>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ChatScreen;
