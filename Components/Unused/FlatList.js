import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
  AsyncStorage,
} from "react-native";
import { FlatList, SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import Image from "react-native-scalable-image";

export default class New extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      isLoading: true
    };
  }
  renderItem({ item }) {
    return (
      <View style={styles.row}>
        <Image
          width={Dimensions.get("window").width}
          source={{ uri: item.banner_image_url }}
        />
        
        {/* <View style={styles.bannerText}>
          <Text>EVENT ID: {item.event_id}</Text>
        </View> */}
        <View style={styles.bannerText}>
          <Text> {item.badge_text}</Text>
        </View>
        <View style={styles.bannerText}>
          <Text> {item.name}</Text>
        </View>
      </View>
    );
  }

  renderSeparator = () => {
    return (
      <View style={{ height: 1, width: "100%", backgroundColor: "#eee" }} />
    );
  };

  componentDidMount() {
    const url =
      "https://cotdapi.devcat.ch/startup/2/?appVersion=2.20.0&app_version=2.20.0&brandCode=&osName=android";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson.events,
          isLoading: false,
          
        });
      })
      .catch(error => {
        console.log(" The error is " + error);
      });
      
  }



  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator size="large" color="purple" />
        </View>
      );
    }
    return (

      
      <SafeAreaView style={{ flex: 1 }}>
        {/* //TouchableOpacity */}
        <View onPress={() => ToastAndroid.show(item.id, ToastAndroid.SHORT)}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={this.renderSeparator}
            onPress={this.displayData}
          />
        </View>
      </SafeAreaView>
    );

   





}
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  item: {
    flex: 1,
    alignSelf: "stretch",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1
  },
  row: {
    marginTop: 5
  },

  bannerText: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center"
  }
});
