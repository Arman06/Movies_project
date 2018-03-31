import React from 'react';
import {View, StyleSheet} from 'react-native';

const CardUnit = (props) => {
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );


};

const styles = StyleSheet.create({
    containerStyle:{
        borderRadius: 15,
        borderBottomWidth: 0,
        padding: 5,
        backgroundColor: '#FAFAFA',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',

    }
});

export default CardUnit;