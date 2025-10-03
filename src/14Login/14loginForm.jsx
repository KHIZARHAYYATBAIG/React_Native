import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>

      <TextInput 
        style={styles.input}
        placeholder='Enter Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='gray'
      />

      <TextInput 
        style={styles.input}
        placeholder='Enter Password'
        value={password}
        onChangeText={setPassword}
        placeholderTextColor='gray'
        secureTextEntry
      />

      <TouchableOpacity 
        style={styles.button} onPress={handleLogin}>
        <Text 
        style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#e9e9e9ff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',

  },
  button:{
    backgroundColor: '#231e75ff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default LoginForm;
