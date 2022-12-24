import { View, Text, SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";
import React, { useState } from "react";

const Recipts = () => {
  const tw = useTailwind();

  const [recipts] = useState(0);
  return (
    <SafeAreaView style={tw("mt-5")}>
      <View style={tw("mt-5")}>
        <View
          style={tw("flex-row items-center pb-3")}
        >
          <Text style={tw("text-[36px] font-bold px-5")}>Recipts</Text>
          <Text
            style={tw(
              "font-bold text-[20px] bg-black text-white pl-2 pr-2 rounded-full"
            )}
          >
            {recipts}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Recipts;
