import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text } from 'react-native-elements';
import { db } from '../firebase';
import Onboarding from "../Components/Onboarding";



export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  
  const navigation = useNavigation();

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

  const goToAccountScreen = (name, balance, id) => {
    navigation.navigate('Account', {
      name,
      balance,
      id
    });
  };

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

  
  return (
    <View style={styles.screen}>
      <Text style={styles.welcometext}>Welcome Mark!</Text>
      <Text style={styles.insightstext}>We believe in sharing, so let us share some something new with you. Check out our new Insights feature below. Follow your latest trends and easily visualize your finances.</Text>
      <FlatList
        data={accounts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

    </View>
  )
}

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
  },
  welcometext:  {
    fontSize: 30,
    fontFamily: "SFcompactSemibold",
    color: "#3070B6",
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "left",
    paddingLeft: 30
  },
  insightstext:  {
    fontSize: 17,
    fontFamily: "SFcompactRegular",
    color: "#3070B6",
    paddingBottom: 30,
    textAlign: "left",
    paddingLeft: 30,
    paddingRight:30,
  }
})