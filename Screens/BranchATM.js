import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

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