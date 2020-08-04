import React, { Component,useState } from 'react';
import {View,Text,Button,TextInput,FlatList,TouchableOpacity,Image,Picker} from 'react-native'
import { addMovie,deleteMovie } from '../database/allQuerySchema';
import { exp } from 'react-native-reanimated';
import {Movies} from  '../database/schemas'
import Realm from 'realm'
import { ScrollView } from 'react-native-gesture-handler';
import adminScreen from './adminScreen'
import styles from '../styleSheet/styles'
import deleteScreen from './deleteScreen'
const userdashboard=({navigation})=> {

  let realm;
realm=new Realm({schema:[Movies]})
var newob=realm.objects('movies')


console.log(newob)

return(
  <View>
      <Picker>
          <Picker.Item  label='Romantic' />
          <Picker.Item label='Horror'/>
          <Picker.Item label='Thirller'/>
      </Picker>
<FlatList
//data={this.state.dataSource}
data={newob}
initialNumToRender={2}
renderItem={({ item }) =>
<View style={{ flex: 1 ,justifyContent:'space-around',marginVertical:20}} >
<ScrollView>
<Text>{"movie Name : "+item.name }</Text>
<Text>{"movie genre : "+item.genre}</Text>
<Image source={{uri:`${item.url}`}}/>
</ScrollView>
</View>
}
keyExtractor={(item, index) => index.toString()}
/>
  
  </View>
)  
}
export default userdashboard;