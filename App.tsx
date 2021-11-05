import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTab from './src/components/BottomTab';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView>
          <StatusBar />
        </SafeAreaView>
        <BottomTab />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
