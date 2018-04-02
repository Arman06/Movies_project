import React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import FilmDetails from './FilmDetails';

export default class ScrollFilms extends React.Component {
    constructor(props) {
        super(props);
        this.state = { films: [], page: 1, loading: false, refresh: false, pages: 0};
      }
    componentDidMount(){
        this.request();
    }
    request = () => {
        this.setState({loading: true});
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=73d91077fd40206b6f7bf97d808909f5&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.lte=2016&page=${this.state.page}`;
        fetch(url)
            .then(response => response.json())
            .then(response => {this.setState({ films: response.results, pages: response.total_pages, loading: false, refresh: false})})
            .catch(error => {
                this.setState({refresh: false, loading: false});
                console.log('problem is: ' + error.message);
                });
    }
    /*componentDidUpdate(){
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=73d91077fd40206b6f7bf97d808909f5&language=ru&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&release_date.lte=2017&page=${this.state.page}`)
            .then(response => this.setState({ films: response.data.results}))
            .catch(function(error) {
                console.log('There has been a problem ' + error.message);
                });
    }*/
    renderFilms(){
        return this.state.films.map(film => 
            <FilmDetails key={film.id} film={film} />
        );
    }
    renderActiv = () =>{
        if (!this.state.loading) return null;
        return(
            <View style={{paddingVertical: 20}}>
                <ActivityIndicator animating size = "large"/>
            </View>
        );
    }
    RefreshFunc = () =>{
        this.setState({page: 1, refresh: true}, () => {
            this.request();
        })
    }
    render(){

        return(
            /*<ScrollView removeClippedSubviews={true} style={styles.pageStyle}>
               {this.renderFilms()}
            </ScrollView>*/
            <FlatList
            ListFooterComponent={this.renderActiv}
            data={this.state.films}
            renderItem={({item}) => <FilmDetails key={item.id} film={item} /> }
            //extraData={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            refreshing={this.state.refresh}
            onRefresh={this.RefreshFunc}
        />
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