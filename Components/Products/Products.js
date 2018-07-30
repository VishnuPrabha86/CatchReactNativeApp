import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from '../Style/Style';

export default class Products extends React.Component {
    static navigationOptions =
    {
       title: "Products",
    };
  render() {
    return(
        <View style = { styles.MainContainer }>
  
        <Text style = { styles.TextStyle }> { this.props.navigation.state.params.EventId } </Text>
        <Text style = { styles.TextStyle }> { this.props.navigation.state.params.EventTitle } </Text>
     </View>
       );
  }
}
