import React, { Component } from 'react'
import {} from 'react-native'
import {connect} from 'react-redux'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import{addUser} from '../database/allQuerySchema'
import { exp } from 'react-native-reanimated'

 const initialState={
    username:'',
    password:'',
    email_id:'',
}
function reduxLink(state=initialState,action)
{
    const emailreg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const usernamereg = /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/;
    switch(action.type)
    {   case 'USERNAME':
        return state.username=user
        case 'EMAIL':
        return state.email_id=email
        case 'PASSWORD':
        return state.password=pass
        case 'VALIDATION':
            
         const validation=()=>
          {    
        if(username == null || email_id == null || password == null){
            alert('Enter value in all fields')
        }
        else if (usernamereg.test(username) !== true){
          alert('please enter valid username')
        }
        else if(emailreg.test(email_id) !== true ){
          alert('Please enter valid email address!!')
        }
        else{
            const  userData={
                username:state.username,
                email_id:state.email_id,
                password:state.password
              }
              addUser(userData)
            }
        }
        return validation;
        default:
            return state
    }
}
export default reduxLink;

