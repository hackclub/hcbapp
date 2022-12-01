import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

const HomeScreen = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <View style={tw("mt-10")}>
        <Text style={tw("text-center text-red-500 font-extrabold text-[30px]")}>
          Hack Club Bank
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
