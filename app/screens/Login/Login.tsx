import React from 'react';
import {View, Text} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthStackParamList} from '../../routes/AuthStack';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({}: Props) => {
  return (
    <View>
      <Text>Login page</Text>
    </View>
  );
};

export default Login;
