import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {Icon} from '@app/components';
import {colors} from '@app/theme';
import styles from './styles';

export interface SettingsMenuItemProps {
  title: string;
  icon: string;
  color: string;
  style: {};
  onPress: () => void;
}

export function SettingsMenuItem({
  title,
  icon,
  color,
  style,
  onPress,
}: SettingsMenuItemProps): JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.menuItemContainer, style]}
      onPress={onPress}>
      <View style={styles.titleContainer}>
        <View style={[styles.icon, {backgroundColor: color}]}>
          <Icon name={icon} color={colors.white} size={14} />
        </View>
        <Text style={styles.titleText}>{title}</Text>
      </View>
      <Icon name="arrow-right" size={14} color={colors.darkGray} />
    </TouchableOpacity>
  );
}
