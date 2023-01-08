import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements';

export default function ChangePassword() {

  const navigation = useNavigation();
  return (
      <SafeAreaView>
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" type="feather" size="25" />
          </Pressable>
          <Text>Change Password Feature</Text>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    button: {
        padding: 20,
        borderRadius: 4,
        alignItems: "flex-start",
    },
});