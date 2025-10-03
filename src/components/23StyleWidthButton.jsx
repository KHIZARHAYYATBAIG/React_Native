import { View, Text, Button, TouchableOpacity, StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';

const StyleWidthButton = () => {
  return (
    <View>
      <Text style={{fontSize:30}}>StyleWidthButton</Text>
      <Button title= "Basic Button" color={'black'}/>
      {/* activeOpacity ki default oapcity 0 */}
      <TouchableOpacity style={styles.button} activeOpacity={0.7}> 
        {/* ya apny ander children component leta is liya hum isy self close nhhi krty */}
        <Text style={styles.textInButton}> TouchableOpacity </Text>
      </TouchableOpacity>

      {/* jab b ap  TouchableHighlight use kro gai ap ko lazmi onpres likhna pary gah*/}
      <TouchableHighlight style={styles.button} underlayColor = 'red' onPress = {() =>{
        console.log('Hello')
      }

      } >
        <Text style={styles.textInButton}>
            TouchableHighlight
        </Text>      
        </TouchableHighlight>

    </View>
  )
};
const styles = StyleSheet.create({
    button:{
    margin: 20,
    backgroundColor: 'purple',
    padding:20,
    borderRadius: 25,
    //elevation ka mtlb ha ap apny button kko thora sa shadow dena chahty ho , ya IOS pai work nhi krti. 
    elevation: 5
    },
    textInButton:{
        fontSize:20,
        color:'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }

});
export default StyleWidthButton;


// jesa ka hum button ko style nhi kr skty , zyada , to abh kya krein ?
// Well there are two Coponents in React-Native TouchableOpacity & TouchableHighlight to make button stylish.
// TouchableOpacity VS TouchableHighlight