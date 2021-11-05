import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WishScreen from '../screens/WishScreen';
import CalendarScreen from '../screens/CalendarScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import styled from '@emotion/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {midday} from '../lib/palette';
// bottom tab;
const Tab = createBottomTabNavigator();

function BottomTab() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="홈"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {fontSize: 12},
        tabBarActiveTintColor: midday,
        tabBarStyle: {
          height: 91 + insets.bottom,
        },
        tabBarIcon: ({focused}) => {
          let icon: any;

          if (route.name === '홈') {
            icon = focused
              ? require('../assets/icons/tab/home_active.png')
              : require('../assets/icons/tab/home.png');
          } else if (route.name === '위시리스트') {
            icon = focused
              ? require('../assets/icons/tab/wish_active.png')
              : require('../assets/icons/tab/wish.png');
          } else if (route.name === '캘린더') {
            icon = focused
              ? require('../assets/icons/tab/calendar_active.png')
              : require('../assets/icons/tab/calendar.png');
          } else if (route.name === '채팅') {
            icon = focused
              ? require('../assets/icons/tab/chat_active.png')
              : require('../assets/icons/tab/chat.png');
          } else if (route.name === '프로필') {
            icon = focused
              ? require('../assets/icons/tab/profile_active.png')
              : require('../assets/icons/tab/profile.png');
          }

          return (
            <ImageBlock>
              <Image source={icon} resizeMode="stretch" />
            </ImageBlock>
          );
        },
      })}>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="위시리스트" component={WishScreen} />
      <Tab.Screen name="캘린더" component={CalendarScreen} />
      <Tab.Screen name="채팅" component={ChatScreen} />
      <Tab.Screen name="프로필" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const ImageBlock = styled.View`
  width: 36px;
  height: 36px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export default BottomTab;
