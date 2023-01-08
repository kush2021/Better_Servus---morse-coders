import React from 'react'
import { StyleSheet, Text, Pressable, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function BranchATM() {
  const navigation = useNavigation();
  return (
      <SafeAreaView style={styles.container}>
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" type="feather" size="25" />
          </Pressable>
          <Text>Your Nearest Branch & ATM Machine!</Text>
      </SafeAreaView>
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