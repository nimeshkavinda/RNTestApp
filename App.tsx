import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {store} from './app/store/store';
import {Provider} from 'react-redux';

import NavigationStack from '@app/routes';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationStack />
      </SafeAreaProvider>
    </Provider>
  );
}
