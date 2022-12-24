import * as React from "react";
import { TailwindProvider } from "tailwind-rn";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cards from "./screens/Cards";
import Recipts from "./screens/Recipts";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            headerTitleAlign: "center",
            tabBarActiveTintColor: "#EC3750",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: { fontSize: 15 },
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Cards" component={Cards} />
          <Tab.Screen name="Recipts" component={Recipts} />
        </Tab.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
