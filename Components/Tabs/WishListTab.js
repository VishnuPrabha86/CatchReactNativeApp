import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Icon} from 'native-base';
import styles from '../Style/Style';

export default class WishListTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Icon name="ios-heart" style ={{color:tintColor}} />)
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Wish List  Tab</Text>
      </View>
    )
  }
}
