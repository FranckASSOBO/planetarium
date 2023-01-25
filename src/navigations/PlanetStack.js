import { createStackNavigator } from "@react-navigation/stack";

// On instancie la pile de navigation
const Stack = createStackNavigator();
// On import les écrans
import PlanetScreen from "../screens/PlanetScreen";

export default function PlanetStack() {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: true, headerBackTitleVisible: false}}>
<Stack.Screen name="PlanetScreen" component={PlanetScreen} onPress={{ headerShown: false}} />
        </Stack.Navigator>
    );
}