import React from 'react';
import {View, Text} from 'react-native';

import NotFoundImg from '@proj/assets/undraw_taken_re_yn20.svg';
import styles from './styles';

export function NotFound(): JSX.Element {
  return (
    <View style={styles.container}>
      <NotFoundImg width={280} height={250} />
      <Text style={styles.text}>Page not found</Text>
    </View>
  );
}
