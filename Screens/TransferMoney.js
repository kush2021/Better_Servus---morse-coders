/* The TransferMoney.js file contains the code for transferring money between accounts. */

/* Import statements. */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Icon } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

/**
 * The TransferMoney() function is called when the internal transfer screen is opened.
 * @returns The screen to display.
 */
export default function TransferMoney() {
    const navigation = useNavigation();

    /* Return the screen. */
    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-left" type="feather" size="25" />
            </Pressable>
            <Pressable
                style={styles.individualContainer}
                onPress = {() => navigation.navigate("Transfer Money", {screen: "Choose Account Screen"})}
            >
                <Text style={styles.text}>From</Text>
            </Pressable>
            <Pressable
                style={styles.individualContainer}
                onPress = {() => navigation.navigate("Transfer Money", {screen: "Choose Account Screen"})}
            >
                <Text style={styles.text}>To</Text>
            </Pressable>
            <Pressable style={styles.individualContainer}>
                <TextInput
                    style = {styles.text}
                    placeholder = "Amount"
                    keyboardType="decimal-pad"
                >
                </TextInput>
            </Pressable>
            <Pressable style={styles.confirmButton}>
                <Text style = {styles.bigText}>Confirm</Text>
            </Pressable>
        </SafeAreaView>
    );
}

/* The styles used. */
const styles = StyleSheet.create({
    bigText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff"
    },
    confirmButton: {
        backgroundColor: "#3070B6",
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#171717",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        height: 65,
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    individualContainer: {
        backgroundColor: "white",
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        height: 65,
        justifyContent: "center"
    },
    button: {
        padding: 20,
        borderRadius: 4,
        alignItems: "flex-start",
    },
    text: {
        fontSize: 16,
        color: "#D3D3D3",
        fontWeight: "600"
    }
});