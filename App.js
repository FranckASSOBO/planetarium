// on importe useFont
import { useFonts } from "expo-font";
// On importe le container de la pile de navigation
import { NavigationContainer } from "@react-navigation/native";
// ON importe les écrans ou navigation
import MainStack from "./src/navigations/MainStack";
import LoadingScreen from "./src/screens/LoadingScreen";

export default function App() {
  // On charge les fonts
  let [ fontsLoaded] = useFonts({
    'openSansMedium': require('./assets/fonts/OpenSans-Medium.ttf'),
    'openSansLight': require('./assets/fonts/OpenSans-Light.ttf'),
    'Meow': require('./assets/fonts/MeowScript-Regular.ttf'),
    'Nunito': require('./assets/fonts/Nunito-Regular.ttf'),
  });
  // On Vérifie si les fonts sont chargées
  if(!fontsLoaded) {
    return <LoadingScreen />
  }
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

