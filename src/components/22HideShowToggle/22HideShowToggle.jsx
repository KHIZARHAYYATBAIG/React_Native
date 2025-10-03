import { View, Text, Button  } from 'react-native';
import React, { useState } from 'react';
import My from './22My';

const HideShowToggle = () => {
  const [status,setStaus] = useState(true);                                        
  return (
    <View>
      <Text style={{fontSize:30}}>HideShowToggle</Text>
      {
        status ? <My /> : null
      }
      {/* <Button title='Show'  onPress={()=> setStaus(false)}/> */}
          <Button title='Hide & Show'  onPress={()=> setStaus(!status)}/>
    </View>
  )
};

export default HideShowToggle;