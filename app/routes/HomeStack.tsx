import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '@app/screens/Home';
import Profile from '@app/screens/Profile';

export type HomeStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const HomeStack = createBottomTabNavigator<HomeStackParamList>();

const HomeScreensStack = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Profile" component={Profile} />
    </HomeStack.Navigator>
  );
};

export default HomeScreensStack;
