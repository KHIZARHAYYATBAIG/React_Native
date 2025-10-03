import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
// this useEffect hook is also used for updating phase.
const UseEffectHookProps = () => {
  const [counter, setCounter] = useState(0);
  const [pointss, setPointss] = useState(20);
  //for button
  const updateCounter = () => setCounter(counter + 1);
  const updatePointss = () => setPointss(pointss + 1);
  return (
    <View>
      <Text  style={{fontSize:25}}>UseEffectHookProps</Text>
      <InfoDetail count={counter} points={pointss}/>
      <View  style={{marginHorizontal:5}}><Button title='Increase Counter' onPress={updateCounter} /> </View>
      <View  style={{marginVertical:5}}></View><Button title='Increase Points' onPress={updatePointss} /><View/>

    </View>
  )
};
// ({count, points}) ya is liyaa likha ha q ka hum na idr object ko destuct kiya ha isy.
const InfoDetail = ({count, points}) => {
    useEffect(()=>{
        console.log('I am a child')
    }, [count])
  return (
<View style={{marginTop:5}}>
  <Text style={{fontSize:20}}>Info Detail Component</Text>
  <Text style={{fontSize:20}}>Count: {count}</Text>
  <Text style={{fontSize:20}}>Points {points}</Text>
</View>

  )
};
export default UseEffectHookProps;