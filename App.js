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
          <Stack.Navigator
              screenOptions={{ headerStyle: { backgroundColor: "#3070B6" }}}>
              <Stack.Screen name="Accounts" component={Accounts} />
              <Stack.Screen name="Move Money" component={MoveMoney} />
              <Stack.Screen name="More" component={More} />
          </Stack.Navigator>
          <Footer />
      </NavigationContainer>
  );
}