import styled from '@emotion/native';
import React from 'react';
import {Text} from 'react-native';

function ProfileScreen() {
  return (
    <Container>
      <Text>ProfileScreen</Text>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default ProfileScreen;
