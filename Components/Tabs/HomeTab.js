import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Icon } from "native-base";
import TopNavigationTabs from "../Navigation/TopNavigationTabs";

export default class HomeTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };

  render() {
    return <TopNavigationTabs />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
