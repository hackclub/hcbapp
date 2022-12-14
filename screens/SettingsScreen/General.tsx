import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

const General = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={tw("mt-5")}>
        <Text
          style={tw(
            "text-[28px] font-bold border-b border-[#e0e6ed] px-5 pb-3"
          )}
        >
          Account details
        </Text>
      </View>
      <View style={tw("mt-5 px-5")}>
        <View>
          <Text>Full name</Text>

          <View>
            <TextInput
              style={tw("border py-2 mt-2 rounded-md pl-5 border-[#e0e6ed]")}
              placeholder="John Doe"
            />
          </View>

          <Text style={tw("mt-5")}>Mobile phone number</Text>

          <View>
            <TextInput
              style={tw("border py-2 mt-2 rounded-md pl-5 border-[#e0e6ed]")}
              placeholder="John Doe"
              keyboardType="number-pad"
            />
          </View>

          <Text style={tw("mt-5")}>Birthday</Text>
          <Text style={tw("text-[#e0e6ed]")}>Used for card issuing</Text>

          <View>
            <TextInput
              style={tw("border py-2 mt-2 rounded-md pl-5 border-[#e0e6ed]")}
              placeholder="John Doe"
              keyboardType="number-pad"
            />
          </View>

          <Text style={tw("mt-5")}>Email</Text>

          <View>
            <TextInput
              style={tw("border py-2 mt-2 rounded-md pl-5 border-[#e0e6ed]")}
              placeholder="John Doe"
            />
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default General;
