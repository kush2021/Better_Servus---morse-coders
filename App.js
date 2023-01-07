import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './Components/Footer';
import Accounts from './Screens/Accounts';
import More from './Screens/More';
import MoveMoney from './Screens/MoveMoney';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Accounts"
            component={Accounts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Move Money"
            component={MoveMoney}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="More"
            component={More}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
