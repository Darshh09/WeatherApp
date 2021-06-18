import React , {useState}from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Alert, Image, ImageBackground} from 'react-native';
import {TextInput, Title} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { event } from 'react-native-reanimated';


const userInfo = {username : 'ReactDev', password : 'ReactDev@1234'};

const Handle = () => {

}

export default function LoginScreen({navigation}) {

    navigationOptions: { headerShown: false }
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
      <View style = {{background : "yellow"}}>
          <ImageBackground source={require('../assests/background.jpg')} style={styles.backgroundImage}>
          <Title style = {styles.TitleDec}>Weather App</Title>
        <TextInput style = {styles.container}
        mode = 'outlined'
      label="Email"
      outlineColor = '#5273EB'
      value = {username}
      onChangeText = {e => setUsername(e)}
    />

    <TextInput style = {styles.container, {margin : 20}} mode = 'outlined' label = 'Password' outlineColor = '#5273EB' value = {password} onChangeText = {e => setPassword(e)} />
        <TouchableOpacity style = {styles.appButtonContainer} onPress={() => userInfo.username === username && userInfo.password === password ? navigation.navigate('Home') : alert('invalid')}>
        <Text style={styles.appButtonText}> Login </Text>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }

const styles = StyleSheet.create({
    container : {
        marginTop : 20,
        marginEnd : 20,
        marginStart : 20,
        borderColor : "white",
    },
    
    Button : {
       color : "red",
       width : 50,
       height : 50
    },

    TitleDec : {
        marginTop : 100,
        marginBottom : 125,
        color : "white",
        alignItems : "center",
        textAlign : "center",
        fontSize : 28
    },
    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: 'cover'
    },

    appButtonContainer: {
        elevation: 8,
        marginTop : 20,
        marginStart : 20,
        marginEnd : 20,
        backgroundColor: "#5273EB",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
});