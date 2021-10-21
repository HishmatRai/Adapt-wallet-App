import React from 'react';
import Navigation from './src/config/navigation';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font'
export default function App(props) {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./src/Roboto/Roboto-Bold.ttf"),
    "Roboto-Regular": require("./src/Roboto/Roboto-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Navigation />
  }
}
