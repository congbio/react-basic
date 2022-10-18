import { View,ImageBackground, Text } from 'react-native'
import React from 'react'
import styles from './style'
const Banner = () => {
  return (
    <View style ={styles.banner}>
      <ImageBackground source={{uri:'https://reactjs.org/logo-og.png' } } 

      resizeMode="cover" style={styles.img}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
    </View>
  )
}

export default Banner