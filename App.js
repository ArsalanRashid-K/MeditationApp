import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import { useFonts } from "expo-font";
import { Meditate } from "./src/Screens/meditate";
import { Sleep } from "./src/Screens/sleep";

const Tab = createBottomTabNavigator();

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
      <Sleep />
      <StatusBar style="dark" />
    </View>
  );
}
