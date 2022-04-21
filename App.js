import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const Sleep=()=>{
  return( 
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Profile Screen</Text></View>
      )
}

const m=()=>{ return( 
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Prnicreen</Text></View>
      )}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Sleep} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


