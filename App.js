import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Footer from "./Components/Footer";
import Accounts from "./Screens/Accounts";
import More from "./Screens/More";
import MoveMoney from "./Screens/MoveMoney";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{ headerStyle: { backgroundColor: "#3070B6" },
								headerTitleStyle: {color: "#fff"},
                                headerTintColor: "#fff"
                                }}>
                <Drawer.Screen name="Accounts" component={Accounts} />
                <Drawer.Screen name="Move Money" component={MoveMoney} />
                <Drawer.Screen name="More" component={More} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}