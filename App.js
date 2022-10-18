import { SafeAreaView, SnapshotViewIOSComponent, StyleSheet } from "react-native";
import { View, Text } from 'react-native'
import styles from "./App.style";
import React from 'react'
import Containers from "./src/containers/Containers";
 

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Containers/>
       
 
    </SafeAreaView>
  )
}

export default App;
