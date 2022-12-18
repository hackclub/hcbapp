import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

const HomeScreen = ({}) => {
	const tw = useTailwind();
	return (
		<SafeAreaView >
			<View style={tw("mt-10")}>
			
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
