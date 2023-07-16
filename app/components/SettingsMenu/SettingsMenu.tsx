import React from 'react';
import {View} from 'react-native';

import {SettingsMenuItem} from './SettingsMenuItem';
import {SettingsItems} from '../../data/settingsMenuItems';
import {removeSecureValue} from '../../utils';
import {useAppDispatch} from '../../hooks';
import {globalLogOut} from '../../store/slices/auth';
import styles from './styles';

export function SettingsMenu({navigation}: any): JSX.Element {
  const dispatch = useAppDispatch();

  const handleLogOut = async () => {
    dispatch(globalLogOut());
    await removeSecureValue('accessToken');
    await removeSecureValue('refreshToken');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.menuContainer}>
      {SettingsItems.map((item, index) => (
        <SettingsMenuItem
          key={item.id}
          title={item.title}
          icon={item.icon}
          color={item.color}
          style={index !== SettingsItems.length - 1 && styles.borderBottom}
          onPress={
            index === SettingsItems.length - 1 ? handleLogOut : undefined
          }
        />
      ))}
    </View>
  );
}
