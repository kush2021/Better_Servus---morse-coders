import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function FaceID() {
  const navigation = useNavigation();
  return (
      <SafeAreaView>
          <Pressable style={styles.button} onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" type="feather" size="25" />
          </Pressable>
          <Text>FaceID Feature</Text>
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