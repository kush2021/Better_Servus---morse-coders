import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

export default function FeedbackSupport() {
    const navigation = useNavigation();
  return (
      <SafeAreaView>
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" type="feather" size="25" />
          </Pressable>
          <Text style={styles.largetext1}>
              We'd love to hear your feedback!
          </Text>
          <Text style={styles.smalltext}>
              Please let us know what we're doing well and what we could be
              doing better.
          </Text>
          <Icon
              name="mail"
              type="feather"
              size="30"
              color="#3070B6"
              style={styles.mailIcon}
          />
          <Text style={styles.emailText}>feedback@servus.ca</Text>
          <Text style={styles.largetext2}>Need Mobile Banking Support?</Text>
          <Text style={styles.smalltext}>
              We're here to help - seven days a week!
          </Text>
          <Icon
              name="phone"
              type="feather"
              size="30"
              color="#3070B6"
              style={styles.phoneIcon}
          />
          <Text style={styles.emailText}>1.877.378.8728</Text>
          <Icon
              name="mail"
              type="feather"
              size="30"
              color="#3070B6"
              style={styles.mailIcon}
          />
          <Text style={styles.emailText}>support@servus.ca</Text>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    largetext1: {
        color: "#3070B6",
        fontSize: 25,
        fontFamily: "SFcompactSemibold",
        textAlign: "left",
        paddingHorizontal: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
    },

    largetext2: {
        color: "#3070B6",
        fontSize: 25,
        fontFamily: "SFcompactSemibold",
        textAlign: "left",
        paddingHorizontal: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 50,
    },

    smalltext: {
        color: "black",
        fontSize: 17,
        fontFamily: "SFcompactRegular",
        textAlign: "left",
        paddingVertical: 20,
        paddingHorizontal: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },

    mailIcon: {
        paddingTop: 15,
    },
    phoneIcon: {
        paddingTop: 30,
    },

    emailText: {
        color: "#3070B6",
        fontSize: 17,
        fontFamily: "SFcompactCompact",
        textAlign: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    button: {
        padding: 20,
        borderRadius: 4,
        alignItems: "flex-start",
    },
});