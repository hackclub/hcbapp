import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import Cards from '../screens/Cards';
import Recipts from '../screens/Recipts';
import Settings from '../screens/Setting';
import { useTailwind } from "tailwind-rn";

const Stack = createStackNavigator();
const Navigation = () => {
  const tw = useTailwind();
  return (
    <Stack.Navigator style={tw("flex")}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cards" component={Cards} />
      <Stack.Screen name="Recipts" component={Recipts} />
      <Stack.Screen name="Settings" component={Settings} />

    </Stack.Navigator>
  )
}

export default Navigation