import 'react-native-gesture-handler';
import React,{useState}  from 'react';
import { View, Text, StyleSheet, Button,Image,ImageBackground,TouchableOpacity,ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../styleSheet/styles'
import {addUser,getUser} from '../database/allQuerySchema'
import {useDispatch,useSelector} from 'react-redux'
const signupScreen=({navigation})=>
{  
    const[UserName,setUserName]=useState('');
    const[Password,setPassword]=useState('');
    const[Email,setEmail]=useState('');
    const [signupUser,setsignupUser]=useState('')
    const validation=()=>{
        const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const usernamereg = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
        if(UserName == null || Email == null || Password == null){
            alert('Enter value in all fields')
        }
        else if (usernamereg.test(UserName) !== true){
          alert('please enter valid username')
        }
        else if(emailreg.test(Email) !== true ){
          alert('Please enter valid email address!!')
        }
        else{
            const  userData={
                username:UserName,
                email_id:Email,
                password:Password
              }
              addUser(userData)
            }
        }
 return(
    <View style={styles.center}>
        <ImageBackground source={require('../../assests/drop.jpg')} style={styles.backgroundImage}>
        <Image source={require('../../assests/babygroot2.jpeg')} style={styles.image}/>
        <TextInput 
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder={'Enter your username'}
        placeholderTextColor={'white'}
        value={UserName}
        onChangeText={name =>setUserName( name )}
        style={styles.input}
        />
        <TextInput
        placeholder={'Enter your email_id'}
        placeholderTextColor={'white'}
        underlineColorAndroid='rgba(0,0,0,0)'
        value={Email}
          onChangeText={email =>setEmail(email)}
        style={styles.input}
        />
        <TextInput
        placeholder={'Enter your Password'}
        placeholderTextColor={'white'}
        secureTextEntry={true}
        underlineColorAndroid='rgba(0,0,0,0)'
        value={Password}
          onChangeText={password =>setPassword(password)}
        style={styles.input}
        />
        <View style={styles.buttonCenter}>
        <TouchableOpacity style={styles.container}
        onPress={validation}>
        <Text style={styles.txtcol}>Register</Text>
        </TouchableOpacity>
        <View style={styles.direction}>
        <Text style={{color:'white'}}>Goto login Page,   </Text>
        <TouchableOpacity
        onPress={()=>{navigation.navigate('loginScreen')}}>
        <Text style={{color:'skyblue'}}>login</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
    </View>
)
    }
export default signupScreen;