import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';


import {CardItem, Right } from 'native-base'
import {StarRating} from 'react-native-star-rating'

export default class RecommendedCardItem extends Component {
    render(){
        return (
            <CardItem>
                <View style={{ flex:1, alignItems: 'flex-start' }}>
                    <Image style={{height:90, height:60, resizeMode: 'contain'}}
                            source={this.props.imageUri} />
                </View>
                <Right style={{flex:1, alignItems: 'flex-start', height: 90, paddingHorizontal: 20}}>
                    <Text>{this.props.itemName}</Text>
                    <Text style={{color: 'grey', fontSize: 11}}>{this.itemCreator}</Text>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#c4402f'}}>{this.props.itemPrice}</Text>
                    <Text><Text style={{color:'grey', fontWeight:'300', fontSize:11}}>
                        You save:
                        </Text> ${this.props.savings}</Text>

                        <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={this.props.rating}
                            starSize={12}
                            fullStarColor='orange' 
                            emptyStarColor='orange'
                            ></StarRating>
                </Right>
            </CardItem> 
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});