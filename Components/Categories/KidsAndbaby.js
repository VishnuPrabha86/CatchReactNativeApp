import React, { Component } from 'react';
import {ActivityIndicator,ListView,Text,View,Alert} from "react-native";
import { Dimensions } from "react-native";
import Image from 'react-native-scalable-image';
import {Icon} from 'native-base';
import styles from '../Style/Style';


export default class KidsAndBaby extends React.Component {
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
      "https://cotdapi.devcat.ch/v1/shops.json?&osName=React&fields=events&ids=19"
    )
    .then(response => response.json())
    
    .then(responseJson => {
      let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.setState(
        {
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.shops[0].events),
          
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
            
            <View style={styles.row}>
              <Image
                width={Dimensions.get("window").width}
                source={{ uri: rowData.banner_image_url }}
                //onPress={this.GetItem.bind(this, rowData.event_id)}
                onPress={() => this.props.navigation.navigate('signupScreen')}
              />

              <View style={styles.bannerText}>
                <Text> {rowData.event_id}</Text>

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
