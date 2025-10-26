import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
// selective Fields ko change krny kai liya hum Patch Api USE kr skty hein.
const Patch_Api = () => {
  const [formData, setformData] = useState({id:'', name:'', email:''})
  const handleInput=(field, value)=>{
    setformData({...formData, [field]:value})
  };
  const handleUpdate= async()=>{
    try {
          const response = await axios.patch(`http://10.0.2.2:3000/user/${formData.id}`, {
      ...formData.name && {name: formData.name},
      ...formData.email && {email:formData.email},
    })
    Alert.alert('Data Updated Success')
    console.log(response.data)
    // Clear input fields
      setformData({ id: "", name: "", email: "" });
    } catch (error) {
      Alert.alert('Data Updated Error')
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Patch_Api</Text>
      <TextInput
       style={styles.input}
      placeholder='Enter ID'
      onChangeText={(value)=>handleInput('id', value)}
      value={formData.id}
      />      
      <TextInput
       style={styles.input}
      placeholder='Enter Name'
      onChangeText={(value)=>handleInput('name', value)}
      value={formData.name}
      />      
      <TextInput
       style={styles.input}
      placeholder='Enter Email'
      onChangeText={(value)=>handleInput('email', value)}
      value={formData.email}
      />
      <Button title='Update' onPress={handleUpdate}/>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor: '#000',
    color: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
  }
});
export default Patch_Api;