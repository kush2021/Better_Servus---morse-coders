/* The ChangePassword.js file will contain the code for the password-changing screen. */

/* Import statements. */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

/**
 * The ChangePassword() function is called when the password-changing screen is opened.
 * @returns The screen to display.
 */
export default function ChangePassword() {
  const navigation = useNavigation();
  return (
      <View>
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" type="feather" size="25" />
          </Pressable>
          <Text>Change Password Feature</Text>
      </View>
  );
}

/* The styles used. */
const styles = StyleSheet.create({
    button: {
        padding: 20,
        borderRadius: 4,
        alignItems: "flex-start",
    },
});