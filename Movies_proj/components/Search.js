import React from 'react';
import {View, Text, StyleSheet, ScrollView,TextInput, FlatList} from 'react-native';
import CardUnit from './CardUnit';
import Card from './Card';
//import FilmDetails from './FilmDetails';
import axios from 'axios';
import FilmDetails from './FilmDetails';

class ListItem extends React.PureComponent {
    constructor(props) {
        super(props);
        //console.log(item)
      }
  
    renderFilms1(){
        return this.props.item.map(item => 
            <FilmDetails key={item.id} film={item} />
        );
    }
    render() {
      return (
        <View>
        {this.renderFilms1()}
        </View>
      )
    }
  }

export default class Search extends React.PureComponent {
      
      constructor(props) {
        super(props);
        this.state = { films: [], text: '' };
      }
      
      componentDidUpdate(){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=73d91077fd40206b6f7bf97d808909f5&language=ru&sort_by=popularity.desc&include_adult=false&query=${this.state.text.split('+')}`)
            .then(response => this.setState({ films: response.data.results}))
            .catch(function(error) {
              console.log('Problemss' + error.message+"\n");
              });
    }
    
      
      renderFilms(){
          return this.state.films.map(film => 
              {film.title}
          );
      }
      renderFilms(){
        return this.state.films.map(film => 
            <FilmDetails key={film.id} film={film} />
        );
    }
    render(){
        return(
        <View style={styles.searchStyle}>
        
            <FlatList
            data={this.state.films}
            renderItem={({item}) => <FilmDetails key={item.id} film={item} /> }
            //extraData={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent= {
                <Card>
                <CardUnit>
                    <TextInput
                    underlineColorAndroid='transparent'
                    textAlign={'center'}
                    style={styles.searchStyle}
                    placeholder="Поиск"
                    onChangeText={(text) => this.setState({text})}
                    />
                </CardUnit>
            </Card>
            }/>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    searchViewStyle:{
    
    },
    searchStyle: {
        flex: 1,
        //flexDirection: 'column',
        //justifyContent: 'center',
        //alignItems: 'center',
    },
    textStyle: {
        fontSize: 20,
        color: 'black',
        padding: 10,
    },
    Text: {
        fontSize: 20,
        color: 'black',
        fontWeight: "500",
    },
    TextOriginal: {
        fontSize: 14,
        color: 'grey',
        },
    TextContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 13,
    },
    posterStyle: {
        borderWidth: 2,
        borderRadius: 13,
        height: 150,
        width: 100,
    },
    posterView: {
        
    },
    backdropStyle: {
        borderWidth: 2,
        borderRadius: 13,
        height: 300,
        width: null,
        flex: 1,
    },
    buttonStyle: {
        borderRadius: 7,
        borderWidth: 1,
        borderColor: "red",
        alignItems: 'center',
        marginRight: 10,
    },
    textButton: {
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'red',
        fontWeight: '600',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonViewStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
});