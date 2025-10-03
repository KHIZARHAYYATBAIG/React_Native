import { View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
const arrayData = [
  { id: '1',  name: 'John Doe'},
  { id: '2',  name: 'Jane Smith'},
  { id: '3',  name: 'Alice Johnson'},
  { id: '4',  name: 'Bob Brown'},
  { id: '5',  name: 'Charlie Davis'},
  { id: '6',  name: 'David Wilson'},
  { id: '7',  name: 'Emma Thomas'},
  { id: '8',  name: 'Frank Miller'},
  { id: '9',  name: 'Grace Lee'},
  { id: '10', name: 'Henry Martin'},
  { id: '11', name: 'Isabella Clark'},
  { id: '12', name: 'Jack Lewis'},
  { id: '13', name: 'Karen Hall'},
  { id: '14', name: 'Liam Young'},
  { id: '15', name: 'Mia Allen'},
  { id: '16', name: 'Noah Wright'},
  { id: '17', name: 'Olivia Scott'},
  { id: '18', name: 'Paul Green'},
  { id: '19', name: 'Sophia King'},
  { id: '20', name: 'William Baker'},
]
const Grid = () => {
  return (
    <View  style={styles.mainConatiner}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.container}> 
        {
            // index is for ID that is in araryData.
            arrayData.map((item, index)=>(
                // key mah hum just index b likh skty hein jab koi unique key nah ho "key={index}", kei kai hmary pass id ha to hum nah "key={item.id}" likhaingy.
                <View style={styles.gridItem} key={item.id}>
                    <Text>{item.name}</Text>
                </View>
            ))
        }
        </ScrollView>
    </View>
  )
};
const styles = StyleSheet.create({
    mainConatiner : {
        flex: 1,
        backgroundColor: '#693939ff',
    },
    heading : {
        fontSize : 20,
        fontWeight : 'bold',
        textAlign : 'center',
        marginVertical : 20,
        color : '#fff',
    },
    container:{
        flexDirection : 'row',
        justifyContent : 'space-between',
        padding : 10,
        flexWrap : 'wrap',
    },
    gridItem : {
        backgroundColor : '#fff',
        padding : 20,
        marginBottom : 10,
        width : '30%', 
        height : 100,
        borderRadius : 10, 
        alignItems : 'center',
        justifyContent : 'center',
    }

});
export default Grid;