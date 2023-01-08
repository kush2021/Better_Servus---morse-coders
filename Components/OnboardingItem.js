import React from "react";
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';


export default Onboarding = ({item}) => {
    let {width} = useWindowDimensions();
    width -= 40;

    return(
        <View style={[styles.container, {width}]}>
            <Text style = {styles.title}>{item.title}</Text>
            <Text style = {styles.description}>{item.description}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        marginTop: 5,
        borderRadius: 10,
        marginHorizontal: 20,
        height: 130,
        backgroundColor: "white",
        alignItems: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        paddingHorizontal: 30,
    },
    title:{
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        marginBottom: 10,
        fontFamily: "SFcompactSemibold",
    },
    description: {
        fontFamily: "SFcompactRegular",
        fontSize: 12,
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 32,
    }
});