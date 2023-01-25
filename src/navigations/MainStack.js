import { createStackNavigator } from '@react-navigation/stack';
// Instanciation de la pile de navigation
const Stack = createStackNavigator();
// On importe les écrans
import OpenScreen from '../screens/OpenScreen';
import TabNavigator from './TabNavigator';
// On exporte la pile de navigation
export default function MainStack(){
    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OpenScreen" component={OpenScreen} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    );
}