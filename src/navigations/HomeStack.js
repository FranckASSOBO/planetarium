import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import HomeDetail from "../screens/HomeDetail";
const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ gestureEnabled: true, headerBackTitleVisible: false}} >
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false}} />
            <Stack.Screen name="HomeDetail" component={HomeDetail} options={{ title: "Le Stytème Solaire"}} />
        </Stack.Navigator>
    );
}