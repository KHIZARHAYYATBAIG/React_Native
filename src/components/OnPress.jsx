import { View, Button ,Text } from 'react-native';
import React from 'react';

const OnPress = () => {
    let name = 'Rayyan';
    const getname = (name) =>{
        console.warn('Name: ', name);
    };
  return (
    <View>
   <Text style={ { fontSize : 30 } }  >{name}</Text>
       <Button title='Press' onPress={getname}/>

    {/* <Button title='Press' onPress={()=> getname}/> */}
    </View>
  );
};

export default OnPress;