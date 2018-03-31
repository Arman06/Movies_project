import React from 'react';
import {View, Text, StyleSheet, Platform, ScrollView, FlatList} from 'react-native';


export default class News extends React.Component {
    render(){
        return(
            <ScrollView>
                <Text style={styles.textNews}> Here you will see news </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textNews: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
    color: 'black'
    },
    
  });