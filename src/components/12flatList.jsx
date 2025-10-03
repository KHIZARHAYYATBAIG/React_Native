import { View,Text ,FlatList , StyleSheet} from 'react-native'
import React from 'react'

// static data pai kam ho gah abhi . data hmesha arry mah ho ga phr flatlist use ho gah.

const data = [
  {id:1, title:'item 1'},
  {id:2, title:'item 2'},
  {id:3, title:'item 3'},
  {id:4, title:'item 4'},
  {id:5, title:'item 5'},
  {id:6, title:'item 6'},
  {id:7, title:'item 7'},
  {id:8, title:'item 8'},
  {id:9, title:'item 9'},
  {id:10, title:'item 10'},
]
const MyflatList = () => {
    const renderItem = ({item}) => (
        <View style={styles.item} >
            <Text style={styles.title}  
>{item.title}</Text>    
        </View>
    );
  return (
    <View style={styles.container}>
        <FlatList 
        data={data}
        renderItem={renderItem}
         keyExtractor={item => item.id}
         contentContainerStyle={styles.list}
        />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'red',
    padding:15,
  },
  list:{
    paddingHorizontal:20,
  },
  item :{
    backgroundColor:'yellow',
    borderWidth:3,
    borderColor:'black',
    padding:20,
    marginVertical:8,
    borderRadius:10,
    shadowColor:'black',
    shadowOffset:{
      width:0,
      height:2
    },
    shadowOpacity:0.25,
    shadowRadius:4,
    elevation:2,
  }, 
  title:{
    fontSize:32,
    color:'black',
  }
})
export default MyflatList