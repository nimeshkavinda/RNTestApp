import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useForm} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthStackParamList} from '../../routes/AuthStack';
import {Button, TextInput} from '@app/components';
import LoginVector from '@proj/assets/undraw_login_re_4vu2.svg';
import rules from './rules';
import styles from './styles';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({navigation}: Props) => {
  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: {email: string; password: string}) =>
    console.log('Login data: ', data);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.imgContainer}>
        <LoginVector height={150} width={250} />
      </View>
      <Text style={styles.headingText}>Welcome</Text>
      <TextInput
        control={control}
        name="email"
        rules={rules.email}
        placeholder="Emails"
        autoCapitalize="none"
        icon="email-outline"
      />
      <TextInput
        control={control}
        name="password"
        rules={rules.password}
        placeholder="Password"
        secureTextEntry
        icon="lock-outline"
      />
      <Button
        label="Login"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
      />
    </SafeAreaView>
  );
};

export default Login;
