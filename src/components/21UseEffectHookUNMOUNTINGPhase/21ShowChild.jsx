import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const ShowChild = () => {
  useEffect(() => {
    // console.log('I am a child componenet.');
    
    //for unmounting phase:
    return ()=>{
    console.log('Child component Unmounted.');
}
// like social medai app pai koi b post , pic yan video deleete krun yan post krun to koi popup show krway ky liya hum useEffect unmounting phase ka use krty hein.
  },[]);
  return (
    <View>
      <Text style={{fontSize:25}}>Child Componenet</Text>
    </View>
  )
};

export default ShowChild;