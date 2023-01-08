/* The App.js will contain the initialization code for the Better Servus app. */

/* Import statements. */
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute, NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleAccount from "./Screens/SingleAccount";
import TransferMoney from "./Screens/TransferMoney"
import { useFonts } from 'expo-font';
import { signOut } from "firebase/auth";
import { StyleSheet, View } from "react-native";
import { Icon, Text } from "react-native-elements";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import "./firebase";
import { auth } from "./firebase";
import Accounts from "./Screens/Accounts";
import BranchATM from "./Screens/BranchATM";
import ChangePassword from "./Screens/ChangePassword";
import ContactUs from "./Screens/ContactUs";
import FaceID from "./Screens/FaceID";
import FeedbackSupport from "./Screens/FeedbackSupport";
import LoginScreen from "./Screens/LoginScreen";
import More from "./Screens/More";
import MoveMoney from './Screens/MoveMoney';
import ChooseAccounts from "./Screens/ChooseAccounts";

/**
 * The getHeaderTitle() function will get the title of the current screen.
 * @param {*} route The current route.
 * @returns The title.
 */
function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route);
  switch(routeName) {
    case "Accounts":
      return "My Accounts";
    case "Account":
      return "View Account";
    case "Move Money":
      return "Move Money";
    case "Transfer Money":
      return "Transfer Money";
    case "Branch ATM Page":
        return "Find Locations";
    case "ChangePassword Page":
        return "Change Password";
    case "Contact Us Page":
        return "Contact Us";
    case "Face ID Page":
        return "Face ID";
    case "Feedback Support Page":
        return "Feedback & Support";
  }
}

/**
 * The CustomDrawerContent() function defines how the drawer navigation should behave,
 * @param {*} props The properties of the drawer.
 * @returns The drawer object.
 */
function CustomDrawerContent(props) {
  const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always", horizontal: "never" }}>
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

/* Create navigation objects. */
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

/* Create a nested account stack. */
function AccountStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Accounts" component={Accounts} />
      <Stack.Screen name="Account" component={SingleAccount} />
    </Stack.Navigator>
  )
}

/* Create a nested money transfer stack. */
function MoveMoneyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Move Money Initial" component={MoveMoney} />
      <Stack.Screen name="Transfer Money" component={InternalTransferStack} />
    </Stack.Navigator>
  )
}

/* Create a doubly-nested internal transfer stack. */
function InternalTransferStack() {
    return (
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen
                name = "Internal Transfer Screen"
                component = {TransferMoney}
            />
            <Stack.Screen
                name = "Choose Account Screen"
                component = {ChooseAccounts}
            />
        </Stack.Navigator>
    )
}

/* Create a nested more options stack. */
function MoreStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="More Options Page" component={More} />
            <Stack.Screen name="Branch ATM Page" component={BranchATM} />
            <Stack.Screen name="Change Password Page" component={ChangePassword} />
            <Stack.Screen name="Contact Us Page" component={ContactUs} />
            <Stack.Screen name="Face ID Page" component={FaceID} />
            <Stack.Screen name="Feedback Support Page" component={FeedbackSupport} /> 
        </Stack.Navigator>
    )
}

/**
 * The App() function is called when the app is launched.
 * @returns The screens to display.
 */
export default function App() {
    const [loaded] = useFonts({
        SFcompactRegular: require('./assets/fonts/SF-Compact-Text-Regular.otf'),
        SFcompactSemibold: require('./assets/fonts/SF-Compact-Text-Semibold.otf'),
    });
    if (!loaded) {
        return null;
    }

    /* Return the screens. */
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
                    name="My Accounts"
                    component={AccountStack}
                    options={({ route }) => ({
                        headerTitle: getHeaderTitle(route),
                        drawerIcon: () => (
                            <Icon
                                name="dollar-sign"
                                type="feather"
                                color="#ABAFBA"
                                size="15"
                                style={styles.icon}
                            />
                        ),
                    })}
                />
                <Drawer.Screen
                    name="Move Money"
                    component={MoveMoneyStack}
                    options={({ route }) => ({
                        headerTitle: getHeaderTitle(route),
                        drawerIcon: () => (
                            <Icon
                                name="refresh-cw"
                                type="feather"
                                color="#ABAFBA"
                                size="15"
                                style={styles.icon}
                            />
                        ),
                    })}
                />
                <Drawer.Screen
                    name="More"
                    component={MoreStack}
                    options={({route}) => ({
                        headerTitle: getHeaderTitle(route),
                        drawerIcon: () => (
                              <Icon
                                  name="plus"
                                  type="feather"
                                  color="#ABAFBA"
                                  size="15"
                                  style={styles.icon}
                              />
                          ),
                    })}
                />
                <Drawer.Screen name="Account"
                  component={SingleAccount} 
                  options={{
                    drawerItemStyle: {height: 0},
                  }}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

/* The styles used. */
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