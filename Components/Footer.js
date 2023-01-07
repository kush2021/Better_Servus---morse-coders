import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    FlatList, StyleSheet,
    Text,
    TouchableOpacity, View
} from "react-native";
import { Icon } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";

const data = [
    {
        id: 1,
        screen: "Accounts",
        icon: "home",
    },
    {
        id: 2,
        screen: "Move Money",
        icon: "calendar",
    },
    {
        id: 3,
        screen: "More",
        icon: "plus",
    },
];

const Footer = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(item.screen)}
        >
            <View>
                <Icon
                    type="simple-line-icon"
                    color="#ABAFBA"
                    name={item.icon}
                />
                <Text style={styles.txt}>{item.screen}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                horizontal
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

export default Footer;

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
    },
    item: {
        marginLeft: 60,
    },
    txt: {
        color: "#ABAFBA",
        marginTop: 5
    },
});