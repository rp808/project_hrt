import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

const TranApproved = () => {
    return (
        <View style={styles.container}>
            <Image source={require('./approved.png') }    style={styles.image}/>
          <View style={styles.first}>
          <Text style={styles.msg}>Transaction  </Text>
          <Text style={styles.msg}>Approved</Text>
          </View> 
          <TouchableOpacity style={styles.returnbtn}>
          <Text style={styles.loginText}>RETURN TO HOME</Text>
        </TouchableOpacity>  
        </View>
      )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
   
    image: {
      marginBottom: 40,
      height:150,
      width:150,
      
      
    },
    first:{
        alignItems: "center",
        justifyContent: "center",
      paddingBottom:100,
      paddingLeft:30,
      paddingRight:30,
    },
    returnbtn: {
        width: "80%",
        borderRadius: 15,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#617EE4",
      },
   msg:{
   
    fontSize:32,
    fontWeight:'bold',
    fontFamily:'serif',

    
   },   

  });

export default TranApproved