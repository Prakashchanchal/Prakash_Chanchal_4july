import React from 'react';
import 'react-native-gesture-handler';
//Import all required component
import { View, StyleSheet, Text, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import loginScreen from './loginScreen'
import styles from '../styleSheet/styles'
const DrawerMenu = (props) => {
  let items = [
    {
      navOptionName: 'Logout',
      screenToNavigate: 'logout',
    },
  ];
const handleClick = (index, screenToNavigate) => {
    if (screenToNavigate == 'logout') {
      props.navigation.toggleDrawer();
      Alert.alert(
        'Logout',
        'Are you sure? You want to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => {
              return null;
            },
          },
          {
            text: 'Confirm',
            onPress: () => {
              props.navigation.navigate('loginScreen');
              console.log('logout');
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      props.navigation.toggleDrawer();
      global.currentScreenIndex = screenToNavigate;
      props.navigation.navigate(screenToNavigate);
    }
  };
  return (
    <View style={styles.sideMenuContainer}>
     <View style={styles.profileHeaderLine}/>
      <View style={{ width: '100%', flex: 1 }}>
        {items.map((item, key) => (
          <View
            style={styles.stylecolor}
            key={key}
            onStartShouldSetResponder={() =>
              handleClick(key, item.screenToNavigate)
            }>
            <Text style={{ fontSize: 15, color: 'white' }}>
              {item.navOptionName}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DrawerMenu;