import React from "react";
import {View, Text, StyleSheet, useWindowDimensions } from 'react-native';


export default Onboarding = ({item}) => {

    const {width} = useWindowDimensions();

    return(
        <View style={[styles.container, {width}]}>

            <View style = {{flex: 0.3}}>
                <Text style = {styles.title}>{item.title}</Text>
                <Text style = {styles.description}>{item.description}</Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
    },
    title:{
        fontWeight: '800',
        fontSize: 28,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,

    },
    description: {
        fontWeight: '300',
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 64,
    }
});