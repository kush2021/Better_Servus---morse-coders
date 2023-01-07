import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View, Button } from 'react-native';
import { Text } from 'react-native-elements';

const data = [
  {id: 1, name: "Face ID"},
  {id: 2, name: "Change Password"},
  {id: 3, name: "Branch & ATM Locations"}, //not functional
  {id: 4, name: "Contact Us"},             //not functional
  {id: 5, name: "Feedback & Support"},     //not functional
]

export default function Accounts() {
  const [name, setName] = useState("");
  const navigation = useNavigation();
  

  const goToAccountScreen = () => {

    navigation.navigate('FaceID', {
      name,
    });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => {
      goToAccountScreen();
    }}>
    <View style={styles.container}>
    <Text style={styles.name}>{item.name}</Text>
    </View>
    </TouchableOpacity>
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
    fontFamily: "SFcompactRegular",
  }
})