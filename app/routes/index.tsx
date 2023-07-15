import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreensStack from '../../app/routes/HomeStack';
import AuthScreensStack from '../../app/routes/AuthStack';

function NavigationStack() {
  const renderContent = () => {
    const loggedIn = true;

    if (loggedIn) {
      return <HomeScreensStack />;
    }
    return <AuthScreensStack />;
  };

  return <NavigationContainer>{renderContent()}</NavigationContainer>;
}

export default NavigationStack;
