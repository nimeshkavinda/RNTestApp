import React, {useState} from 'react';
import {View, Text, StatusBar, Alert} from 'react-native';
import {useForm} from 'react-hook-form';
import {SafeAreaView} from 'react-native-safe-area-context';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthStackParamList} from '../../routes/AuthStack';
import {Button, TextInput} from '@app/components';
import LoginVector from '@proj/assets/undraw_login_re_4vu2.svg';
import {useAppDispatch} from '../../hooks';
import {login} from '../../store/slices/auth';
import {setSecureValue} from '../../utils';
import rules from './rules';
import styles from './styles';

type Props = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({}: Props) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {control, handleSubmit} = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: {email: string; password: string}) => {
    const payload = {
      email: data.email,
      password: data.password,
    };

    setLoading(true);
    dispatch(login(payload))
      .then((res: {payload: any; error?: {message?: string}}) => {
        let resPayload = res.payload;
        console.log('payload: ', res);
        if (resPayload) {
          const accessTRes = setSecureValue(
            'accessToken',
            res.payload.access_token,
          );
          console.log('accessTokenStored: ', accessTRes);
          const refreshTRes = setSecureValue(
            'refreshToken',
            res.payload.refresh_token,
          );
          console.log('refreshTokenStored: ', refreshTRes);
          setLoading(false);
        } else if (res.error) {
          setLoading(false);
          Alert.alert('Login failed', res.error.message, [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
      })
      .catch((err: any) => {
        setLoading(false);
        console.log('login failed: ', err);
        Alert.alert('Login failed', err, [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      });
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
