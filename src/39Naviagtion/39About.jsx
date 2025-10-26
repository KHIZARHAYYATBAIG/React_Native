import { View, Text,Button} from 'react-native';
import React from 'react';

const About = (props) => {
  // const {username, age}  = props.route.params;
  const {userName}  = props.route.params;
  // console.log(props.route.params.username)
  return (
    <View>
      <Text>About</Text>
      {/* <Text>{username} {age}</Text> */}
      <Text>Welcome {userName}</Text>
      <Button title='Go to Login' onPress={()=> props.navigation.goBack()} />    
    </View>
  );
};
export default About;