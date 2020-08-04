import 'react-native-gesture-handler';
import * as React from 'react';
import { createAppContainer, NavigationActions } from 'react-navigation';
import { createStackNavigator,NavigationStackOptions } from 'react-navigation-stack';
import reduxLink from '../screen/reduxLink'
import signupScreen from '../authentication/signupScreen';
import loginScreen from '../authentication/loginScreen'
import dashboard from '../screen/dashboard'
import adminScreen from '../screen/adminScreen'
import deleteScreen from '../screen/deleteScreen'
import { deleteMovie } from '../database/allQuerySchema';
import userdashboard from '../screen/userDashboard'
const StackNavigation = createStackNavigator(
    {
        dashboard:{screen:dashboard},
        loginScreen:{screen:loginScreen,navigationOptions:{header:false}},
        signupScreen:{screen:signupScreen},
        adminScreen:adminScreen,
        deleteScreen:deleteScreen,
        userdashboard:userdashboard
    },
    {
        initialRouteName: 'loginScreen',
      },
)
export default createAppContainer(StackNavigation);