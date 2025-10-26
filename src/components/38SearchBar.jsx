import { View, Text, TextInput,FlatList, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const context = [
        {id:1, name:'Farzeed'},        
        {id:2, name:'Ali'},
        {id:3, name:'Ahmad'},
        {id:4, name:'Hassan'},
        {id:5, name:'Subhan'},
    ];
    const filteredContext = context.filter(contact =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
   const renderItem = ({ item }) => (
  <View style={styles.contactItem}>
    <Text style={styles.contactName}>{item.name}</Text>
  </View>
);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact List</Text>
      <TextInput 
      style ={styles.searchBar}
      placeholder='Search Context'
      placeholderTextColor='#888'
      value={searchQuery}
      onChangeText={setSearchQuery}
      />
      <FlatList
      data={filteredContext}
      keyExtractor = {item=> item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.listcontainer}
    />
    </View>
  );
};
const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#e3f2fd',
        padding:20,
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        color:'#1e88e5',
        marginBottom:20,
        textAlign:'center'
    },
    searchBar:{
        height:40,
        borderColor:'#90caf9',
        borderWidth:1,
        borderRadius:20,
        paddingHorizontal:16,
        marginBottom:20,
        backgroundColor:'#fff'
    },
    listcontainer:{
        paddingBottom:20,

    },
    contactItem:{
        padding:15,
        backgroundColor:'#fff',
        borderRadius:15,
        marginBottom:10,
        shadowColor: '#000',
        shadowOffset:{width: 0, height:2},
        shadowOpacity:0.15,
        shadowRadius:5,
        elevation:3,
        flexDirection:'row',
        alignItems:'center'
    },
    contactName:{
        fontSize:18,
        color: '#424224'
    }
})
export default SearchBar;