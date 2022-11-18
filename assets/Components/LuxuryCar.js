import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
  TextInput,
  } from "react-native";

const LuxuryCar = () => {
  const [email, setEmail] = useState("");
  return (

    <View style={styles.container}>
<View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="search"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>


</View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    card:{
        backgroundColor: '#eddae1',
        borderRadius: 8,
      
        width: '50%',
        

    },
    inputView: {
      backgroundColor: "#ffffff",
      borderRadius: 10,
      borderWidth: 1,
      width: "70%",
      height: 45,
      marginBottom: 20,
   
      alignItems: "center",
    },
    carDis:{
        flexDirection:"row",
    },
    shadowProp: {
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.6,
        shadowRadius: 3,
      },
   
    image: {
      marginBottom: 40,
      height:100,
      width:200

      
      
    },
    first:{
        alignItems: "center",
        justifyContent: "center",
      paddingBottom:100,
      paddingLeft:30,
      paddingRight:30,
    },
   msg:{
   
    fontSize:32,
    fontWeight:'bold',
    fontFamily:'serif',

    
   },

   


   

  });

export default LuxuryCar