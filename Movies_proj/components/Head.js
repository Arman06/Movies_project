import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Head = (props) =>{
    return(
        <View style={view_style}>
            <Text style={text_style}>
                {props.headText}
            </Text>
        </View>

    )

};
const styles = StyleSheet.create({
    view_style: {
        justifyContent: "center",
        paddingTop: 3,
        height: 50,
        alignItems: "center",
        backgroundColor: "#FAFAFA",
        shadowColor: "#0000",
        shadowOffset: {width: 0, height: 3 },
        shadowOpacity: 0.4,
        elevation: 11,
    },
    text_style: {
        fontWeight: "bold",
        color: 'black',
        fontSize: 24,
    }
});

const {view_style, text_style} = styles;

export default Head;