import React from 'react';
import { StyleSheet, Text, View, FlatList, Platform, StatusBar} from 'react-native';
import { createDrawerNavigator } from 'react-navigation'
import {Icon, Container, Content, Header, Left, Right, Body, List, ListItem } from 'native-base'

import HomeScreen from './screens/HomeScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppDrawerNav />
    );
  }
}

const customDrawerContentComponent = (props)=> {
  return(
    <Container>
      <Header style={[{ backgroundColor: '#3a455c', height: 75}, styles.androidHeader]}>
      <Left style={{flex:1, flexDirection:'row', alignItems: 'center'}}>
        <Icon name="ios-person" style={{color: 'white'}} />
        <Text style={{marginLeft: 5, fontSize: 20, color: 'white', fontStyle: 'italic' }}>Hello, Angel</Text>
      </Left>
      </Header>
      <Content>
        <FlatList
        style={{borderTopWidth: .5, borderTopColor: '#f0f0f0'}}
          data={[
            'Home', 'Shop by Category', "Today's Deals"
          ]}
          renderItem={({item}) =>(
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        
        />

        <FlatList
        style={{borderTopWidth: .5, borderTopColor: '#f0f0f0'}}
          data={[
            'Your Wish List', 'Your Account', "Amazon Pay", "Prime", "Sell on Amazon"
          ]}
          renderItem={({item}) =>(
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        
        />

        <FlatList
        style={{borderTopWidth: .5, borderTopColor: '#f0f0f0'}}
          data={[
            'Settings', 'Customer Service' 
          ]}
          renderItem={({item}) =>(
            <ListItem noBorder>
              <Text>{item}</Text>
            </ListItem>
          )}
        
        />
      </Content>
    </Container>
  )
}

const AppDrawerNav = createDrawerNavigator ({
  HomeScreen: {screen:HomeScreen}
},{
  drawerPosition: 'left',
  contentComponent: customDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidHeader:{
    ...Platform.select({
        android: {
            paddingTop: StatusBar.currentHeight,
        }
    })
}
});
