import React from 'react';
import {View, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {HomeStackParamList} from '../../routes/HomeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

const Home = ({}: Props) => {
  return (
    <View>
      <Text>Home page</Text>
    </View>
  );
};

export default Home;
