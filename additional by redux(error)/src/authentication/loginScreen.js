import 'react-native-gesture-handler';
import React,{useState, useContext}  from 'react';
import { View, Text, StyleSheet, Button,StatusBar,Image,ImageBackground,TouchableOpacity,ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Schemas,Admin} from '../database/schemas'
import * as Animatable from 'react-native-animatable';
import styles from '../styleSheet/styles'
import signupScreen from './signupScreen'
import { color } from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Realm from 'realm'
import dashboard from '../screen/dashboard'
import {addAdmin} from '../database/allQuerySchema'
import userdashboard from '../screen/userDashboard'
const loginScreen=(props)=>
{
    const[UserName,setUserName]=useState('');
    const[Password,setPassword]=useState('');
const validation=()=>{
    let realm,dmin;
realm=new Realm({schema:[Schemas]})
var newob=realm.objects('signupUser')
console.log(newob)
dmin=new Realm({schema:[Admin]})
var newobject=dmin.objects('admin')
console.log(newobject)
if(UserName=='')
{
  alert("fill the username")
  return false;
}
else if(Password=='')
{
  alert('fill the password')
  return false;
}
else if(newobject.username==UserName.UserName&&newobject.password==Password.Password)
     {  
     props.navigation.navigate('dashboard')
  
        return true;
      }

else if(UserName===UserName||Password!=null)
    {
      for(let arr of newob)
      {
        if(arr.username==UserName.UserName&&arr.password==Password.Password)
     {  
     props.navigation.navigate('userdashboard')
  
        return true;
      }
      
    }

      alert("enter the correct username and password");
return false
      
}
}
return(
    
    <View style={styles.center}>
         <StatusBar backgroundColor="#1f4172" barStyle="light-content" />
      
        <ImageBackground source={require('../../assests/cloud.jpg')} style={styles.backgroundImage}>
        <Image source={require('../../assests/BabyGroot1.jpg')} style={styles.image}/>
        <TextInput 
        onChangeText={data =>setUserName({ UserName: data })}
        placeholder={'username'}
        placeholderTextColor={'white'}
        underlineColorAndroid='rgba(0,0,0,0)'
        style={styles.input}
        />
        <TextInput
        placeholder={'Password'}
        secureTextEntry={true}
        placeholderTextColor={'white'}
        underlineColorAndroid='rgba(0,0,0,0)'
        onChangeText={data =>setPassword({ Password: data })}
        style={styles.input}
        />
        <View style={styles.buttonCenter}>
        <TouchableOpacity style={styles.container}
        onPress={validation}
        >
        <Text style={styles.txtcol}>Login</Text>
        </TouchableOpacity>
        <View style={styles.direction}>
        <Text style={{color:'white'}}>Create new account,  </Text>
        <TouchableOpacity onPress={()=>{props.navigation.navigate('signupScreen')}}>
        <Text style={{color:'skyblue'}}>signUp</Text>
        </TouchableOpacity>
        </View>
        </View>
        
        </ImageBackground>
        </ View>
        
    
)
}

export default loginScreen;