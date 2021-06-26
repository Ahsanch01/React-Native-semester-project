import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FrontScreen from '../Screens/FrontScreen';
import KeyboardScreen from '../Screens/KeyboardScreen'
import MouseScreen from '../Screens/MouseScreen';
import MousePadScreen from '../Screens/MousepadScreen';
import HandsFreeScreen from '../Screens/HandsfreeScreen';
import HeadPhoneScreen from '../Screens/HeadphoneScreen';
import ChargerScreen from '../Screens/ChargerScreen';
import SingalItemScreen from '../Screens/singleitemScreen';
import UsbScreen from '../Screens/UsbScreen';

const Stack = createStackNavigator();

function forApp() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Items" component={FrontScreen} />
        <Stack.Screen name="Keyboard" component={KeyboardScreen} />
        <Stack.Screen name="Mouse" component={MouseScreen} />
        <Stack.Screen name="HeadPhone" component={HeadPhoneScreen} />
        <Stack.Screen name="HandsFree" component={HandsFreeScreen} />
        <Stack.Screen name="MousePad" component={MousePadScreen} />
        <Stack.Screen name="Charger" component={ChargerScreen} />
        <Stack.Screen name="Usb" component={UsbScreen} />
        <Stack.Screen name="Details" component={SingalItemScreen} />

      </Stack.Navigator>
    
  );
}

export default forApp;
