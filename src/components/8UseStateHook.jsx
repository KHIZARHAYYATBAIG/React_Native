import { View, Text, Button } from 'react-native';
import React,{useState} from 'react';
// import React from 'react';

const UseStateHook = () => {
  const [name, setName] = useState('Khziar');
  const getName = ()=>{
    setName('KhizarRayyan');
  }

  return (
    <View>
   <Text style={ { fontSize : 30 } }  >Use Satate _Rayyan</Text>
    <Text style={ { fontSize : 30 } }  >My Name is: {name} </Text>
   <Button title ="Press" onPress={getName} />
    {/* <Text style={ { fontSize : 30 } }  >My Name is: {getName} </Text> */}

    </View>
  );
};

export default UseStateHook;