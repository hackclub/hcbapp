import { SafeAreaView, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import SigIn from "./screens/SigIn";
import utilities from "./tailwind.json";


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
