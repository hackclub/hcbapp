import { View, Text, SafeAreaView, Pressable, Switch } from "react-native";
import React, { useState } from "react";
import { useTailwind } from "tailwind-rn";

const Setting = () => {
  const tw = useTailwind();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView>
      <View style={tw("mt-5 px-5")}>
        <View style={tw("flex flex-row items-center mt-5 justify-between w-[95%]")}>
          <Pressable>
            <Text style={tw("text-[18px]")}>Dark Mode</Text>
          </Pressable>

          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <Pressable style={tw("mt-5")}>
          <Text style={tw("text-[18px]")}>ChangeLogs</Text>
        </Pressable>

        <Pressable style={tw("mt-10")}>
          <Text style={tw("text-[18px]")}>Notifications</Text>
        </Pressable>

        <Pressable style={tw("mt-10")}>
          <Text style={tw("text-[18px]")}>Logout</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Setting;
