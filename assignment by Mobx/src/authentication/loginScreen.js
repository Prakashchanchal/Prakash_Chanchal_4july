import 'react-native-gesture-handler';
import React,{useState, useContext, Component}  from 'react';
import { View, Text, StyleSheet, Button,StatusBar,Image,ImageBackground,TouchableOpacity,ActivityIndicator} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Schemas,Admin} from '../database/schemas'
import styles from '../styleSheet/styles'
import signupScreen from './signupScreen'
import { color } from 'react-native-reanimated';
import Realm from 'realm'
import dashboard from '../screen/dashboard'
import {addAdmin} from '../database/allQuerySchema'
import userdashboard from '../screen/userDashboard'
import switchExamole from './switchExample'
import {observable,action} from 'mobx'
import {observer} from 'mobx-react'
@observer
class loginScreen extends Component
{
   @observable UserName=''
   @observable Password=''
   @observable switch1Value=false
@action validation=()=>{
    let realm;
realm=new Realm({schema:[Schemas]})
var newob=realm.objects('signupUser')
console.log(newob)
if(this.UserName=='')
{
  alert("fill the username")
  return false;
}
else if(this.Password=='')
{
  alert('fill the password')
  return false;
}
else if(this.UserName===this.UserName||this.Password!=null)
    {
      for(let arr of newob)
      {
        if(arr.username==this.UserName&&arr.password==this.Password)
     {  
     this.props.navigation.navigate('userdashboard')
  
        return true;
      }
    }
     alert("enter the correct username and password");
return false
}
}
@action adminValidation=()=>
{
  let realm
realm=new Realm({schema:[Admin]})
var newobject=realm.objects('admin')
console.log(newobject)

if(this.UserName=='')
{
  alert("fill the username")
  return false;
}
else if(this.Password=='')
{
  alert('fill the password')
  return false;
}
else if(newobject.username==this.UserName.UserName&&newobject.password==this.Password.Password)
     {  
    this.props.navigation.navigate('dashboard')
  
        return true;
      }

      alert("enter the correct username and password");
return false
      
}
toggleSwitch1 = (value) => {this.switch1Value= value 
} 
render()
{
return(
    
    <View style={styles.center}>
         <StatusBar backgroundColor="#1f4172" barStyle="light-content" />
        <ImageBackground source={require('../../assests/cloud.jpg')} style={styles.backgroundImage}>
        <SwitchExample
            toggleSwitch1 = {this.toggleSwitch1}
            switch1Value = {this.switch1Value}/>
        <Image source={require('../../assests/naruto.png')} style={styles.image}/>
        <TextInput 
        onChangeText={data =>this.UserName=data}
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
        onChangeText={data =>this.Password=data}
        style={styles.input}
        />
        <View style={styles.buttonCenter}>
          {(this.switch1Value===true)?
        <TouchableOpacity style={styles.container}
        onPress={this.validation}
        >
        <Text style={styles.txtcol}>Login</Text>
        </TouchableOpacity>:
        <TouchableOpacity style={styles.container}
        onPress={this.adminValidation}
        >
        <Text style={styles.txtcol}>adminLogin</Text>
        </TouchableOpacity>
}
        <View style={styles.direction}>
        <Text style={{color:'white'}}>Create new account,  </Text>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('signupScreen')}}>
        <Text style={{color:'skyblue'}}>signUp</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ImageBackground>
        </ View>    
)
}
}

export default loginScreen;