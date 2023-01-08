/* The SingeAccounbt.js file contains the code for viewing a single account. */

/* Import statements. */
import { useNavigation, useRoute } from '@react-navigation/native';
import { doc, getDoc } from "firebase/firestore";
import moment from "moment";
import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { db } from '../firebase';

/**
 * The SingleAccount() function is called when a single account screen is opened.
 * @returns The screen to display.
 */
export default function SingleAccount() {
    const route = useRoute();
    const navigation = useNavigation();
    const [transactions, setTransactions] = useState([]);

    /* Get the account transactions from Firebase. */
    useEffect(() => {
        async function getData() {
            const docRef = doc(db, "accounts", route.params.id);
            const docSnap = await getDoc(docRef);
            setTransactions(docSnap.data().transactions);
        }
        getData();
    }, []);

    /* Parse and convert the data. */
    const parseDate = (firebaseDate) => {
        const fireBaseTime = new Date(firebaseDate["seconds"] * 1000 + firebaseDate["nanoseconds"] / 1000000);
        
        const date = fireBaseTime.toDateString();
        return moment(date).format("DD MMM YYYY");
    }

    /* Define how the transactions should render. */
    const renderItem = ({item}) => (
        <View>
            <Text style={styles.itemDate}>{parseDate(item.date)}</Text>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={[styles.itemBalance, item.spend ? styles.minus : styles.add]}>{item.spend ? "-" : "+"}${parseFloat(item.amount).toFixed(2).toLocaleString()}</Text>
            </View>
        </View>
    )
    
    /* Return the screen. */
    return (
        <View>
            <View style={styles.header}>
                <Pressable style={styles.button} onPress={() => (navigation.goBack())}>
                    <Icon 
                        name="arrow-left"
                        type="feather"
                        size="25"
                        />
                </Pressable>
                <Text style={styles.headerText}>{route.params.name}</Text>
            </View>
            <View style={styles.balanceOuter}>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceText}>Balance</Text>
                    <Text style={styles.balanceMoney}>${parseFloat(route.params.balance).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                </View>
                <View style={styles.balanceContainerTwo}>
                    <Text style={styles.balanceTextTwo}>Available Balance</Text>
                    <Text style={styles.balanceMoneyTwo}>${parseFloat(route.params.balance).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
                </View>
            </View>

            <FlatList
                style={styles.list}
                data={transactions}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

/* The styles used. */
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: "center",
    },  
    headerText:{
        fontFamily: "SFcompactSemibold",
        fontSize: 24,
        marginTop: 15,
        marginLeft: "auto",
        marginRight: "auto",
        paddingRight: 45,
    },
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
        fontWeight: "500",
        fontFamily: "SFcompactRegular",
    },
    balanceMoney: {
        fontWeight: "600",
        fontSize: 18,
        color: "white",
        fontFamily: "SFcompactRegular",
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
        fontWeight: "500",
        fontFamily: "SFcompactRegular",
    },
    balanceMoneyTwo: {
        fontWeight: "600",
        fontSize: 16,
        color: "white",
        fontFamily: "SFcompactRegular",
    },
    button: {
        paddingLeft: 20,
        paddingTop: 20,
        borderRadius: 4,
        alignItems: "flex-start"
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
        fontFamily: "SFcompactSemibold",
        color: "#3070B6"
    },
    add: {
        color: "green"
    },
    minus: {
        color: "red"
    },
    list: {
        marginBottom: 200,
    }
})