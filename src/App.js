import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Login} from './containers/screens';
import SplashScreen from 'react-native-splash-screen';
import {useEffect} from 'react/cjs/react.production.min';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Login />;
};

export default App;

const styles = StyleSheet.create({});
