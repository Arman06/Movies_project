import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';
import FilmDetails from './FilmDetails';

export default class ScrollFilms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { films: []};
      }
    
    componentWillMount(){
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=73d91077fd40206b6f7bf97d808909f5&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.lte=2017')
            .then(response => this.setState({ films: response.data.results}))
            .catch(function(error) {
                console.log('There has been a problem ' + error.message);
                });
    }
    
    renderFilms(){
        return this.state.films.map(film => 
            <FilmDetails key={film.id} film={film} />
        );
    }

    render(){

        return(
            <ScrollView removeClippedSubviews={true} style={styles.pageStyle}>
               {this.renderFilms()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textScrollFilms: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 300,
        color: 'black'
    },
    pageStyle: {
        
    }
  });