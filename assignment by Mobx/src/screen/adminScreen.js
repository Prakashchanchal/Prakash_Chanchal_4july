import React, { Component,useState } from 'react';
import {View,Text,Button,TextInput,FlatList} from 'react-native'
import { addMovie,getMovies} from '../database/allQuerySchema';
import { exp } from 'react-native-reanimated';
import {Moviess} from  '../database/schemas'
import Realm from 'realm'
import dashboard from './dashboard'
import { ScrollView } from 'react-native-gesture-handler';
import {observable,action} from 'mobx'
import {observer} from 'mobx-react'
@observer
class AdminScreen extends Component

{     @observable movieName=''
      @observable movieGenre=''
      @observable movieDescp=''
      @observable movieUrl=''
     render()
     {
    return(
        <View >
    
  <TextInput
  placeholder='name of movie'
  onChangeText={(name)=>this.movieName=name}
  />
  <TextInput
  placeholder='movie genre'
  onChangeText={(genre)=>this.movieGenre=genre}
  />
  <TextInput
  placeholder='movie description'
  onChangeText={(descp)=>this.movieDescp=descp}
  />
  <TextInput
  placeholder='movie Url'
  onChangeText={(url)=>this.movieUrl=url}
  />
  <Button
  title='add Movie'
  onPress={()=>{
    const movieData={
      name:this.movieName,
      genre:this.movieGenre,
      description:this.movieDescp,
      url:this.movieUrl
    }
    addMovie(movieData)
    this.props.navigation.navigate('dashboard')
  }}/>
  </View>

    )
}
}
export default AdminScreen;