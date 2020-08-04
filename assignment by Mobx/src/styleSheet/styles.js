import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, Button,Image,ImageBackground,TouchableOpacity,ActivityIndicator, Dimensions} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
export default StyleSheet.create(
{
    container:{
        borderWidth:1,
        height:42,
        width:"60%",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:40,
        backgroundColor:"skyblue",
        alignSelf:"center"
      },
      Iconcontainer:{
        height:34,
        width:"10%",
        justifyContent:'space-around',
        alignItems:'flex-end',
        borderRadius:50,
        alignSelf:'flex-end',
        marginVertical:10
      },
      backgroundImage:{
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      input: {
        color:'black', 
        height:50,
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        paddingHorizontal:16,
         marginVertical:10,
         borderColor:'white',
         borderRadius:25,
         alignItems:"center",
         justifyContent:"center"
            
      },
    center:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
        
        },
    buttonCenter:
    {   marginTop:'10%'
        ,width:'80%',
        
     },
     txtcol:{
        color:'white',
        flexDirection:'row'
     },
     image:{
      width:"40%",
      borderRadius:100,
      height:"25%",
      marginVertical:10,
      alignItems: 'center',
      justifyContent: 'center'
     },
     direction:{
      flexDirection:'row',
      justifyContent:'center',
      alignContent:'center',
      marginVertical:10
    },
    header:{
      width:'100%',
      height:'100%',
      
      alignItems:'center',
      justifyContent:'center'
    },
     sideMenuContainer: {
      width: '100%',
      height: '100%',
      backgroundColor: '#307ecc',
      paddingTop: 40,
      color: 'white',
    },
    profileHeader: {
      flexDirection: 'row',
      backgroundColor: '#307ecc',
      padding: 15,
      textAlign: 'center',
    },
  Headerflatlist: {
      flex: 1 ,
      justifyContent:'space-around',
      marginVertical:20,
      width:Dimensions.get('window').width,
      paddingHorizontal:15,
      borderStyle:'solid',
      borderColor:'red',
      borderBottomWidth:1.5
    },
    HeaderText: {
      fontSize:36,
      marginHorizontal:30
    },
  HeaderLine: {
      
        marginHorizontal:10,
        flexDirection:'row'
    },
    stylecolor:{
      flexDirection: 'row',
              alignItems: 'center',
              padding: 20,
              color: 'white',
    },
    viewimage:{
      alignSelf:'flex-end',
      height:60,
      width:60,
      borderBottomLeftRadius:25,
      borderTopRightRadius:25,
      borderTopLeftRadius:25,
      borderBottomLeftRadius:25
    },

    headerView: {
        flex: 1,
        backgroundColor: '#1f4172',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
      },
      footerView: {
        flex: 8,
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: '#000066',
        borderTopLeftRadius : 30,
        borderTopRightRadius : 30
      },
      action:{
        flexDirection:'row',
        marginTop: 8,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5
      },
      headerText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
      },
      footerText: {
        color: '#FEBBBB',
        fontSize: 18,
        paddingTop: 5,
        fontWeight: 'bold',
      },
      textInfo:{
        fontSize : 15,
        color: '#05375a',
        paddingHorizontal:5
      },
}
)
