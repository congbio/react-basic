import React, { useEffect } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
 
 

function ScreenAccount() {
  return (
   
    <ScrollView style={styles.container}>
      <Text style={styles.text}>My Profile</Text>
      <View style={styles.userInfoWrapper} >
        <Image style={styles.img} source={require('../../assets/img/download.jpg')} />
        <View style={styles.UserInfoData}>
          <Text style={{fontSize: 20, fontWeight: '700', color: '#091C3F'}}>Hi, Ben Cline</Text>
          <Text style={{fontSize: 14, fontWeight: '400'}}>Welcome to Medtech</Text>
        </View>
      </View >
      <View style={styles.LinkWrapper}>
          <View style={styles.LinkSection}>
            <Image style ={styles.LinkIcon} source={require('../../assets/img/download.jpg')} />
            <View>
              <Text>Private Account</Text>
              <Text>&gt;</Text>
            </View>
          </View >
           
        </View>
    </ScrollView>
  );
}

export default ScreenAccount;



const styles = StyleSheet.create({
  container: {
    paddingHorizontal:48,
    paddingVertical:23
  } ,
  text: {
    fontSize:16,
    fontWeight:"bold"
  },
  userInfoWrapper: {
    marginTop:26,
    flexDirection:'row',
    alignItems:'center'

  },
  img:{
    width:62,
    height:62,
    borderBottomEndRadius:62,
    borderRightWidth:62,
    borderLeftWidth:62,

  },
  UserInfoData: {
    top: 10,
  },
  LinkWrapper:{

  },
  LinkSection:{

  },
  LinkIcon:{
    width:20,
    height:20,

  },
  LinkInfo:{
    marginLeft:27,
    flex:1,
    paddingBottom:14,
    justifyContent:'space-between',
    flexDirection:'row'

  }

});