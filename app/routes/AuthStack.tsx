import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '@app/screens/Login';

export type AuthStackParamList = {
  Login: undefined;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthScreensStack = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
    </AuthStack.Navigator>
  );
};

export default AuthScreensStack;
