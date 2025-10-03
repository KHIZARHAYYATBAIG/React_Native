import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Styled from './Style/style'; // external styling

const Styling = () => {
  return (
    <View>
      <Text style={{fontSize:30, backgroundColor:'black', color:"white", marginVertical: 5, padding: 6, textAlign:'center', borderColor: 'red', 
borderWidth: 2,}}>Inline Styling In APP</Text>
      
      <Text style={style.Text} >Internal Styling In APP</Text>

      <Text style={Styled.Text}>External Styling In APP</Text>

    </View>
  );
};
const style = StyleSheet.create({
  Text : {
fontSize:30, 
backgroundColor:'red', 
color:"white", 
marginVertical: 5, 
padding: 6,
textAlign: 'center',
borderColor: 'black', 
borderWidth: 2,
},
});

export default Styling;