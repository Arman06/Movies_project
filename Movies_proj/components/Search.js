import React from 'react';
import {View, Text, StyleSheet, ScrollView,TextInput} from 'react-native';
import CardUnit from './CardUnit';
import Card from './Card';
import FilmDetails from './FilmDetails';
import axios from 'axios';

export default class Search extends React.Component {
      
      constructor(props) {
        super(props);
        this.state = { films: [], text: '' };
      }
      componentDidUpdate(){
          axios.get(`https://api.themoviedb.org/3/search/movie?api_key=73d91077fd40206b6f7bf97d808909f5&language=ru&sort_by=popularity.desc&include_adult=false&query=${this.state.text.split('+')}`)
              .then(response => this.setState({ films: response.data.results}))
              .catch(function(error) {
                console.log('There has been a problem, окда' + error.message);
                });
      }
      
      renderFilms(){
          return this.state.films.map(film => 
              <FilmDetails key={film.id} film={film} />
          );
      }
  
    render(){
        return(
        <View style={styles.searchStyle}>
        
          
            <ScrollView removeClippedSubviews={true}>
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
                {this.renderFilms()}
            </ScrollView>
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
});