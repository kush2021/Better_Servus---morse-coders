import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from "react-native-elements";
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";

export default function ContactUs() {

  return (
    <View>

    <SafeAreaView>
    <Icon
                name="mail"
                type="feather"
                size="120"
                color="#3070B6"
                style={styles.mailIcon}
            />
      <Text style = {styles.text}>Send us an email and we'll respond within one business day!</Text>
    </SafeAreaView>
    </View> 
  )
}
const styles = StyleSheet.create({
    text: {color: "#3070B6", 
    fontSize: 25,
    fontFamily: "SFcompactRegular", 
    textAlign: "center", 
    paddingVertical: 20, 
    paddingHorizontal: 10, 
    paddingLeft: 20, 
    paddingRight:20},
    mailIcon: {
        paddingTop: 150
    }

})