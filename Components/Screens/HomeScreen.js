import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "react-navigation";
import MainScreen from "./MainScreen";
import LoginScreen from "./LoginScreen";


export default class HomeScreen extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen },
  Login: { screen: LoginScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
