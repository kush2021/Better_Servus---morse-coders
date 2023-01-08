/*import {StatusBar} from 'expo-status-bar';
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
*/

import React, {useState, useRef} from "react";
import {View, Text, StyleSheet, FlatList, Animated} from 'react-native';

import OnboardingItem from "../Components/OnboardingItem";
import slides from '../insightSlides';
import { useAnimatedGestureHandler } from "react-native-reanimated";

export default Onboarding = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);

    
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 40}).current;


    return(
        <View style={styles.container}>
            <View style={{flex:3}}>
            <FlatList 
            data = {slides} 
            renderItem = {({item}) => <OnboardingItem item = {item} /> }
            horizontal
            showsHorizontalScrollIndicator
            pagingEnabled
            bounces={false}
            keyExtractor = {(item => item.id)}
            onScroll = {Animated.event([{nativeEvent: {contentOffset: {x: scrollX} }}], {
                useNativeDriver: false,
            })}
            scrollEventThrottle={32}
            onViewableItemsChanged = {viewableItemsChanged}
            //onViewableItemsChanged = {viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            />
            </View>
        </View>
    );

    

};

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },  
    list: {
        alignItems: "center",
    }
});