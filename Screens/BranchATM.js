/* The BranchATM.js file will contain the code for the screen showing nearby Servus Credit Union branches and ATM machines. */

/* Import statements. */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

/**
 * The BranchATM() function is called when the nearby branches and ATM machines screen is opened.
 * @returns The screen to display.
 */
export default function BranchATM() {
  const navigation = useNavigation();
  return (
      <View style={styles.container}>
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" type="feather" size="25" />
          </Pressable>
          <Text>Your Nearest Branch & ATM Machine!</Text>
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
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});