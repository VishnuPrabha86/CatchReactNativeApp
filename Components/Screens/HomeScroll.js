import React, { Component } from "react";
import Image from "react-native-scalable-image";
import {
  StyleSheet,
  ActivityIndicator,
  ListView,
  Text,
  View,
  Alert
} from "react-native";
import { Dimensions } from "react-native";
export default class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  GetItem(name) {
    Alert.alert(name);
  }

  componentDidMount() {
    return fetch(
      "https://cotdapi.devcat.ch/startup/2/?appVersion=2.20.0&app_version=2.20.0&osName=React"
    )
      .then(response => response.json())
      .then(responseJson => {
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.setState(
          {
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson.events)
          },
          function() {
            // In this block you can do something with new state.
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#000"
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color="purple" />
        </View>
      );
    }

    return (
      <View style={styles.MainContainer}>
        <ListView
          dataSource={this.state.dataSource}
          renderSeparator={this.ListViewItemSeparator}
          renderRow={rowData => (
            <View style={styles.row}>
              <Image
                width={Dimensions.get("window").width}
                source={{ uri: rowData.banner_image_url }}
                //onPress={this.GetItem.bind(this, rowData.event_id)}
                onPress={() => this.props.navigation.navigate('signupScreen')}
              />

              <View style={styles.bannerText}>
                <Text> {rowData.badge_text}</Text>

                <View style={styles.bannerext}>
                  <Text> {rowData.name}</Text>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    // Setting up View inside content in Vertically center.
    justifyContent: "center",
    flex: 1,
    margin: 0
  },

  rowViewContainer: {
    fontSize: 20,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 10
  }
});
