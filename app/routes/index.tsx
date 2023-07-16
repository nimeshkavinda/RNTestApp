import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreensStack from '../../app/routes/HomeStack';
import AuthScreensStack from '../../app/routes/AuthStack';
import {useAppSelector} from '../hooks';
import {getSecureValue} from '../utils';

function NavigationStack() {
  const loggedIn = useAppSelector(state => state.auth.loggedIn);
  const accessToken = useAppSelector(state => state.auth.accessToken);
  const [persistedToken, setPersistedToken] = useState<string | false>();

  useEffect(() => {
    const retrieveToken = async () => {
      try {
        const accToken = await getSecureValue('accessToken');
        console.log('accToken: ', accToken);
        const refreshToken = await getSecureValue('refreshToken');
        console.log('refToken: ', refreshToken);
        setPersistedToken(accToken);
      } catch (error) {
        console.log('Error retrieving token:', error);
      }
    };

    retrieveToken();
  }, [loggedIn, accessToken, persistedToken]);

  const renderContent = () => {
    if (loggedIn || accessToken || persistedToken) {
      return <HomeScreensStack />;
    }
    return <AuthScreensStack />;
  };

  return <NavigationContainer>{renderContent()}</NavigationContainer>;
}

export default NavigationStack;
