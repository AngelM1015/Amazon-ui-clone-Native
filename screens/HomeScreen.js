import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {Container,Content,Header,Left,Right,Icon} from 'native-base'

import FAIcon from 'react-native-vector-icons/FontAwesome'
export default class HomeScreen extends Component {
    render(){
        return (
           <Container>
               <Header style={{ backgroundColor: '#3a455c',
                    height: 90, borderBottomColor: '#757575'}}>
                    <Left style={{ flexDirection: 'row'}}>
                        <Icon name="md-menu" style={{color:'white', marginRight: 15}}/>
                        <FAIcon name="amazon" style={{fontSize: 32, color: 'white'}} />
                    </Left>
                    <Right>
                        <Icon name='md-cart' style={{color: 'white'}} />
                    </Right>
               </Header>
               <View style={{position: 'absolute', left:0,right:0, top:90,height:70, backgroundColor: '#3a455c', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5}}>
               <TouchableOpacity>
                   <View style={{width: 100, backgroundColor: '#e7e7eb', height: 50, borderRadius: 4, padding: 10 }}></View>
               </TouchableOpacity>
               
               <Text style={{fontSize: 12 }}>Shop by</Text>
               <Text style={{fontWeight: 'bold'}}>Category</Text>
               </View>
           </Container>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });