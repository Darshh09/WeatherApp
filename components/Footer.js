import React, { Component ,useEffect, useState} from 'react';
import {View, Text , StyleSheet,Image} from 'react-native';


export default function Footer(props){
    
        return(
            <View>
               <Text style={styles.heading}>Addition Info</Text>
            <View style = {styles.weatherDetailsRow}>
                <View style = {{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor : "#dbdbdb"}}>
                <View style = {styles.weatherDetailsRow}>
                  <Image source= {require('../assests/temp.jpg')} style = {{width: 50, height : 50}}/>
                  <View style = {styles.weatherDetailsItems}>
                      <Text>Feels Like:</Text>
                      <Text style = {styles.textSecondary}>{props.feelsLike}</Text>
                  </View>
               </View>
               </View>
               <View style = {styles.weatherDetailsBox}>
               <View style = {styles.weatherDetailsRow}>
               <Image source= {require('../assests/waterdrop.png')} style = {{width: 50, height : 50}}/>
                  <View style = {styles.weatherDetailsItems}>
                      <Text>Humidity:</Text>
                      <Text style = {styles.textSecondary}>{props.humidity}</Text>
                  </View>
               </View>
               </View>
            </View>
            <View style = {styles.weatherDetailsRow}>
                <View style = {{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor : "#dbdbdb"}}>
                <View style = {styles.weatherDetailsRow}>
                <Image source= {require('../assests/wind.png')} style = {{width: 50, height : 50}}/>
                  <View style = {styles.weatherDetailsItems}>
                      <Text>Wind Speed:</Text>
                      <Text style = {styles.textSecondary}>{props.windSpeed}</Text>
                  </View>
               </View>
               </View>
               <View style = {styles.weatherDetailsBox}>
               <View style = {styles.weatherDetailsRow}>
               <Image source= {require('../assests/pressure.jpg')} style = {{width: 50, height : 50}}/>
                  <View style = {styles.weatherDetailsItems}>
                      <Text>Pressure:</Text>
                      <Text style = {styles.textSecondary}>{props.pressure}</Text>
                  </View>
               </View>
               </View>
            </View>
            </View>
        )
}

const styles = StyleSheet.create({
    heading: {
        fontSize: 22,
        fontFamily: 'Arial',
        textAlign: 'left',
        marginVertical: 15,
        marginLeft:20,
        marginTop:30
    },
    container :{
        flexDirection: 'row',
        marginVertical:10,
        justifyContent: 'space-between',
        marginRight: 20,
        marginLeft:20
    },
    ainfo:{
       fontWeight: '400',
       paddingLeft : 10
    },

    weatherDetailsRow:{
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'space-between'
    },

    weatherDetailsBox:{
        flex:1,
        padding:20
    },
    weatherDetailsItems:{
        alignItems:'flex-end',
        justifyContent: 'flex-end'
    },
    textSecondary:{
        fontSize : 15,
        color : '#002651',
        fontWeight : '700',
        margin : 7
    }
})