import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  ListView,
  Text,
  View,
  Alert
} from "react-native";
import { Dimensions } from "react-native";
import {Icon} from 'native-base';

export default class CategoriesTab extends React.Component {
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
      "https://cotdapi.devcat.ch/navigation-menu/osName=React"
    )
      .then(response => response.json())
      .then(responseJson => {
        let ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.setState(
          {
            isLoading: false,
            dataSource: ds.cloneWithRows(responseJson)
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
          backgroundColor: "#999999"
        }}
      />
    );
  };



  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Icon name="ios-search" style ={{color:tintColor}} />)
    }
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
              <View style={styles.bannerText}>
                  <Text onPress={this.GetItem.bind(this, rowData.name)} > {rowData.name}</Text>
                  <Text onPress={this.GetItem.bind(this, rowData.id)} > {rowData.id}</Text>
              </View>
            )}
          />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15,
  }
})