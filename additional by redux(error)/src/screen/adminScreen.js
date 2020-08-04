import React, { Component,useState } from 'react';
import {View,Text,Button,TextInput,FlatList} from 'react-native'
import { addMovie} from '../database/allQuerySchema';
import { exp } from 'react-native-reanimated';
import {Movies} from  '../database/schemas'
import Realm from 'realm'
import dashboard from './dashboard'
import { ScrollView } from 'react-native-gesture-handler';
const AdminScreen=({navigation})=>
{   const [movieName,setMovieName]=useState('')
const [movieGenre,setMovieGenre]=useState('')
const [movieUrl,setMovieUrl]=useState('')
const [getMovies,setGetMovies]=useState('')
    return(
        <View >
    
  <TextInput
  placeholder='name of movie'
  onChangeText={(name)=>setMovieName(name)}
  />
  <TextInput
  placeholder='movie genre'
  onChangeText={(genre)=>setMovieGenre(genre)}
  />
  <TextInput
  placeholder='movie Url'
  onChangeText={(url)=>setMovieUrl(url)}
  />
  <Button
  title='add Movie'
  onPress={()=>{
    const movieData={
      name:movieName,
      genre:movieGenre,
      url:movieUrl
    }
    setGetMovies(movieData)
    addMovie(getMovies)
    navigation.navigate('dashboard')
  }}/>
  </View>

    )
}
export default AdminScreen;