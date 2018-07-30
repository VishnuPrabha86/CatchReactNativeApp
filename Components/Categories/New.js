import React, { Component } from 'react';
import {ActivityIndicator,ListView,Text,View,Alert} from "react-native";
import { Dimensions } from "react-native";
import Image from 'react-native-scalable-image';
import {createStackNavigator} from 'react-navigation';
import styles from '../Style/Style';
import Products from '../Products/Products'
class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  GetItem(name) {
    Alert.alert(name);
  }

  OpenSecondActivity (Data1, Data2){
     this.props.navigation.navigate('Products', { EventId: Data1, EventTitle: Data2  });
  }

  componentDidMount() {
    return fetch(
      "https://cotdapi.devcat.ch/startup/2/?appVersion=2.20.0&app_version=2.20.0&osName=React"
    )
      .then(response => response.json())
      .then(responseJson => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
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
          backgroundColor: "#999999",
        }}
      />
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
                onPress={this.OpenSecondActivity.bind(this, rowData.event_id, rowData.badge_text)}
                width={Dimensions.get("window").width}
                source={{ uri: rowData.banner_image_url }}
              />
              
                     

              <View style={styles.bannerText}>
                <Text > {rowData.badge_text}</Text>

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

 
export default NewNavigator = createStackNavigator({
  New: {screen: New,},
  Products: { screen: Products,},
  initialRouteName: 'New',
    
});
 
