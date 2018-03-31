import React from 'react';
import {View, StyleSheet} from 'react-native';
import Head from './Head';
import {Tab} from './Tab';
import MainThing from './MainThing';
export default class App extends React.Component{
    render(){
        return(
            <View style={body}>
            <Head headText={"Movies"}/>
            <Tab />
            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
    }
});

const {body} = styles;
