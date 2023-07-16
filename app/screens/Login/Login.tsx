import React, {useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {useForm} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthStackParamList} from '../../routes/AuthStack';
import {Button, TextInput} from '@app/components';
import LoginVector from '@proj/assets/undraw_login_re_4vu2.svg';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {login} from '../../store/slices/auth';
import {setSecureValue} from '../../utils';
import rules from './rules';
import styles from './styles';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({}: Props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const {loginStatus} = useAppSelector(state => state.auth);

  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: {email: string; password: string}) => {
    const payload = {
      email: data.email,
      password: data.password,
    };
    try {
      setLoading(true);
      const res = await dispatch(login(payload));
      console.log('success payload: ', res.payload);
      if (loginStatus === 'succeeded') {
        await setSecureValue('accessToken', res.payload.access_token);
        // await setSecureValue('refreshToken', res.payload.refresh_token);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log('login fail: ', error);
    }
  };

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
        label={loading ? 'Loading...' : 'Login'}
        disabled={loading}
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
      />
    </SafeAreaView>
  );
};

export default Login;
