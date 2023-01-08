import { useNavigation } from "@react-navigation/native";
import React, {useCallback, useState, useRef} from "react";
import {
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Icon } from "react-native-elements";
import {TextInput} from "react-native-gesture-handler";

export default function TransferMoney() {


    return (
        <SafeAreaView style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-left" type="feather" size="25" />
            </Pressable>
            <View style={styles.individualContainer}>
                <Pressable style={styles.textBox} onPress={() => setIsOpen(true)}>
                    <Text style={styles.text}>From</Text>
                </Pressable>
            </View>
            <View style={styles.individualContainer}>
                <Pressable style={styles.textBox}>
                    <Text style={styles.text}>To</Text>
                </Pressable>
            </View>
            <View style={styles.individualContainer}>
                <Pressable style={styles.textBox}>
                    <Text style={styles.text}>Amount</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Amount"
                        clearTextOnFocus = "true"
                    />
                </Pressable>
            </View>
            <View style={styles.individualContainer}>
                <Pressable style={styles.textBox}>
                    <Text style={styles.text}>Date</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Date"
                        clearTextOnFocus = "true"
                    />
              
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    individualContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    button: {
        padding: 20,
        borderRadius: 4,
        alignItems: "flex-start",
    },
    text: {
        fontSize: 16,
        color: "#000",
    },
    textBox: {
        padding: 20,
        backgroundColor: "white",
    },
    input:{
        paddingTop: 15,
        size: 24
    }
});
