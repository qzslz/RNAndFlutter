/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   TouchableOpacity,
   View,
   NativeModules
 } from 'react-native';
 const App = () => {

   return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{
        const RNAndNativeHelper = NativeModules.RNAndNativeHelper;
        const params = {title:'React-Native'}
        RNAndNativeHelper.pushToFlutter(JSON.stringify(params));
      }}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>跳转</Text>
        </View>
      </TouchableOpacity>
   </View>
   );
 };

 const styles = StyleSheet.create({
   container:{
    justifyContent:'center',
    alignItems:'center',
    flex:1
   },
   buttonContainer:{
     backgroundColor:'blue',
     width:100,
     height:40,
     borderRadius:6,
     justifyContent:'center',
     alignItems:'center'
   },
   buttonText:{
     color:'white'
   }
 });

 export default App;
