import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from 'react-navigation'
import HomeScreen from './screens/HomeScreen'
export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNav />
    );
  }
}

const AppDrawerNav = createDrawerNavigator ({
  HomeScreen: {screen:HomeScreen}
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
