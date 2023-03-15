import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from './screens/LoginScreen';
import StaffScreen from './screens/StaffScreen';
import EditStaffScreen from './screens/EditStaffScreen';
import Menu from './components/Menu'
import 'react-native-gesture-handler';

// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator()

// const StaffStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Staff" component={StaffScreen} />
//       <Stack.Screen name="EditStaffScreen" component={EditStaffScreen} />
//     </Stack.Navigator>
//   )
// }

const App = () => {
  return (
      <View style={styles.container}>
        <Menu />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default App