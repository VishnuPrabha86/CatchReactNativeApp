import React from "react";
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

