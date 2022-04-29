import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

import { Sleep } from "../Screens/sleep";
import { Meditate } from "../Screens/meditate";

const Tab = createMaterialBottomTabNavigator();

export const TabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Meditate"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Sleep") {
            iconName = focused
              ? "md-cloudy-night-sharp"
              : "md-cloudy-night-outline";
          } else if (route.name === "Meditate") {
            iconName = focused
              ? "ios-color-filter-sharp"
              : "color-filter-outline";
          }

          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
      shifting={true}
    >
      <Tab.Screen
        name="Meditate"
        component={Meditate}
        options={{
          tabBarColor: "#e76f51",
        }}
        listeners={() => ({
          tabPress: () => {
            Haptics.selectionAsync();
          },
        })}
      />
      <Tab.Screen
        name="Sleep"
        component={Sleep}
        options={{
          tabBarColor: "#001219",
        }}
        listeners={() => ({
          tabPress: () => {
            Haptics.selectionAsync();
          },
        })}
      />
    </Tab.Navigator>
  );
};
