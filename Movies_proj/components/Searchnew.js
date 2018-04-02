import React from 'react';
import {View, Text, StyleSheet, ScrollView,TextInput, FlatList} from 'react-native';
import CardUnit from './CardUnit';
import Card from './Card';
import FilmDetails from './FilmDetails';
import axios from 'axios';


class ListItem extends React.PureComponent {
    constructor(props) {
        super(props);
        console.log(item)
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
      renderItem = (item) => {
        return <ListItem item={item}/>
      }
    render(){
        return(
        <View style={styles.searchStyle}>
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
            <FlatList
                data={this.state.films}
                renderItem={this.renderItem}
                extraData={this.state.films}
                keyExtractor={(item) => item.id.toString()}
            />
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