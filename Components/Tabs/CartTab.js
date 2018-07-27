import React from 'react'
import {Text, View, Image } from 'react-native'
import {Icon} from 'native-base';
import styles from '../Style/Style';

export default class CartTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Icon name="ios-cart" style ={{color:tintColor}} />)
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Cart Tab</Text>
      </View>
    )
  }
}