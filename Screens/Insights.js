import {StatusBar} from 'expo-status-bar';
import {View, Text, StyleSheet, FlatList, Animated} from 'react-native';
import React from 'react';
import Onboarding from '../Components/Onboarding';

export default function Insights() {

      
    return(
        <View style={StyleSheet.container}>
            <Onboarding />
            <StatusBar style="auto"/>
        </View>

    );
    
};

const styles = StyleSheet.create({
    onboardingContainer: {
        flex: 1,
        backgroundColor: "ffffff",
        alignItems: 'center',
        justifyContent: 'center',
      }
})
