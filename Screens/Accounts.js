import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { VictoryAxis, VictoryChart, VictoryPie, VictoryTheme } from "victory-native";
import { db } from '../firebase';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);
  const [total, setTotal] = useState(0);
  const [victoryData, setVictoryData] = useState([]);
  
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "accounts"));
      const docs = []
      let totalAmt = 0;
      let vicData = {}
      querySnapshot.forEach((doc) => {
        docs.push({id: doc.id, ...doc.data()});
        totalAmt += doc.data().amount;
        doc.data().transactions.forEach(item => {
          if(vicData[item.topic] == undefined) {
            vicData[item.topic] = 1;
          } else {
            vicData[item.topic]++;
          }
        })
      })
      let vics = []
      for(let prop in vicData) {
        let obj = {x: prop, y: vicData[prop]}
        vics.push(obj);
      }
      setVictoryData(vics);
      setAccounts(docs);
      setTotal(totalAmt);
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
        <Text style={styles.balance}>${parseFloat(item.amount).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>
      </View>
    </TouchableOpacity>
  )
  
  return (
    <View style={styles.screen}>
      <Text style={styles.semiHeader}>Spending Summary</Text>
      <View style={styles.graph}>
        <View style={styles.chart}>
          <VictoryChart  width={400} height={250} theme={VictoryTheme.material}>
            <VictoryPie style={{ 
                data: {stroke: "transparent"},
            }}
            data={victoryData}/>
            <VictoryAxis style={{ 
              axis: {stroke: "none"}, 
              ticks: {stroke: "none"},
              tickLabels: { fill:"transparent"},
              grid: {stroke: "none"}
            }} />
          </VictoryChart>
        </View>
      </View>
      <Text style={styles.semiHeader}>Accounts</Text>
      <FlatList
        data={accounts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {total != 0 && <Text style={styles.totalBalance}>Total Balance: ${parseFloat(total).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
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
    fontFamily: "SFcompactSemibold",
    fontSize: 16
  },
  totalBalance: {
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 5,
    fontSize: 16,

    fontFamily: "SFcompactSemibold",
    color: "#3070B6",
  },
  graph: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  }, 
  chart: {
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 30,
    width: "90%",
    backgroundColor: "white",
  },
  chartTitle: {
    fontFamily: "SFcompactSemibold",
    fontSize: 20,
    marginTop: 10,
    marginBottom: -20,
  },
  semiHeader: {
    paddingLeft: 15,
    fontFamily: "SFcompactSemibold",
    color: "#3070B6",
    marginTop: 10,
  }
})