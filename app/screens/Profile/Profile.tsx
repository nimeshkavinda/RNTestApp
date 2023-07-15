import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header, ProfileImg, SettingsMenu} from '@app/components';
import styles from './styles';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ProfileImg
        imgUrl="https://i.pravatar.cc/100"
        name="John Doe"
        role="Member"
      />
      <SettingsMenu />
    </SafeAreaView>
  );
};

export default Profile;
