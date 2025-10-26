import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import React, {useState}from 'react';
import axios from 'axios';

const Put_API = () => {
            const [formData, setformData] = useState({ id: "", name: "", email: "" })
        const hadleInput=(field, value)=>{
            setformData({...formData, [field]:value});
        }

    const handleUpdate= async()=>{
        try {
            const response = await axios.put(`http://10.0.2.2:3000/user/${formData.id}` ,{
                name:formData.name,
                email:formData.email,
            })
            Alert.alert('Sucess')
            console.log(response.data)
            // Clear input fields
      setformData({ id: "", name: "", email: "" });
        } catch (error) {
            Alert.alert('Error')
        }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Put_API</Text>
     <TextInput
        style={styles.input}
        placeholder="Enter ID"
        placeholderTextColor="#888"
        onChangeText={(value)=> hadleInput('id', value)}
        value={formData.id}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        placeholderTextColor="#888"
        onChangeText={(value)=> hadleInput('name', value)}
        value={formData.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor="#888"
        onChangeText={(value)=> hadleInput('email', value)}
        value={formData.email}
      /> 

      <Button title="Update" onPress={handleUpdate} />
    </View>
  );
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
  },
});



export default Put_API;