import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

const SigIn = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView style={tw("mt-10")}>
      <View>
        <View style={tw("items-center justify-center mt-[50px]")}>
          <Image source={require("../assets/logo.png")} />
        </View>
        <View>
          <Text
            style={tw(
              "text-[24px] font-bold text-[#686666] text-center mt-[64px]"
            )}
          >
            SIGN IN TO
          </Text>
          <Text
            style={tw("text-center text-red-500 font-extrabold text-[45px]")}
          >
            Hack Club{"\n"} Bank
          </Text>
          <View style={tw("mt-5 px-5")}>
            <Text style={tw("text-[19px]")}>Enter your email…</Text>
            <View
              style={tw("border mt-2 py-2 pl-2 rounded-[3px] border-[#D4D2D2]")}
            >
              <TextInput placeholder="Email address" />
            </View>
          </View>
          <Pressable
            style={tw("mt-5 bg-[#338EDA] ml-[70px] mr-[70px] rounded-[8px]")}
          >
            <Text
              style={tw(
                "text-center font-semibold text-[20px] text-white py-2"
              )}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SigIn;
