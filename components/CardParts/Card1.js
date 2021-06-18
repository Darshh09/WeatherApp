import React, {Component} from 'react';
import {View , Text, StyleSheet, Image} from 'react-native';

export default class Card1 extends Component {

    render(){
        return(
            <View style={{alignItems : "center", justifyContent: 'space-around' , marginTop:10 , backgroundColor : this.props.bgcolor , borderRadius:20}}>
                <View style = {{ ...styles.bgcard, backgroundColor: this.props.color1, ...this.props.style, justifyContent : 'flex-start',
                  borderTopLeftRadius: 20, borderTopRightRadius:20}}>
                <Text style = {styles.text}>18:00</Text>
                <Image style = {styles.img} source = {this.props.img}/>
                </View>      
                <View style={{...styles.bgcard, backgroundColor : '#ff878d', zIndex: -1,
                           justifyContent : 'flex-end',  backgroundColor: this.props.color2 , ...this.props.style,
                           borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                    <Text style = {styles.text}>32</Text>
                </View>      
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img:{
        width : 100,
        height : 100,
        alignSelf : "center",
        marginTop:10,
        zIndex: 99
    },
    bgcard: {
        width: 120,
        height: 125,
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 28,
        textAlign:'center',
        marginVertical: 15
    }
})