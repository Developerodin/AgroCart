import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, StatusBar } from 'react-native'
import React from 'react'

const { width, height } = Dimensions.get('window')

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={"#5AC2681A"} />
      <Image source={require('../Assets/Splash_Screen.png')} style={styles.splashimg} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  splashimg: {
    resizeMode: "contain",
    width: width,
    height: height
  }
})