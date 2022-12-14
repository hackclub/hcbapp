import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import General from "./SettingsScreen/General";
import Previews from "./SettingsScreen/Previews";
import Security from "./SettingsScreen/Security";

const Tab = createMaterialTopTabNavigator();

const Setting = () => {
  const tw = useTailwind();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#EC3750",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIndicatorStyle: {
          backgroundColor: "#EC3750",
        },
      }}
    >
      <Tab.Screen name="General" component={General} />
      <Tab.Screen name="Previews" component={Previews} />
      <Tab.Screen name="Security" component={Security} />
    </Tab.Navigator>
  );
};

export default Setting;
