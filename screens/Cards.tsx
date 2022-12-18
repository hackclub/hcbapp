import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";

const Cards = () => {
  const tw = useTailwind();

  const [cards] = useState(0);

  return (
    <SafeAreaView>
      <View style={tw("mt-5 px-5  border-b border-[#e0e6ed] pb-3")}>
        <View style={tw("flex-row items-center")}>
          <Text style={tw("text-[42px] font-bold")}>Cards</Text>
          <Text
            style={tw(
              "font-bold  text-[20px] bg-black ml-2 pl-2 pr-2 text-white rounded-full"
            )}
          >
            {cards}
          </Text>
        </View>
        <Pressable
          onPress={() => {}}
          style={tw("mt-5 bg-black pl-[20px] pr-[20px] rounded-[8px] py-3")}
        >
          <Text style={tw("text-[20px] text-white text-center ")}>
            Add to Wallet{" "}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Cards;
