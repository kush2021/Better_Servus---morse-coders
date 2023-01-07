import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Accounts from "./Screens/Accounts";
import FaceID from "./Screens/FaceID";
import ContactUs from "./Screens/ContactUs";
import ChangePassword from "./Screens/ChangePassword";
import FeedbackSupport from "./Screens/FeedbackSupport";
import BranchATM from "./Screens/BranchATM";
import More from "./Screens/More";
import { Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import MoveMoney from './Screens/MoveMoney';
import { useFonts } from 'expo-font';
import SingleAccount from './Screens/SingleAccount';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

    const [loaded] = useFonts({
        SFcompactRegular: require('./assets/fonts/SF-Compact-Text-Regular.otf'),
        SFcompactSemibold: require('./assets/fonts/SF-Compact-Text-SemiboldItalic.otf'),
    });
      
    if (!loaded) {
        return null;
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerStyle: { backgroundColor: "#3070B6" },
                    headerTitleStyle: { color: "#fff" },
                    headerTintColor: "#fff",
                }}
                drawerContent={(props) => <CustomDrawerContent {...props} />}
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
                <Drawer.Screen
                    name="Move Money"
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
                        ),
                    }}
                />
                <Drawer.Screen
                    name="More"
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
                        ),
                    }}
                />
                <Drawer.Screen name="Account"
                component={SingleAccount} 
                options={{
                    drawerItemStyle: {height: 0}
                }}/>
                <Drawer.Screen name="Face ID"
                component={FaceID} 
                options={{
                    drawerItemStyle: {height: 0}
                }}/>
                <Drawer.Screen name="Change Password"
                component={ChangePassword} 
                options={{
                    drawerItemStyle: {height: 0}
                }}/>
                <Drawer.Screen name="Contact Us"
                component={ContactUs} 
                options={{
                    drawerItemStyle: {height: 0}
                }}/>
                <Drawer.Screen name="Feedback & Support"
                component={FeedbackSupport} 
                options={{
                    drawerItemStyle: {height: 0}
                }}/>
                <Drawer.Screen name="Branch & ATM Locations"
                component={BranchATM} 
                options={{
                    drawerItemStyle: {height: 0}
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