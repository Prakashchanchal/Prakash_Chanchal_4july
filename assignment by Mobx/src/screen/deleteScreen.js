import React, { Component,useState } from 'react';
import {View,Text,Button,TextInput,FlatList} from 'react-native'
import { addMovie, deleteMovie} from '../database/allQuerySchema';
import { exp } from 'react-native-reanimated';
import {Moviess} from  '../database/schemas'
import Realm from 'realm'
import dashboard from './dashboard'
import { ScrollView } from 'react-native-gesture-handler';
import { transaction } from 'mobx';
const AdminScreen=({navigation})=>
{   const [movieName,setMovieName]=useState('')

const deleteMovie=async()=>{
  Realm.open({schema:[Moviess]})
  .then(realm=>{
      realm.write(()=>{
      const user =realm.delete(realm.objects('moviess').filtered(`name='${movieName}'`))
      })
  })
}   
    return(
        <View >
    
  <TextInput
  placeholder='name of movie'
  onChangeText={(name)=>setMovieName(name)}
  />
  <Button
  title='Delete Movie'
  onPress={()=>{
      deleteMovie()
    navigation.navigate('dashboard')
  }}/>
  </View>

    )
}
export default AdminScreen;