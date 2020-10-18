import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './src/routes';

import{ Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';
import {useFonts } from 'expo-font';
export default function App() {
  const [ fontsLoaded ] = useFonts({
    Nunito_600SemiBold, 
    Nunito_700Bold, 
    Nunito_800ExtraBold,
  });
  if(!fontsLoaded) {
    return null;
  }

  return(
    <Routes />
  )  


}