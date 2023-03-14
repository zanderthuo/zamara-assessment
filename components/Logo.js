import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logo.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: '#1F1F3D',
    width: '70%',
    height: '30%',
    marginBottom: 8,
  },
})