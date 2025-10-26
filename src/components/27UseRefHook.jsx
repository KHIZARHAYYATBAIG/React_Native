import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React, { useRef } from 'react';
// jab b ap ko apny element ko directly target krna ho to hum UseRefHook ko use krty hein. Like koi b operation perform krwana ho jeys kai koi style change, or component re-render b nah ho.
const UseRefHook = () => {
    // jab b ap useRef banay ho to pehly us ka ek instance banaty ho. myRef ko instance keo bola, keo kai hum is ki copy banaty hein. keo kai myRef ko power mili ha myRef sai or hum is sai hr kam hr chez access krein gai.
    const myRef= useRef();
    const handleRef = ()=>{
        // myRef.current.setNativeProps({
        //     text : "Khizar"
        // })
        // myRef.current.focus();
    }
  return (
    <View style={styles.container}>
      <TextInput 
        ref={myRef}
        style={styles.input}
        placeholder="Enter Your Name"
        placeholderTextColor="grey"
      />
      <TouchableOpacity style={styles.button} onPress={handleRef}>
        <Text style={styles.buttonText}>Submit</Text>    
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',
    padding:20,
  },
  input:{
    width:'100%',
    height:50,
    borderColor:'gray',
    borderWidth:1,
    borderRadius:8,
    paddingHorizontal:10,
    marginBottom:10,
  },
  button:{
    backgroundColor:'#007BFF',
    paddingVertical:12,
    paddingHorizontal:25,
    borderRadius:8,
    width:'100%',
    alignItems:'center',
    marginTop:10,
  },
  buttonText:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
  }
});

export default UseRefHook;
