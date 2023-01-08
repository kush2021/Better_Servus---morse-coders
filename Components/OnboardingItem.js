import React from "react";
import {View, Text, StyleSheet, useWindowDimensions } from 'react-native';


export default Onboarding = ({item}) => {

    const {width} = useWindowDimensions();
    //const {width} = 50;


    return(
        <View style={[styles.container, {width}]}>
            <Text style = {styles.title}>{item.title}</Text>
            <Text style = {styles.description}>{item.description}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 20,
        height: 175,
        backgroundColor: "white",
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        paddingHorizontal: 30,
    },
    title:{
        fontWeight: '800',
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        // width: 360,

    },
    description: {
        fontWeight: '300',
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 32,
        // paddingVertical: 10,
        // width: 360,
    }
});