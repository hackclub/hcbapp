import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import Organizations from "../components/Organizations";

const HomeScreen = ({}) => {
  const tw = useTailwind();
  return (
    <SafeAreaView style={tw("mt-5")}>
      <View style={tw("mt-5 px-3")}>
        <View style={tw("mt-5 pb-5")}>
          <Text style={tw("text-[26px] font-bold")}>My organizations</Text>
        </View>
			<View>
				<Organizations />
			</View>
        <Text>Recent Transactions</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
