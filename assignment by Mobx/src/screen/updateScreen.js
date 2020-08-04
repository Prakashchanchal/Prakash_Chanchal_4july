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
const [movieGenre,setMovieGenre]=useState('')
const [movieDescription,setMovieDescription]=useState('')
const [movieUrl,setMovieUrl]=useState('')
const [realm,setRealm]=useState(null)
const updateMovie=async()=>{
  Realm.open({schema:[Moviess]})
  .then(realm=>{
      realm.write(()=>{
      const user =realm.objects('moviess').filtered(`name='${movieName}'`);
              user.name=movieName,
                user.genre=movieGenre,
                user.description=movieDescription,
                user.url=movieUrl
        })
      })
  }
   
    return(
        <View >
    
  <TextInput
  placeholder='name of movie'
  onChangeText={(name)=>setMovieName(name)}
  />
  <TextInput
  placeholder='name of movie'
  onChangeText={(name)=>setMovieGenre(name)}
  />
  <TextInput
  placeholder='name of movie'
  onChangeText={(name)=>setMovieDescription(name)}
  />
  <TextInput
  placeholder='name of movie'
  onChangeText={(name)=>setMovieUrl(name)}
  />
  <Button
  title='update Movie'
  onPress={()=>{
      updateMovie()
    navigation.navigate('dashboard')
  }}/>
  </View>

    )
}
export default AdminScreen;