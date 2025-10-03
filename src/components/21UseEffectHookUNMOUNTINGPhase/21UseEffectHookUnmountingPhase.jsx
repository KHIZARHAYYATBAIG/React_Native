import { View, Text, Button } from 'react-native'; 
import React, {useState} from 'react'; 
import ShowChild from './ShowChild'; 

const UseEffectHookUnmountingPhase = () => {
const [showChid, setShowChild]= useState(true); 
return ( 
<View> 
  <Text style={{fontSize:25}}>UseEffectHookUnmountingPhase</Text> 
  <Text style={{fontSize:25}}>Parent Componenet</Text> 
  { // is ka mtlb ha kai showchild ko import kro " showChid ? " ager true ha to " <showChid />" ager false ha to " : null ". 
  showChid ? <ShowChild /> : null 
  }
  {/* setShowChild(false) ager hum is false ki jagah setShowChild(!showChid) use kry gy to hide b hum kr skty hein or show b false sai bs hide hota tha.  */}
  <Button title='Toogle Child Componenet' onPress={()=>setShowChild(!showChid)}/> 
  </View> 
  )}; 
export default UseEffectHookUnmountingPhase;