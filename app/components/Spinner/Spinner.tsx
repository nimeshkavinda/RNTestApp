import React from 'react';
import {ActivityIndicator, View, ViewStyle} from 'react-native';
import {colors} from '@app/theme';
import styles from './styles';

interface SpinnerProps {
  animating?: boolean;
  size?: 'small' | 'large';
  color?: string;
  style?: ViewStyle;
}

const Spinner: React.FC<SpinnerProps> = ({
  animating = true,
  size = 'large',
  color = colors.darkGray,
  style,
}) => {
  return (
    <View style={[styles.spinnerContainer, style]}>
      <ActivityIndicator animating={animating} size={size} color={color} />
    </View>
  );
};

export default Spinner;
