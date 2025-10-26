import { View, Text, StyleSheet, Platform } from 'react-native';
import React from 'react';

const PalteformExemple = () => {
  return (
    <View style={styles.container}>
      {/* <Text>PalteformExemple</Text> */}
      {/* <Text style={styles.welcome}>Welcome Andriod Studio</Text> */}
      <Text style={styles.welcome}>
            {
        Platform.OS === 'ios' ? 'Welcome ISO User!' : 'Welcome Andriod User!'
      }
      </Text>
      <Text style={styles.plateformText}>
        {
          Platform.select({
            ios : 'You are Using on IOS Device',
            android : 'You are Using on Andriod Device',
            macos : 'You are Using on Macos Device'
          })
        }
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: Platform.select({
      ios: 'red',
      android: 'lightgreen',
      macos:'lightblue'
    })
  },
  welcome:{
    fontSize:25,
    color:Platform.OS === 'ios' ? 'blue' : 'darkgreen',
    fontWeight:'bold',
    marginBottom:20
  },
  plateformText:{
    fontSize:20,
    color:Platform.select({
      ios: 'red',
      android: 'green',
      macos:'lightblue'
    }),
    fontWeight:'bold'
  }
})
export default PalteformExemple;