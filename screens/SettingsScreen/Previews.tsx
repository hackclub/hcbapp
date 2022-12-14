import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useTailwind } from "tailwind-rn";

const Previews = () => {
  const tw = useTailwind();
  return (
    <SafeAreaView >
    <View style={tw("mt-5")}>
      <Text style={tw("text-center text-[28px] font-bold")}>No Preview Features</Text>
    </View>
    </SafeAreaView>
  )
}

export default Previews