import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Icon} from 'native-base';

export default class AccountTab extends React.Component {
static navigationOptions = {
    tabBarIcon: ({tintColor}) => (<Icon name="ios-person" style ={{color:tintColor}} />)
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Account Tab</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})