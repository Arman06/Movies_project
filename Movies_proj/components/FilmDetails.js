import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Card from './Card';
import CardUnit from './CardUnit';

const FilmDetails = ({film}) => {
    const {title, original_title, poster_path, backdrop_path} = film;
    return(
        <Card>
            <CardUnit> 
                <View style={styles.posterView}>
                    <Image style={styles.posterStyle}
                    source={{uri: `https://image.tmdb.org/t/p/w500${poster_path}`}} 
                    />
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.Text}>{film.title}</Text> 
                    <Text style={styles.TextOriginal}>{film.original_title}</Text>
                </View>
            </CardUnit>
            <CardUnit>
                <Image style={styles.backdropStyle}
                source={{uri: `https://image.tmdb.org/t/p/original${backdrop_path}`}} 
                />
            </CardUnit>
        </Card>
    );
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 20,
        color: 'black',
        paddingRight: 13,
    },
    TextOriginal: {
        fontSize: 14,
        paddingRight: 13,
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
    }
  });

export default FilmDetails;