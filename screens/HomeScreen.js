import React, {useState ,useEffect} from 'react';
import {View , Button, Text, SafeAreaView, StyleSheet, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

export default function HomeScreen({navigation}) {
  const [info, setInfo] = useState({
    name:"loading !!",
    temp:"loading",
    humidity:"loading",
    desc:"loading",
    desc:"loading",
    icon:"loading",
    country:"loading",
    pressure:"loading",
    wind:"loading",
    feelsLike:'loading'
  })

  useEffect(()=>{
    getWeather()
  },[])

  const getWeather = () =>{
     fetch('http://api.weatherapi.com/v1/current.json?key=541e3bd921574ccb8fb92318212905&q=London&aqi=no')
     .then(data => data.json()
     .then(results => setInfo({
       name: results.location.name,
       temp: results.current.temp_c,
       humidity: results.current.humidity,
       desc:results.current.condition.text,
       icon:results.current.condition.icon,
       country:results.location.country,
       pressure: results.current.pressure_in,
       wind: results.current.wind_kph,
       feelsLike:results.current.feelslike_c
     })))
  }

  
  return(
    <SafeAreaView>
      <ImageBackground source = {require('../assests/full-background-1.jpg')} style = {styles.backgroundImage}>
      <ScrollView>
      <View>
          <Header name = {info.name} temp = {info.temp} country = {info.country}  icon = {info.icon}/>
          <Content />
          <Footer feelsLike = {info.feelsLike} pressure = {info.pressure} windSpeed = {info.wind} humidity = {info.humidity}/>
          <TouchableOpacity style = {styles.appButtonContainer} onPress={() => navigation.goBack()}>
        <Text style={styles.appButtonText}> Logout </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </ImageBackground>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1, 
    margin : 20
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover'
},

appButtonContainer: {
  width:150,
  elevation: 8,
  marginTop : 20,
  marginStart : 20,
  marginEnd : 20,
  backgroundColor: "#00688B",
  borderRadius: 10,
  paddingVertical: 10,
  alignSelf : 'flex-end',
  marginBottom: 15,
  paddingHorizontal: 12
},
appButtonText: {
  fontSize: 18,
  color: "#fff",
  fontWeight: "bold",
  alignSelf: "center",
  textTransform: "uppercase"
}

})