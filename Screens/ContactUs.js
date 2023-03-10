/* The ContactUs.js file will contain the code for the contact us screen. */

/* Import statements. */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from "react-native-elements";

/**
 * The ContactUs() function is called when the contact us screen is opened.
 * @returns The screen to display.
 */
export default function ContactUs() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Pressable
            style={styles.button}
            onPress={() => navigation.goBack()}
        >
            <Icon name="arrow-left" type="feather" size="25" />
        </Pressable>
        <Icon
            name="mail"
            type="feather"
            size="120"
            color="#3070B6"
            style={styles.mailIcon}
        />
        <Text style={styles.text}>
            Send us an email and we'll respond within one business day!
        </Text>
    </View>
  );
}

/* The styles used. */
const styles = StyleSheet.create({
    text: {
        color: "#3070B6",
        fontSize: 25,
        fontFamily: "SFcompactRegular",
        textAlign: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    mailIcon: {
        paddingTop: 150,
    },
    button: {
        padding: 20,
        borderRadius: 4,
        alignItems: "flex-start",
    },
});