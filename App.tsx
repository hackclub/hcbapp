import * as React from "react";
import { SafeAreaView, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import HomeScreen from "./screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Cards from "./screens/Cards";
import Recipts from "./screens/Recipts";
import Settings from "./screens/Setting";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
          <NavigationContainer>
            <Tab.Navigator screenOptions={{headerTitleAlign: 'center'}} 
            // @ts-ignore
            tabBarOptions={{
				activeTintColor: "#EC3750",
				inactiveTintColor: "gray",
				labelStyle: {
					fontSize: 15,
				},
			}}>
              <Tab.Screen name="Home" component={HomeScreen}/>
              <Tab.Screen name="Cards" component={Cards} />
              <Tab.Screen name="Recipts" component={Recipts} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
