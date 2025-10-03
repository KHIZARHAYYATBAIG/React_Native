import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
// remember useStateHook mah Javacript ka Array Destructuring hota hai. UseEffectHook mah Javacript ka Call Back ka concept hota hai. 
// UseEffectHook Api sai data featch karne kai liye use hota hai.
const UseEffectHook = () => {
            // like jesy koi hun nah updation ki jo b updation ki, to api duabara call nah ho us kai liya hum kya kry gy. const [count , setCount]............

        const [count  , setCount] = useState(1);
    useEffect(() =>{
        console.log("Api Calling......");
    }, [])
    // yahan upar useeffect ko ek bar run krny ka liya hum nah [] lagaya..
  return (
    <View>
      <Text style={ { fontSize : 30 } }  >useEffectHook In </Text> 
    <Text style={{ fontSize: 30 }}>Count: {count}</Text>

      <Button title='Counter' onPress={()=>setCount(count+1)}/>
    </View>
  )
};

export default UseEffectHook;