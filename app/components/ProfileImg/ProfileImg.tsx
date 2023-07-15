import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

export interface ProfileImgProps {
  imgUrl: string;
  name: string;
  role: string;
}

export function ProfileImg({imgUrl, name, role}: ProfileImgProps): JSX.Element {
  return (
    <View style={styles.profileImgContainer}>
      <Image
        style={styles.profileImg}
        resizeMode="cover"
        source={{uri: imgUrl}}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
}
