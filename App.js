import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Components/Screens/HomeScreen';
import NewNavigator from './Components/Categories/New'
export default class App extends React.Component {
  render() {
    return (
      <NewNavigator/>
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
});
