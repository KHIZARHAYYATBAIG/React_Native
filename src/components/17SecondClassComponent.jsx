import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';


class SecondClassComponent extends Component {
    // ui mah chez render hony sai pehly Constructor call hota hai chally ga.
    constructor(){
        super();
        this.state = {
            myName : "Khizar"
        }
    }
    updateName = () => {
        this.setState({ myName : "Rayyan" })
    }
  render() {
    return (
      <View>
        <Text style={{fontSize:25}}  > Second Class Component: {this.state.myName} Age: {this.props.data}</Text>
        <Button title='Click Me' onPress={this.updateName} />
      </View>
    )
  };
};

export default SecondClassComponent;
