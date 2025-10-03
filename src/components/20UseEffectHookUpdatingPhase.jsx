import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectHookUpdatingPhase = () => {
  // state concept
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(20)
  useEffect(()=>{
    console.log('UseEffect Called Counter');
  },[counter])
    useEffect(()=>{
    console.log('UseEffect Called Score');
  },[score])

  //for button
  const updateCounter = () => setCounter(counter + 1);
  const updateScore = () => setScore(score + 1);

  return (
    <View> 
      <Text style={{fontSize:25}}>UseState Hook Updation Phase</Text>
      <Text style={{fontSize:25}}>Counter: {counter}</Text>
      <Text style={{fontSize:25}}>Score: {score}</Text>
     <View  style={{marginHorizontal:5}}><Button title='Increase Counter' onPress={updateCounter} /> </View>

      <View  style={{marginVertical:5}}><Button title='Increase Score' onPress={updateScore} /><View/>
    </View>
    <InfoDetail />
    </View>
  )
};
export default UseEffectHookUpdatingPhase;