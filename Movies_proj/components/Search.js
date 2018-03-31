import React from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, TextInput} from 'react-native';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
      }
    render(){
        return(
            <View><TextInput
            style={styles.searchStyle}
            placeholder="Type here to search"
            onChangeText={(text) => this.setState({text})}
            />
            <Text style={styles.textStyle}>
          {this.state.text}
        </Text>
          </View>
        );
    }
}
const styles = StyleSheet.create({
    searchStyle:{
        borderRadius: 15,
        borderBottomWidth: 0,
        padding: 5,
        backgroundColor: '#FAFAFA',
        borderColor: '#ddd',
        position: 'relative',

    },
    textStyle: {
        fontSize: 20,
        color: 'black',
    },
});