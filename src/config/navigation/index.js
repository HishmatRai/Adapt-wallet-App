import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Signup,
  SignIn,
  Verification,
  Wallet
} from './../../screens'
const Stack = createNativeStackNavigator();
function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;