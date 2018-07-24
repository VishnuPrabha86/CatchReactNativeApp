import React from "react";
import { View, StyleSheet, Image } from "react-native";
import createTabNavigator from "react-navigation";
import BottomNavigation, {
  IconTab,
  Badge
} from "react-native-material-bottom-navigation";
import { NavigationComponent } from "react-native-material-bottom-navigation";

export default class BottomTabNaviagation extends React.Component {
  render() {
    return (
      <View>
        <MyTabNavigator />
      </View>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello _ HOME</Text>
      </View>
    );
  }
}

class Wishlist extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello _ Wishlist</Text>
      </View>
    );
  }
}

class Categories extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello _ Categories</Text>
      </View>
    );
  }
}

class Cart extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello _ Cart</Text>
      </View>
    );
  }
}

class Account extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello _ Account</Text>
      </View>
    );
  }
}

const MyTabNavigator = NavigationComponent({
  Home: { screen: Home },
  Wishlist: { screen: Wishlist },
  Categories: { screen: Categories },
  Cart: { screen: Cart },
  Account: { screen: Account }
});
