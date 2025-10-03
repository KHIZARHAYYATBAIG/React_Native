import { View, Text,SectionList,StyleSheet  } from 'react-native';
import React from 'react';

const listItem = [
    {
        title : 'Fruits',
    data : [
        {id: '1', name: 'Apple'},
        {id: '2', name: 'Pineapple'},
        {id: '3', name: 'Banana'},
        {id: '4', name: 'Orange'},
        {id: '5', name: 'Mango'},
    ],
    },

        {
        title : 'Vegetables',
    data : [
        {id: '1', name: 'Carrot'},
        {id: '2', name: 'Potato'},
        {id: '3', name: 'Cabbage'},
        {id: '4', name: 'Onion'},
        {id: '5', name: 'Tomato'},
    ],
    },
]
const SectionListScreen = () => {
const renderItem = ({ item }) => (
        <View style={style.item}>
            <Text style={style.title}>{item.name}</Text>
        </View>
    );

    const renderSectionHeader = ({section}) => (
     <View style={style.header} >
   <Text style={style.haederTitle}>{section.title}</Text>
        </View>

    )
  return (
    <View style={style.container}>
        <SectionList 
        sections={listItem}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
        
        />

    </View>
  );
};

const style = StyleSheet.create({
    container:{
        backgroundColor : '#dac3a6ff',
        paddingTop: 10,
    },
    item:{
        backgroundColor : '#ad8053ff',
        padding: 10,
        marginVertical: 7,
        borderRadius: 5,
    }, 
    title:{
        fontSize: 18,

    },
    header:{
        backgroundColor : '#a8660fff',
        padding: 10,
        borderRadius: 5,
        marginVertical : 5,
    },
    haederTitle:{
        fontSize : 25,
        fontWeight : 'bold',
    }
})
export default SectionListScreen;