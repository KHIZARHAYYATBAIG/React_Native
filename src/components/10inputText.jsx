import { View, Text, TextInput , Button} from 'react-native';
import React, { useState } from 'react';
const InputText = () => {
    const [userName , setUserName]= useState('');
  return (
    <View>
      <Text style={{fontSize: 30}}>inputText</Text>
    <Text style={{fontSize: 30}}></Text>

      <TextInput style={{fontSize:30, borderWidth:3, borderColor:'green', margin:5, padding: 15 } } value={userName} placeholder='Enter Your Input' onChangeText={(value)=> setUserName(value)}/>
         <Text style={{fontSize: 30}}>UserName: {userName}</Text>

         <Button title='Clear' onPress={()=>setUserName('')} />
    </View>
  );
};

export default InputText;
