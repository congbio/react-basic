import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Banner from '../Iterm/Banner';
import { Button } from 'react-native-paper';
 
const ScreenDetail = () => {
  return (
    <View style={styles.detail}>
        
     
        <Banner />
       
    </View>
  );
};
const styles = StyleSheet.create({
  
   detail:{

   } 

});

export default ScreenDetail;