import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Menu from '../components/Menu'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import { theme } from '../core/theme'
import axios from 'axios'

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      // Handle login logic here, e.g. make API call to server
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        {
          username: username,
          password: password,
        }
      );
      console.log('login>>>',response.data)
      Alert.alert('Login success!', `Welcome ${response.data.firstName} ${response.data.lastName}`);
      // Navigate to the dashboard screen or do something else here
      // If login is successful, navigate to Dashboard screen
    navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      Alert.alert('Login failed', 'Invalid email or password');
    }
    // navigation.navigate('Home');
  };

  return (
    <Background>
      {/* <Logo /> */}
      <Header>Welcome back.</Header>
      {/* <TextInput
        style={styles.input}
        placeholder="username"
        onChangeText={setUsername}
        value={username}
      /> */}
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {/* <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      /> */}
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
  </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
});


export default LoginScreen