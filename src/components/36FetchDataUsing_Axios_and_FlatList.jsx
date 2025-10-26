import { View, Text, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchDataUsing_Axios_and_FlatList = () => {
    const [myData, setMyData] =  useState([]);
    useEffect(()=>{
        axios.get('http://10.0.2.2:3000/user').then((response)=>{
            setMyData(response.data)
        })
  }, [])

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.name}>{item.name}</Text>
    <Text style={styles.email}>{item.email}</Text>
  </View>
);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>36FetchDataUsing_Axios_and_FlatList</Text>
      <Text style={styles.heading}> Users</Text>
      <FlatList 
      data = {myData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      />
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
  card: {
  backgroundColor: '#fff',
  padding: 10,
  marginVertical: 5,
  borderRadius: 10,
  elevation: 3,
},
name: {
  fontSize: 18,
  fontWeight: 'bold',
},
email: {
  fontSize: 16,
  color: '#555',
},

});
export default FetchDataUsing_Axios_and_FlatList;