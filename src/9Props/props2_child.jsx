import { View, Text } from 'react-native'
import React from 'react';

const PropsChild = (props) => {
  // console.log(props.data);
  let counter = props.data;
  let items  = props.item;
  return (
    <View>
           <Text style={{ fontSize: 30 }}>Props Child</Text>
      {/* <Text style={{ fontSize: 30 }}>{props.data}</Text> */}
      <Text style={{ fontSize: 30 }}>Patent sai Child mah data aa rhagi: {counter}</Text>
      <Text style={{ fontSize: 30 }}>Patent sai Child mah data aa rhagi: {items}</Text>
    </View>
  )
}

export default PropsChild;
