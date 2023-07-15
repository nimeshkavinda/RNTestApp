import React from 'react';
import {View, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {HomeStackParamList} from '../../routes/HomeStack';

type Props = NativeStackScreenProps<HomeStackParamList, 'Profile'>;

const Profile = ({}: Props) => {
  return (
    <View>
      <Text>Profile page</Text>
    </View>
  );
};

export default Profile;
