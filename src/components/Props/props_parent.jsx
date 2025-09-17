import { View, Text , Button} from 'react-native'
import React, { useState } from 'react'
import PropsChild from './props2_child';

const PropsParent = () => {
  const [count, setCount] =  useState(0);
  let counter = count+1;
  const [item, setItem ] =  useState(10);
  let items = item *10;

  return (
    <View>
      <Text style={ { fontSize:30 } }>props_parent</Text>
      <Button title = "Counter" onPress={()=> setCount(counter)} />
      <Text style={ { fontSize:30 } }></Text>
      <Button title = "Item " onPress={()=> setItem(items)} />

      <PropsChild data= {count} item ={item} />
    </View>
  )
}

export default PropsParent;