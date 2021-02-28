import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from './pages/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {SignIn} from './pages';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
