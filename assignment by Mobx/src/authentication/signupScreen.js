import 'react-native-gesture-handler';
import React,{useState, Component}  from 'react';
import { View, Text, StyleSheet, Button,Image,ImageBackground,TouchableOpacity,ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../styleSheet/styles'
import { action,computed,observable} from 'mobx'
import {observer} from 'mobx-react'
import {addUser,getUser} from '../database/allQuerySchema'
@observer
class signupScreen extends Component
{  
  constructor(props)
  {
    super(props);
  }
  @observable UserName=''
  @observable Password=''
  @observable Email=''
    
  @action validation=()=>{
        const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const usernamereg = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
        if(this.UserName == null || this.Email == null || this.Password == null){
            alert('Enter value in all fields')
        }
        else if (usernamereg.test(this.UserName) !== true){
          alert('please enter valid username')
        }
        else if(emailreg.test(this.Email) !== true ){
          alert('Please enter valid email address!!')
        }
        else{
            const  userData={
                username:this.UserName,
                email_id: this.Email,
                password:this.Password
              }
              addUser(userData)
              alert('sucessfully registered')
            }
        }
        render()
        {
 return(
    <View style={styles.center}>
        <ImageBackground source={require('../../assests/devil.png')} style={styles.backgroundImage}>
        <Image source={require('../../assests/sasuke.jpg')} style={styles.image}/>
        <TextInput 
        underlineColorAndroid='rgba(0,0,0,0)'
        placeholder={'Enter your username'}
        placeholderTextColor={'white'}
        value={this.UserName}
        onChangeText={name =>this.UserName=name}
        style={styles.input}
        />
        <TextInput
        placeholder={'Enter your email_id'}
        placeholderTextColor={'white'}
        underlineColorAndroid='rgba(0,0,0,0)'
        value={this.Email}
          onChangeText={email =>this.Email=email}
        style={styles.input}
        />
        <TextInput
        placeholder={'Enter your Password'}
        placeholderTextColor={'white'}
        secureTextEntry={true}
        underlineColorAndroid='rgba(0,0,0,0)'
        value={this.Password}
          onChangeText={password =>this.Password=password}
        style={styles.input}
        />
        <View style={styles.buttonCenter}>
        <TouchableOpacity style={styles.container}
        onPress={this.validation}>
        <Text style={styles.txtcol}>Register</Text>
        </TouchableOpacity>
        <View style={styles.direction}>
        <Text style={{color:'white'}}>Goto login Page,   </Text>
        <TouchableOpacity
        onPress={()=>{this.props.navigation.navigate('loginScreen')}}>
        <Text style={{color:'skyblue'}}>login</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
    </View>
)
    }
  }
export default signupScreen;