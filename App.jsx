import React from 'react';
import {Text,View} from 'react-native';
// import JSX from './src/components/JSX';
// import OnPress from './src/components/OnPress';
// import UseStateHook from './src/components/UseStateHook';
import PropsParent from './src/components/Props/props_parent';
const App = () => {
  return (
  <View>
   <Text style={ { fontSize : 30 } }  >Main APP page</Text>
    {/* <JSX /> */}
    {/* <OnPress /> */}
    {/* <UseStateHook /> */}
    <PropsParent />
  </View>
  );
};
export default App