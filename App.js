import React from 'react';
import { Alert, StyleSheet, Text, View, ScrollView, Image ,TouchableOpacity } from 'react-native';
import SignIn from './assets/Components/SignIn';
import SignUp from './assets/Components/SignUp';
import GetStarted from './assets/Components/GetStarted';
import TranProgress from './assets/Components/TranProgress';
import TranApproved from './assets/Components/TranApproved';
import LuxuryCar from './assets/Components/LuxuryCar';
import CarType from './assets/Components/CarType';
import Adjust from './assets/Components/Adjust';


const App = () => { 
  return (
    <View style={styles.container}>
       {/* <SignIn/> */}
       {/* <SignUp/> */}
        {/* <GetStarted/> */}
        {/* <TranProgress/> */}
        {/* <TranApproved/> */}
     <Adjust/>
     {/* <CarType/> */}

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