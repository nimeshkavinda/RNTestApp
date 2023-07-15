import React from 'react';
import {View, TouchableOpacity, StatusBar, Text, Linking} from 'react-native';

import {Icon} from '@app/components';
import {colors} from '@app/theme';
import useLocation from '../../hooks/useLocation';

import styles from './styles';

export interface HeaderWrapperProps {}

export function HeaderWrapper({...rest}: HeaderWrapperProps): JSX.Element {
  const {hasPermission, handlePermissionRequest, location} = useLocation();
  const {
    coords: {latitude, longitude},
  } = location;

  const getPermission = () => {
    if (hasPermission !== 'granted') {
      handlePermissionRequest();
    } else {
      Linking.openSettings();
    }
  };

  return (
    <View style={styles.headerContainer} {...rest}>
      <StatusBar animated barStyle="dark-content" backgroundColor="#fff" />
      <TouchableOpacity
        onPress={getPermission}
        disabled={hasPermission === 'granted'}>
        <Text style={styles.locationText}>
          {latitude && longitude
            ? `Lat: ${latitude} Lng: ${longitude}`
            : 'City Location'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.notificationButton}>
        <Icon name="bell-outline" size={18} color={colors.darkGray} />
      </TouchableOpacity>
    </View>
  );
}
