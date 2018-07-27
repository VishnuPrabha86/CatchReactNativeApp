import React, { Component } from 'react';
import { createMaterialTopTabNavigator,  } from 'react-navigation';
import { View } from 'react-native';
import { Dimensions } from "react-native";
import ClubCatch from '../Categories/ClubCatch';
import Beauty from '../Categories/Beauty';
import Entertainment from '../Categories/Entertainment';
import Groceries from '../Categories/Groceries';
import Home from '../Categories/Home';
import KidsAndBaby from '../Categories/KidsAndbaby';
import MarketplaceDeals from '../Categories/MarketplaceDeals';
import Mens from '../Categories/Mens';
import New from '../Categories/New';
import Outlets from '../Categories/Outlets';
import Pets from '../Categories/Pets';
import SportsAndOutdoors from '../Categories/SportsAndOutdoors';
import Tech from '../Categories/Tech';
import ToysAndGames from '../Categories/ToysAndGames';
import Womens from '../Categories/Womens';


class TopNavigationTabs extends React.Component {
    render(){
        return(
            <View style={{flex:1}}>
            <TopNavigation/>
            </View>

        );
    }
}



const TopNavigation = createMaterialTopTabNavigator ({
    
    New: New,
    ClubCatch: ClubCatch,
    MarketplaceDeals: MarketplaceDeals,
    Womens: Womens,
    Mens: Mens,
    Home: Home,
    Beauty: Beauty,
    SportsAndOutdoors: SportsAndOutdoors,
    Groceries: Groceries,
    Tech: Tech,
    KidsAndBaby: KidsAndBaby,
    Entertainment: Entertainment,
    Pets: Pets,
    ToysAndGames: ToysAndGames,
    Outlets: Outlets,

},{
    tabBarOptions: {
        scrollEnabled: true,
        labelStyle: {fontSize: 10},
    
    tabStyle:{width: Dimensions.get('window').width / 4,},
    style: {backgroundColor: '#0C84D8',},
    indicatorStyle: {backgroundColor: '#fff',}
},
})

TopNavigation.navigationOptions ={
    header: null,
}

export default TopNavigationTabs;