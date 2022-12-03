import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import { useTailwind } from "tailwind-rn";

const EmailCodeVerification = () => {
  const tw = useTailwind();
  const textInputRef = useRef(null);

  const maxlength = 4;
  const codeArray = new Array(maxlength).fill(0);
  const [logincode, setLoginCode] = useState("");

  const [inputFocus, setInputFocus] = useState(false);

  const CodeDigitInput = (values: any, index: any) => {
    const emptyInputChar = "";
    const digit = logincode[index] || emptyInputChar;

    return (
      <View
        key={index}
        style={tw(
          "border flex items-center justify-center w-[20%] ml-2 text-center py-4 rounded-[3px] border-[#B6B6B6]"
        )}
      >
        <Text>{digit}</Text>
      </View>
    );
  };

  const handleOnPress = () => {
    setInputFocus(true);
    textInputRef?.current;
  };

  const handleOnSubmitEditing = () => {
    setInputFocus(false);
  };
  return (
    <SafeAreaView style={tw("mt-10")}>
      <View>
        <View style={tw("items-center justify-center mt-[50px]")}>
          <Image source={require("../assets/logo.png")} />
        </View>
        <View>
          <Text
            style={tw(
              "text-center text-red-500 font-extrabold text-[42px] mt-[40px]"
            )}
          >
            Hack Club Bank
          </Text>
          <View style={tw("mt-2 px-5")}>
            <Text style={tw("text-[18px] font-medium text-[#686666]")}>
              We just sent a login code to {"\n"}
              test@gmail.com
            </Text>
            <View>
              <Text style={tw("text-[20px] mt-5")}>Enter your login code</Text>
              <View
                // @ts-ignore
                onPress={handleOnPress}
                style={tw("flex flex-row mt-3")}
              >
                {codeArray.map(CodeDigitInput)}

                <TextInput
                  style={tw("absolute text-center opacity-0 py-3 ml-2 w-[20%]")}
                  keyboardType="number-pad"
                  returnKeyType="done"
                  textContentType="oneTimeCode"
                  ref={textInputRef}
                  maxLength={maxlength}
                  value={logincode}
                  onChangeText={setLoginCode}
                  onSubmitEditing={handleOnSubmitEditing}
                />
              </View>
              <Text
                style={tw(
                  "text-center text-[18px] font-medium text-[#686666] mt-5"
                )}
              >
                Make sure to check spam folder
              </Text>
              <Pressable
                onPress={() => {}}
                style={tw(
                  "mt-5 bg-[#338EDA] ml-[70px] mr-[70px] rounded-[8px]"
                )}
              >
                <Text
                  style={tw(
                    "text-center font-semibold text-[20px] text-white py-2"
                  )}
                >
                  Submit
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EmailCodeVerification;
