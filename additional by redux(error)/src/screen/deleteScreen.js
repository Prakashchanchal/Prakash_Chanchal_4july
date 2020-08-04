import React, { Component,useState } from 'react';
import {View,Text,Button,TextInput,FlatList} from 'react-native'
import { addMovie, deleteMovie} from '../database/allQuerySchema';
import { exp } from 'react-native-reanimated';
import {Movies} from  '../database/schemas'
import Realm from 'realm'
import dashboard from './dashboard'
import { ScrollView } from 'react-native-gesture-handler';
const AdminScreen=({navigation})=>
{   const [movieName,setMovieName]=useState('')

    return(
        <View >
    
  <TextInput
  placeholder='name of movie'
  onChangeText={(name)=>setMovieName(name)}
  />
  <Button
  title='add Movie'
  onPress={()=>{
    deleteMovie(movieName)
    navigation.navigate('dashboard')
  }}/>
  </View>

    )
}
export default AdminScreen;