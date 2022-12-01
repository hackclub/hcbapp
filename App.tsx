import { SafeAreaView, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <View>
          <HomeScreen />
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}
