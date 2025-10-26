import { View, Text, StatusBar, StyleSheet } from 'react-native'; 
import React from 'react';
const StatusBarExample = () => {
return (
<View style={styles.container}> 
<StatusBar 
barStyle="dark-content" 
backgroundColor="rgba(100, 95, 95, 0.2)" 
hidden={false} 
// content ko statusBar kai nichy lany kai liya hum translucent use krty hain.
translucent={true}
/> 
<Text style={styles.fontSize}>Status Bar Example</Text> 
</View> )}; 

const styles = StyleSheet.create({ 
container:{ 
flex:1, 
justifyContent:'center', 
alignItems:'center', 
backgroundColor:'#064661ff' 
}, 
fontSize:{ 
fontSize:18, 
fontWeight:'bold', 
color:'white' } }) 

export default StatusBarExample;