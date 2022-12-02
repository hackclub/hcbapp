import { SafeAreaView, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import SigIn from "./screens/SigIn";

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <View>
          <SigIn />
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}
