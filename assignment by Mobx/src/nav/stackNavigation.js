import 'react-native-gesture-handler';
import * as React from 'react';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator,NavigationStackOptions } from 'react-navigation-stack';
import {DrawerItems, createDrawerNavigator} from 'react-navigation-drawer';
import signupScreen from '../authentication/signupScreen';
import loginScreen from '../authentication/loginScreen'
import dashboard from '../screen/dashboard'
import adminScreen from '../screen/adminScreen'
import deleteScreen from '../screen/deleteScreen'
import { deleteMovie } from '../database/allQuerySchema';
import userdashboard from '../screen/userDashboard'
import splashScreen from '../authentication/splashScreen'
import logoutScreen from '../authentication/logoutScreen'
import updateScreen from '../screen/updateScreen'
const StackNavigation = createStackNavigator(
    {
        dashboard:{screen:dashboard,navigationOptions:{header:false}},
        loginScreen:{screen:loginScreen,navigationOptions:{header:false}},
        splashScreen:{screen:splashScreen,navigationOptions:{header:false}},
        signupScreen:{screen:signupScreen,navigationOptions:{header:false}},
        userdashboard:{screen:userdashboard,navigationOptions:{header:false}},
        adminScreen:adminScreen,
        deleteScreen:deleteScreen,
        updateScreen:updateScreen
    },
    {
        initialRouteName: 'splashScreen',
      },
)
      const DrawerNavigation=createDrawerNavigator(
        {
          dashboard:{
              screen:StackNavigation
          },
         },
           {
             contentComponent:logoutScreen,
            }
          ) 
export default createAppContainer(DrawerNavigation);