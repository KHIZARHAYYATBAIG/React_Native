import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';
// jesy hmary pass 3 already button component hein jin sai hum buttton bna saktay hein, phr hamy Pressablebutton ki kya zroorat pri? Liek Button, TouchableOpacity, TouchableHighlight hoty hein un mah sirf hum eventLisner(onPress) use kr skty hein. kuch esy sunerio hoty hein jo ek ee button kai press hony pai multiple functionalites define krty hein jahan pai phr hum pressable button use krty hein. 
const PressableButton = () => {
  const handlePress = ()=>{
    console.log('Button Pressed!');
  } 
  const handlePressIn = ()=>{
    console.log('Button Pressed In!');
  }  
  const handlePressOut = ()=>{
    console.log('Button Pressed Out!');
  } 
  const handlePressLong = ()=>{
    console.log('Button Pressed Long!');
  }
  return (
    <View style={styles.container}>
      <Text>Pressable Component Button</Text>
      <Pressable style={styles.button} 
      // onPress={handlePress} 
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onLongPress={handlePressLong} delayLongPress={1000}
      >
        <Text style={styles.buttonText}>Click Me</Text>
      </Pressable>
    </View>
  )
};
const styles= StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'
  },
  button:{
    padding:10,
    backgroundColor:'blue',
    borderRadius:5,
  },
  buttonText:{
    color:'white',
    fontSize:18,  
  }
})
export default PressableButton;