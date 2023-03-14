import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';
import Menu from './components/Menu'
import 'react-native-gesture-handler';

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