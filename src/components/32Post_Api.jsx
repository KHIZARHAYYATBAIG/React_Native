import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const Post_Api = () => {
  const [formData, setformData] = useState({ id: "", name: "", email: "" });

  const handleInput = (field, value) => {
    setformData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/user', formData);
      Alert.alert('Success', 'Data Submitted Successfully!');
      console.log(response.data);

      // Clear input fields
      setformData({ id: "", name: "", email: "" });
    } catch (error) {
      Alert.alert('Error', 'Failed to Submit Data!');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Post API</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter ID"
        placeholderTextColor="#888"
        onChangeText={(value) => handleInput('id', value)}
        value={formData.id}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        placeholderTextColor="#888"
        onChangeText={(value) => handleInput('name', value)}
        value={formData.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        placeholderTextColor="#888"
        onChangeText={(value) => handleInput('email', value)}
        value={formData.email}
      />

      <Button title="Submit" onPress={handleSubmit} />
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

export default Post_Api;
