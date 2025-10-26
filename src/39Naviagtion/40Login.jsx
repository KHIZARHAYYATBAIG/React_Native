import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

//passing data using Navigator Stack
const Login = ({ navigation }) => {
  const [userName, setUserName]  = useState ('');
  return(
  <View style={styles.container}>
    <Text style={styles.text}>Login</Text>
    <TextInput
      placeholder="Enter Username"
      onChangeText={setUserName}
      style={styles.textInpuut}
    />
    <Button title="Login" 
    // onPress={() => navigation.navigate('About',{username:'Khizar Baig', age:22}) } 
    onPress={() => navigation.navigate('About',{userName})} 
    />
  </View>
  );
};
const styles = StyleSheet.create({
    textInpuut:{
        borderWidth: 1,
        width: 200,
        padding: 10,
        marginBottom: 20,
        borderRadius: 5,
    },    
    container:{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
        },
        text:{ 
            fontSize: 24, 
            marginBottom: 20 
        }
})
export default Login;