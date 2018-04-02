import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Card from './Card';
import CardUnit from './CardUnit';


class FilmDetails extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { overview: [], count: 0 }
      }
   
      onPress = () => {
          if (this.state.count == 0){
        this.setState({overview: this.props.film.overview});
        this.setState({count: this.state.count+1});
        }
        else{ 
            this.setState({count: this.state.count-1});
            this.setState({overview: []});
            }
      }
    
    render(){
    return(
        <View>
            <Card>
                <CardUnit> 
                    <View style={styles.posterView}>
                        <Image style={styles.posterStyle}
                        source={{uri: `https://image.tmdb.org/t/p/w500${this.props.film.poster_path}`}} 
                        />
                    </View>
                    <View style={styles.TextContainer}>
                        <Text style={styles.Text}>{this.props.film.title}</Text>  
                        <Text style={styles.TextOriginal}>{this.props.film.original_title}</Text>
                    </View>
                    <View style={styles.buttonViewStyle}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}>
                        <Text style={styles.textButton}>More</Text> 
                    </TouchableOpacity>
                    </View>
                </CardUnit>
                <View>
                <CardUnit>
                    <View style={styles.TextContainerOverView}>
                        <Text style={styles.TextOverview}>
                            {this.state.overview}
                        </Text>
                    </View>
                </CardUnit>
                </View>
            </Card>
            <Card>
                
            </Card>
        </View>
    );
}
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 20,
        color: 'black',
        fontWeight: "500",
    },
    TextOriginal: {
        fontSize: 14,
        color: 'grey',
    },
    TextOverview: {
        fontSize: 14,
        color: 'black',
       // padding: 3,
        
    },
    TextContainer: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingLeft: 13,
    },
    TextContainerOverView: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 5,
        
    },
    posterStyle: {
       
        borderWidth: 2,
        borderRadius: 13,
        height: 150,
        width: 100,
    },
    posterView: {
        justifyContent: 'center',
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
    }
  });

export default FilmDetails;