import React from 'react'
import { createMaterialTopTabNavigator,  } from 'react-navigation'
import { View, Text } from 'react-native';
import { Dimensions } from "react-native";
import ClubCatch from '../Categories/ClubCatch';
import MyComponent from '../Screens/HomeScroll';


class TopNavigationTabs extends React.Component {


    
    render(){
        return(
            <View style={{flex:1}}>
            <TopNavigation/>
            </View>

        );
    }
}


class MarketplaceDeals extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello Club MarketplaceDeals</Text>
            </View>
        );

    }
}
class Womens extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello Club Womens</Text>
            </View>
        );

    }
}
class Mens extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello Club Mens</Text>
            </View>
        );

    }
}
class Home extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello Club Home</Text>
            </View>
        );

    }
}
class Beauty extends React.Component {
    render() {
        return (
            <View>
                <Text>Hello Club Beauty</Text>
            </View>
        );

    }
}

const TopNavigation = createMaterialTopTabNavigator ({
    
    New: MyComponent,
    ClubCatch: ClubCatch,
    MarketplaceDeals: MarketplaceDeals,
    Womens: Womens,
    Mens: Mens,
    Home: Home,
    Beauty: Beauty,
    // SportsandOutdoors: SportsAndOutdoors,
    // Groceries: Groceries,
    // Tech: Tech,
    // KidsAndBaby: KidsAndbaby,
    // Entertainment: Entertainment,
    // Pets: Pets,
    // ToysAndGames: ToysAndGames,
    // Outlets: Outlets,

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