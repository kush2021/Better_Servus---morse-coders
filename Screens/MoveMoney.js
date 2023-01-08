import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Make Internal Transfer",
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "View Pending Transfers",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Interac e-Transfer",
    },
];

export default function MoveMoney() {
    const navigation = useNavigation();

    const goToScreen = ({ title }) => {
        switch (title) {
            case "Make Internal Transfer":
                navigation.navigate("Move Money", {screen: "Transfer Money"});
        }
    };

    const Item = ({ title }) => (
        <TouchableOpacity
            onPress={() => {
                goToScreen({ title });
            }}
        >
            <View style={styles.item}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
    const renderItem = ({ item }) => <Item title={item.title} />;

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

const styles = StyleSheet.create({
    screen: {
        marginTop: 10,
    },
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
    },
});
