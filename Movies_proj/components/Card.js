import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = (props) => {
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#FAFAFA',
        borderWidth: 0,
        borderRadius: 15,
        borderColor: '#FAFAFA',
        //borderBottomWidth: 0,
        shadowColor:'#0000',
        shadowOffset: {width: 0, height: 15},
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 8,
        marginBottom: 8,

    }
});

export default Card;