import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

const data = [
  {id: 1, name: "Personal Savings", balance: 1299.89},
  {id: 2, name: "Vacation", balance: 287.90},
  {id: 3, name: "Emergency Fund", balance: 2249.24},
  {id: 4, name: "Servus Rewards", balance: 12.74}
]

export default function Accounts() {

  const renderItem = ({item}) => (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.balance}>${item.balance.toLocaleString()}</Text>
    </View>
  )
  
  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
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
  },
  balance: {
    fontWeight: "600",
    fontSize: 16
  }
})