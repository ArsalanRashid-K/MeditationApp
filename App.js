import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Ionicons from "@expo/vector-icons/Ionicons";

import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

import { useFonts } from "expo-font";
import { Meditate } from "./src/Screens/meditate";
import { Sleep } from "./src/Screens/sleep";
import { COLORS } from "./src/Utility/theme";
import { TabNav } from "./src/Components/Tab";


export default function App() {
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </View>
  );
}

// <View style={{ flex: 1 }}>
//       <Sleep />
//       <StatusBar style="dark" />
//     </View>

// screenOptions={{ headerShown: false }}
// initialRouteName="Meditate"
// sceneContainerStyle={{
//   backgroundColor: "#d1dfff",
//   margin: 10,
//   borderRadius: 20,
//   style: { backgroundColor: '#ffffff', borderRadius: 30, margin: 24, height: 72, width: '90%' },
//   labelStyle: { fontSize: 14 }
// }}
