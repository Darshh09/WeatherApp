import React, { Component , useState , useEffect} from 'react';
import {Text , View , StyleSheet, Image} from 'react-native';

export default function Header(props){

       return(
           <View>
               <Text style = {styles.text}>Weather Forecast</Text>
               <Image style = {styles.image} source={{uri : 'http://'+ props.icon}} />
               <Text style = {styles.text2}>{props.temp}</Text>
               <Text style = {styles.city}>{props.name},{props.country}</Text>
           </View>
       )
}

const styles = StyleSheet.create({
    text: {
        fontSize : 24,
        fontWeight : 'bold',
        textAlign : 'center',
        color : '#333'
    },
    image : {
         height : 80,
         width : 80,
         alignSelf : "center",
         marginVertical : 10
    },

    text2 : {
         fontWeight : '700',
         fontSize : 36,
         textAlign : "center"
    },

   city : {
       fontSize : 24,
       color : '#777',
       textAlign : 'center'
   }
})