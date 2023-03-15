import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen'
import StaffScreen from '../screens/StaffScreen'
import ContinentsScreen from '../screens/ContinentsScreen'
import LoginScreen from '../screens/LoginScreen'
import StartScreen from '../screens/StartScreen'
import EditStaffScreen from '../screens/EditStaffScreen'

const Drawer = createDrawerNavigator();

const Menu = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator initialRouteName="StartScreen">
        <Drawer.Screen name="StartScreen" component={StartScreen} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Staff" component={StaffScreen} />
        <Drawer.Screen name="Continents" component={ContinentsScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="EditScreen" component={EditStaffScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container : {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue' 
  }
})

export default Menu
