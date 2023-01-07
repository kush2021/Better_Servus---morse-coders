import { useNavigation, useRoute } from '@react-navigation/native';
import moment from "moment";
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

data = [
    {id: 1, date: "2023-01-01", title: "AFT Pre-Authorized Debit WS", amount: "12.59", spend: true},
    {id: 2, date: "2022-12-22", title: "AFT Pre-Authorized GOODLIFE CLUBS", amount: "28.34", spend: true},
    {id: 3, date: "2023-01-05", title: "Interac e-Transfer In", amount: "178.94", spend: false},
    {id: 4, date: "2023-01-01", title: "Transfer Out", amount: "100.00", spend: true},
];

export default function SingleAccount() {
    const route = useRoute();
    const navigation = useNavigation();


    useEffect(() => {
        navigation.setOptions({title: route.params.name})
    }, [])

    const renderItem = ({item}) => (
        <View>
            <Text style={styles.itemDate}>{moment(item.date).format("DD MMM YYYY")}</Text>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={[styles.itemBalance, item.spend ? styles.minus : styles.add]}>{item.spend ? "-" : "+"}${item.amount}</Text>
            </View>
        </View>
    )
    
    return (
        <View>
            <View style={styles.balanceOuter}>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>Balance</Text>
                    <Text style={styles.balanceMoney}>${route.params.balance.toLocaleString()}</Text>
                </View>
                <View style={styles.balanceContainerTwo}>
                    <Text style={styles.balanceTextTwo}>Available Balance</Text>
                    <Text style={styles.balanceMoneyTwo}>${route.params.balance.toLocaleString()}</Text>
                </View>
            </View>

            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    balanceOuter: {
        backgroundColor: "#3070B6",
        shadowColor: '#171717',
        shadowOffset: {width: -4, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        marginHorizontal: 15,
        marginBottom: 20,
        marginTop: 15,
        borderRadius: 10,
    },  
    balanceContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    balanceText: {
        fontSize: 16,
        color: "white",
        fontWeight: "500"
    },
    balanceMoney: {
        fontWeight: "600",
        fontSize: 18,
        color: "white"
    },
    balanceContainerTwo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 10,
    },
    balanceTextTwo: {
        fontSize: 14,
        color: "white",
        fontWeight: "500"
    },
    balanceMoneyTwo: {
        fontWeight: "600",
        fontSize: 16,
        color: "white"
    },
    itemContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        marginHorizontal: 15,
        marginTop: 5,
        marginBottom: 20,
        borderRadius: 10,
        padding: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    itemDate: {
        paddingLeft: 15,
        fontWeight: "500",
        color: "#3070B6"
    },
    add: {
        color: "green"
    },
    minus: {
        color: "red"
    }
})