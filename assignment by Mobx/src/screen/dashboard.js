import React, { Component,useState, useEffect } from 'react';
import {View,Text,Button,TextInput,FlatList,TouchableOpacity,Image} from 'react-native'
import { addMovie,deleteMovie,getMovies } from '../database/allQuerySchema';
import { exp } from 'react-native-reanimated';
import {Moviess} from  '../database/schemas'
import Realm from 'realm'
import { ScrollView } from 'react-native-gesture-handler';
import adminScreen from './adminScreen'
import styles from '../styleSheet/styles'
import deleteScreen from './deleteScreen'
import updateScreen from './updateScreen'
const dashboard=({navigation})=> { 
let realm;
realm=new Realm({schema:[Moviess]})
var newob=realm.objects('moviess')
console.log(newob)
return(
  <View>
    <View style={styles.HeaderLine}>
      <Text style={{fontSize:30,marginHorizontal:30}}>List of Movies</Text>
    <TouchableOpacity
  style={styles.Iconcontainer}
  onPress={()=>navigation.navigate('adminScreen')}>
      <Image style={{width:'120%',height:'110%'}} source={require('../../assests/plusIcon.png')} />
  </TouchableOpacity>
  <TouchableOpacity
  style={styles.Iconcontainer}
  onPress={()=>navigation.navigate('updateScreen')}>
    <Image style={{width:'110%',height:'110%'}} source={require('../../assests/update.jpg')} />
  </TouchableOpacity>
  <TouchableOpacity
  style={styles.Iconcontainer}
  onPress={()=>navigation.navigate('deleteScreen')}>
     <Image style={{width:'110%',height:'110%'}} source={require('../../assests/delete.png')} />
  </TouchableOpacity>
  </View>
<FlatList
data={newob}
renderItem={({ item }) =>(
<View style={styles.Headerflatlist} >
  <ScrollView>
<Text>{"movie Name : "+item.name}</Text>
<Text>{"movie genre : "+item.genre}</Text>
<Text>{"movie description : "+item.description}</Text>
<Text>{"movie url : "+item.url}</Text>
<Image resizeMode='contain' source={{uri:`${item.url}`}}/>
</ScrollView>
</View>
)}
keyExtractor={(item, index) => index.toString()}
/>
  </View>
)  
}
export default dashboard;