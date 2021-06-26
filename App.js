
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import ForApp from './components/Navigation/NavigationFile';

export default function App() {
  return (
    <NavigationContainer>
    <View style={styles.Screen}>
      <ForApp />
    </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 Screen:{
   flex:1,
   
 }
  
});
