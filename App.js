import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Accounts from "./Screens/Accounts";
import More from "./Screens/More";
import MoveMoney from "./Screens/MoveMoney";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";

function CustomDrawerContent(props) {
    return (
        <SafeAreaView
            style={{ flex: 1 }}
            forceInset={{ top: "always", horizontal: "never" }}
        >
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View>
                <DrawerItem
                    label={() => (
                        <Text style={styles.textSignOut}>
                            Sign Out
                        </Text>
                    )}
                    icon={() => (
                        <Icon
                            name="log-out"
                            type="feather"
                            size="15"
                            color="#000"
                        />
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "#3070B6" },
                    headerTitleStyle: { color: "#fff" },
                    headerTintColor: "#fff",
                }}
                drawerContent={(props) => <CustomDrawerContent {...props}/>}
            >
                <Drawer.Screen
                    name="Accounts"
                    component={Accounts}
                    options={{
                        drawerIcon: () => (
                            <Icon
                                name="dollar-sign"
                                type="feather"
                                color="#ABAFBA"
                                size="15"
                                style={styles.icon}
                            />
                        ),
                    }}
                />
                <Drawer.Screen name="Move Money" 
                component={MoveMoney} 
                options={{
                    drawerIcon: () => (
                        <Icon
                            name="refresh-cw"
                            type="feather"
                            color="#ABAFBA"
                            size="15"
                            style={styles.icon}
                        />
                    )
                }}/>
                <Drawer.Screen name="More"
                component={More} 
                options={{
                    drawerIcon: () => (
                        <Icon
                            name="plus"
                            type="feather"
                            color="#ABAFBA"
                            size="15"
                            style={styles.icon}
                        />
                    )
                }}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    icon: {
        paddingRight: 0,
        width: 15
    },
    textSignOut: {
        fontWeight: "bold",
        color: "black"
    }
});