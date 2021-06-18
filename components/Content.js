import React, { Component, useState, useEffect } from 'react';
import {View , Text, StyleSheet} from 'react-native';
import Card1 from '../components/CardParts/Card1';

export default function Content(){
        return(
            <View style = {styles.container}>
                <Card1 img={require("../assests/rainy.png")} color1="orange" color2="#f56991" bgcolor = "orange" style={{borderTopLeftRadius: 70}}/>
                <Card1 img={require('../assests/sunny.png')}color1="#b53389" color2 = "#9932CC" bgcolor = "#9932CC"/>
                <Card1 img={require('../assests/nightt.png')}color1="#00688B" color2 = "#2F4F4F" bgcolor= "#2F4F4F" style={{borderBottomRightRadius: 70}}/>
            </View>
        )
}

const styles = StyleSheet.create({
    container : {
           marginTop: 20,
           flexDirection: 'row',
           justifyContent: 'space-around'
    }
})