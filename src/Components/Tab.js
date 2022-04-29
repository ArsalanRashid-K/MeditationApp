import * as React from "react";
import { Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as Haptics from "expo-haptics";

import { Sleep } from "../Screens/sleep";
import { Meditate } from "../Screens/meditate";

const Tab = createMaterialBottomTabNavigator();

const a = () => {
  return (
    <View>
      <Text>RBBSRGwr</Text>
    </View>
  );
};

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
          } else if (route.name === "About") {
            iconName = focused
              ? "rocket-sharp"
              : "rocket-outline";
          } else if (route.name === "Meditate") {
            iconName = focused
              ? "snow-sharp"
              : "snow-outline";
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
          tabBarColor: "#ffb3c1",
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
          
          tabBarColor: "#133c55",
        }}
        listeners={() => ({
          tabPress: () => {
            Haptics.selectionAsync();
          },
        })}
      />

      <Tab.Screen
        name="About"
        component={a}
        options={{
          tabBarColor: "#ffb3c1",
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
