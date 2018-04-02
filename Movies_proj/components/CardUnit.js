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
        backgroundColor: '#FAFAFA',
        borderWidth: 0,
        borderRadius: 15,
        borderColor: '#FAFAFA',
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        

    }
});

export default CardUnit;