import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text} from 'react-native';
import styles from './styles';

export interface ButtonWrapperProps extends TouchableOpacityProps {
  label: string;
}

export function ButtonWrapper({
  label,
  style,
  ...rest
}: ButtonWrapperProps): JSX.Element {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.6}
      {...rest}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}
