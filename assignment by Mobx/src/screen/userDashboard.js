import React, { Component,useState, useEffect } from 'react';
import {View,Text,Button,TextInput,FlatList,TouchableOpacity,Image, RefreshControl} from 'react-native'
import { addMovie,deleteMovie } from '../database/allQuerySchema';
import { exp } from 'react-native-reanimated';
import {Moviess} from  '../database/schemas'
import Realm from 'realm'
import { ScrollView } from 'react-native-gesture-handler';
import adminScreen from './adminScreen'
import styles from '../styleSheet/styles'
import deleteScreen from './deleteScreen'
import {Picker} from '@react-native-community/picker'
const userdashboard=({navigation})=> {
  const [value,setValue]=useState('romantic')
const [refreshing,setRefreshing]=useState(false)
let realm,newob;
 realm=new Realm({schema:[Moviess]})
 newob=realm.objects('moviess')
return(
  <View>
      <Picker onValueChange={(value)=>{(itemValue,itemIndex)=>{
        if(itemIndex===value)
        {
          realm=new Realm({schema:[Moviess]})
          itemValue=realm.objects('moviess').filtered(`genre='${value}'`)
          return(
            <View>
              <FlatList
//data={this.state.dataSource}
data={itemValue}
initialNumToRender={2}
renderItem={({ item }) =>
<View style={styles.Headerflatlist} >
<ScrollView>
<Text>{"movie Name : "+item.name }</Text>
<Text>{"movie genre : "+item.genre}</Text>
<Text>{"movie description : "+item.description}</Text>
<Text>{'movie url: '+item.url}</Text>
</ScrollView>
</View>
}
keyExtractor={(item, index) => index.toString()}
/>
</View>
)}}}}>
    <Picker.Item  label='Romantic' value='Romantic' />
    <Picker.Item label='Horror' value='Horror'/>
    <Picker.Item label='Thirller' value='Thirller'/>
  </Picker>
  <Text style={{fontSize:30,marginHorizontal:30}}>List of Movies</Text>
<FlatList
data={newob}
renderItem={({ item }) =>(
<View style={styles.Headerflatlist} >
  
<ScrollView>
<Text>{"movie Name : "+item.name }</Text>
<Text>{"movie genre : "+item.genre}</Text>
<Text>{"movie description : "+item.description}</Text>
<Text>{'movie url: '+item.url}</Text>
</ScrollView>
</View>
)}
keyExtractor={(item, index) => index.toString()}
refreshControl={<RefreshControl
refreshing={refreshing}
onRefresh={userdashboard}
/>}
/>
</View>
)  
}
export default userdashboard;