import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Signup,
  SignIn,
  Verification,
  Wallet,
  Contacts,
  Profile,
  Receive,
  Setting,
  Chat,
  Transfer,
  SuccessMessage,
  Inbox,
  Notification,
  Balance,
  PriceChart
} from './../../screens'
const Stack = createNativeStackNavigator();
function Navigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} /> */}
        <Stack.Screen name="PriceChart" component={PriceChart} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Contacts" component={Contacts} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Receive" component={Receive} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Setting" component={Setting} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Transfer" component={Transfer} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="SuccessMessage" component={SuccessMessage} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Inbox" component={Inbox} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="Balance" component={Balance} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;