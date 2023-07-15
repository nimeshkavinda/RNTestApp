import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NotFound} from '@app/components';
import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NotFound />
    </SafeAreaView>
  );
};

export default Home;
