import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Error from '../screens/Error';

import {Icon} from '@app/components';
import {colors} from '@app/theme';

export type HomeStackParamList = {
  Services: undefined;
  Messages: undefined;
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
};

const HomeStack = createBottomTabNavigator<HomeStackParamList>();

const HomeScreensStack = () => {
  const renderIcon = (
    route: RouteProp<HomeStackParamList, keyof HomeStackParamList>,
    focused: boolean,
    color: string,
    size: number,
  ) => {
    const iconMap = {
      Services: focused ? 'file-document' : 'file-document-outline',
      Messages: focused ? 'message-text' : 'message-text-outline',
      Home: focused ? 'home-variant' : 'home-variant-outline',
      Cart: focused ? 'cart' : 'cart-outline',
      Profile: focused ? 'account' : 'account-outline',
    };

    const iconName = iconMap[route.name];

    return <Icon name={iconName} size={size} color={color} />;
  };

  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          renderIcon(route, focused, color, size),
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.darkGray,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopWidth: 1,
          borderTopColor: '#E9EDF4',
          height: 63,
          paddingTop: 8,
          paddingBottom: 12,
        },
      })}>
      <HomeStack.Screen
        name="Services"
        component={Error}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Messages"
        component={Error}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Cart"
        component={Error}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreensStack;
