import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

const AlertExemple = () => {
    const showAlert= ()=>{
        // alert('This is an alert message!');
        Alert.alert(
            'Alert Title',
            'My Alert Message',
            [
                {
                    text:'Cancel',
                    onPress:()=>console.log('Cancel Pressed'),
                    style:'cancel',
                },
                {
                    text:'OK',
                    onPress:()=>console.log('OK Pressed'),
                    style:'destructive',
                }
            ] ,
            {cancelable:false}
        )
    }
  return (
    <View>
      <Text style={{fontSize:25}}>AlertExemple</Text>
      <Button title='Show Alert' onPress={showAlert}/>
    </View>
  )
};

export default AlertExemple;