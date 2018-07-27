import React from "react";
import { StyleSheet, Platform, SafeAreaView } from "react-native";
import {createBottomTabNavigator,} from "react-navigation";
import HomeTab from "../Tabs/HomeTab";
import WishListTab from "../Tabs/WishListTab";
import CategoriesTab from "../Tabs/CategoriesTab";
import CartTab from "../Tabs/CartTab";
import AccountTab from "../Tabs/AccountTab";
import { SearchBar } from "react-native-elements";

export default class MainScreen extends React.Component {
  
  static navigationOptions = {
    header: (
     <SafeAreaView style={{backgroundColor: '#0C84D8', borderBottomWidth: 0}} >
        <SearchBar 
            lightTheme
            placeholder="Search..."
            platform="ios"
            containerStyle={{ backgroundColor: '#0C84D8', borderBottomWidth: 0 ,borderTopWidth: 0}}
            inputStyle={{backgroundColor: '#fff'}}
            style={{borderBottomWidth: 0}} 
          />
  </SafeAreaView>
    ),

    headerStyle: { backgroundColor: "#0C84D8" },
    headerTitleStyle: { color: "white" },
    headerBackTitleStyle: { color: "white" },
    headerTintColor: "white"
  };
  render() {
    return (
 
    <AppBottomTabNavigator />
    
    );
  }
}

const AppBottomTabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeTab },
    Wishlist: { screen: WishListTab },
    Categories: { screen: CategoriesTab },
    Cart: { screen: CartTab },
    Account: { screen: AccountTab }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: { backgroundColor: "white" }
        })
      },
      // activeTintColor: '#000',
      // inactiveTintColor: '#d1cece',
      showLabel: false,
      showIcon: true
    }
  }
);

