import { View, Text,StyleSheet,TextInput ,Button, Alert } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';

const Delete_Api = () => {
  const [id, setID] = useState();

  const handleDelete = async () =>{
    try {
      const response = await axios.delete(`http://10.0.2.2:3000/user/${id}`);
      Alert.alert('Data Deleted Successful')
      console.log(response.data)
      setID('')
    } catch (error) {
            Alert.alert('Error')

    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Delete API</Text>
      <TextInput
      style={styles.input}
      placeholder='Enter ID'
      value={id}
      onChangeText={(value)=> setID(value)}
      />      

      <Button title='Delete' onPress={handleDelete}/>
    </View>
  )
}

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
  }
});
export default Delete_Api;