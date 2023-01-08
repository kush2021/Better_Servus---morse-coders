import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useFonts } from 'expo-font';
import { signOut } from "firebase/auth";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-elements";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import "./firebase";
import { auth } from "./firebase";
import Accounts from "./Screens/Accounts";
import LoginScreen from "./Screens/LoginScreen";
import More from "./Screens/More";
import MoveMoney from './Screens/MoveMoney';
import SingleAccount from './Screens/SingleAccount';

function CustomDrawerContent(props) {
  const navigation = useNavigation();
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
                    onPress={async () => {
                      await signOut(auth);
                      navigation.navigate("auth");
                    }}  
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
        SFcompactSemibold: require('./assets/fonts/SF-Compact-Text-Semibold.otf'),
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
                initialRouteName="auth"
            >
              <Drawer.Screen
                name="auth"
                component={LoginScreen}
                options={{
                  drawerItemStyle: { height: 0 },
                  swipeEnabled: false,
                  headerShown: false,
                }}

              />
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
                    drawerItemStyle: {height: 0},
                  }}
                />
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