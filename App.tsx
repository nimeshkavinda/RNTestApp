import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import NavigationStack from '@app/routes';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationStack />
    </SafeAreaProvider>
  );
}
