import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {HomeStackParamList} from '../../routes/HomeStack';
import {Header, ProfileImg, SettingsMenu, Spinner} from '@app/components';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {getProfile} from '../../store/slices/auth';
import styles from './styles';

type Props = NativeStackScreenProps<HomeStackParamList, 'Profile'>;

const Profile = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {getProfileStatus, user} = useAppSelector(state => state.auth);

  console.log('userData', user);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(getProfile());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      {getProfileStatus === 'loading' && <Spinner />}
      {user && (
        <ProfileImg
          imgUrl={user.avatar ? user.avatar : 'https://i.pravatar.cc/100'}
          name={user.name}
          role={user.role}
        />
      )}
      <SettingsMenu navigation={navigation} />
    </SafeAreaView>
  );
};

export default Profile;
