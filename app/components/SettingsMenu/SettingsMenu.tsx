import React from 'react';
import {View} from 'react-native';

import {SettingsMenuItem} from './SettingsMenuItem';
import {SettingsItems} from '../../data/settingsMenuItems';
import styles from './styles';

export interface SettingsMenuProps {}

export function SettingsMenu({}: SettingsMenuProps): JSX.Element {
  return (
    <View style={styles.menuContainer}>
      {SettingsItems.map((item, index) => (
        <SettingsMenuItem
          key={item.id}
          title={item.title}
          icon={item.icon}
          color={item.color}
          style={index !== SettingsItems.length - 1 && styles.borderBottom}
        />
      ))}
    </View>
  );
}
