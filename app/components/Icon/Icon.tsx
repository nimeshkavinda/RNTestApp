import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IconWrapperProps {
  size: number;
  color: string;
  name: string;
  onPress?: () => void;
}

export const IconWrapper = ({
  size,
  color,
  name,
  onPress,
}: IconWrapperProps): JSX.Element => {
  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Icon size={size} color={color} name={name} />
      </TouchableOpacity>
    );
  }
  return <Icon size={size} color={color} name={name} />;
};
