import React, { useState, useEffect } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { theme } from '../core/theme'


const HomeScreen = () => {
  const [user, setUser] = useState(null);
  // const { firstName, lastName } = route.params;

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUser = async () => {
      // send API call to retrieve user information using stored token
      // update user state with retrieved information
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    navigation.popToTop(); // Navigate back to the Login screen
  };

  return (
    <View style={styles.container}>
      <Button title='logout' onPress={handleLogout} />
      <Text style={styles.text}>Welcome !</Text>
      <Text style={styles.text}>Your Profile Details is as below: </Text>
      <Text style={styles.text}>Age: </Text>
      <Text style={styles.text}>Gender: </Text>
      <Text style={styles.text}>Email: </Text>
      <Text style={styles.text}>Phone: </Text>
      <Text style={styles.text}>Birth date</Text>
      <Text style={styles.text}>Blood Group </Text>
      <Text style={styles.text}>Height: </Text>
      <Text style={styles.text}>Weight: </Text>
      <Text style={styles.text}>Eye Color</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.secondary,
    fontSize: 23,
    textAlign: 'center'
  }
});


export default HomeScreen