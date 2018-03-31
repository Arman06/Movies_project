import React from 'react';
import {View,StyleSheet} from 'react-native';
import News from './News';
import ScrollFilms from './ScrollFilms';
import Search from './Search';
import {TabNavigator} from 'react-navigation';

export const Tab = TabNavigator({
    News: {
        screen: News,
    },
    Feed: {
        screen: ScrollFilms,
    },
    Search: {
        screen: Search,
    }
},
{
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: 'white',
        },
        indicatorStyle: {
            backgroundColor: 'black'
        },
        
        //pressColor: 'red',

        
    },

});