import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

const HomeScreen = () => {
	const tw = useTailwind();
	return (
		<SafeAreaView>
			<View style={tw("mt-10")}>
				<Text
					style={tw("text-center text-[24px] font-extrabold text-[#686666]")}
				>
					WELCOME TO
				</Text>
				<Text style={tw("text-center text-red-500 font-extrabold text-[42px]")}>
					Hack Club Bank
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
