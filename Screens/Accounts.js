/* The Accounts.js file will contain the code for the main account-viewing screen. */

/* Import statements. */
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { db } from '../firebase';

/**
 * The Accounts() function is called when the account screen is opened.
 * @returns The screen to display.
 */
export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const navigation = useNavigation();

  /* Get account data from Firebase. */
  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "accounts"));
      const docs = []
      querySnapshot.forEach((doc) => {
        docs.push({id: doc.id, ...doc.data()});
      })
      setAccounts(docs);
    }
    fetchData();
  }, [])

  /* Navigate to the appropriate screen. */
  const goToAccountScreen = (name, balance, id) => {
    navigation.navigate('Account', {
      name,
      balance,
      id
    });
  };

  /* Define how the account items should appear. */
  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => {
      goToAccountScreen(item.name, item.amount, item.id);
    }}>
      <View style={styles.container}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.balance}>${parseFloat(item.amount).toFixed(2).toLocaleString()}</Text>
      </View>
    </TouchableOpacity>
  )
  
  /* Return the screen. */
  return (
    <View style={styles.screen}>
      <FlatList
        data={accounts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

/* The styles used. */
const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginHorizontal: 15,
    marginVertical: 5,
    borderRadius: 10,
    padding: 20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  name: {
    fontSize: 15,
    fontFamily: "SFcompactRegular",
  },
  balance: {
    fontWeight: "600",
    fontSize: 16
  }
})