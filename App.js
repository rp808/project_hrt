import React from 'react';
import { Alert, StyleSheet, Text, View, ScrollView, Image ,TouchableOpacity } from 'react-native';
import SignIn from './assets/Components/SignIn';
import SignUp from './assets/Components/SignUp';

const App = () => { 
  return (
    <View style={styles.container}>
       {/* <SignIn/> */}
       <SignUp/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    flex: 1,


  },


});

export default App;