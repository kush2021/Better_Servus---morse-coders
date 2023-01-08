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

export default function More() {
  const navigation = useNavigation();

  const goToScreen = ({name}) => {
    switch(name) {
      case "Feedback & Support":
        navigation.navigate("More", {screen: "Feedback Support Page"});
      case "Face ID":
        navigation.navigate("More", {screen: "Face ID Page"});
      case "Change Password":
        navigation.navigate("More", {screen: "Change Password Page"});
      case "Branch & ATM Locations":
        navigation.navigate("More", {screen: "Branch ATM Page"});
      case "Contact Us":
        navigation.navigate("More", {screen: "Contact Us Page"});
    }
  };

  const Item = ({ name }) => (
    <TouchableOpacity
      onPress={() => {
        goToScreen({name});
      }}
    >
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => <Item name={item.name} />;
  
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