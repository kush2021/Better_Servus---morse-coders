/* The MoveMoney.js file contains the code for the money transfer options screen. */

/* Import statement, */
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    FlatList, SafeAreaView, StatusBar, StyleSheet,
    Text, View
} from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

/* The money transfer options. */
const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        icon: "refresh-ccw",
        title: "Make Internal Transfer",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        icon: "clock",
        title: "View Pending Transfers",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        icon: "send",
        title: "Interac e-Transfer",
    },
];

/**
 * The MoveMoney() function is called when the money transfer options screen is opened.
 * @returns The screen to display.
 */
export default function MoveMoney() {
    const navigation = useNavigation();

    /* Navigate to the correct screen. */
    const goToScreen = ({ title }) => {
        switch (title) {
            case "Make Internal Transfer":
                navigation.navigate("Move Money", {screen: "Transfer Money"});
                return;
            case "Interac e-Transfer":
                navigation.navigate("Move Money", {screen: "e-Transfer Screen"});
                return;
        }
    };

    const Item = ({ title, icon }) => (
        <TouchableOpacity
            onPress={() => {
                goToScreen({ title });
            }}
        >
            <View style={styles.item}>
            <Icon
                name={icon}
                type="feather"
                color="#636366"
                size="18"
                style={styles.icon}
            />
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
    const renderItem = ({ item }) => <Item title={item.title} icon={item.icon} />;

    /* Return the screen. */
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

/* The styles used. */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 10,
    },
    item: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    title: {
        fontSize: 15,
        fontFamily: "SFcompactRegular",
        paddingLeft: 15,
    },
});
