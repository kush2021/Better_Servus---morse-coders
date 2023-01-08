/* The FaceID.js screen will contain the code for the face ID screen. */

/* Import statements. */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

/**
 * The FaceID() function is called when the face ID screen is opened.
 * @returns The screen to display.
 */
export default function FaceID() {
  const navigation = useNavigation();
  return (
      <View>
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" type="feather" size="25" />
          </Pressable>
          <Text>FaceID Feature</Text>
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