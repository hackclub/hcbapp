import { SafeAreaView, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import EmailCodeVerification from "./screens/EmailCodeVerification";
import utilities from "./tailwind.json";


export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <SafeAreaView>
        <View>
         <EmailCodeVerification />
        </View>
      </SafeAreaView>
    </TailwindProvider>
  );
}
