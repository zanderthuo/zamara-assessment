import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import StaffScreen from '../screens/StaffScreen'
import EditStaffScreen from '../screens/StaffScreen'

const Stack = createStackNavigator();

const StaffStack = () => {
  return (
    <>
      <Stack.Screen name="Staff" component={StaffScreen} />
      <Stack.Screen name="Edit Staff" component={EditStaffScreen} />
    </>
  )
}

export default StaffStack
