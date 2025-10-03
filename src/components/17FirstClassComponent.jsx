import React, { Component } from 'react';
import { Text, View } from 'react-native';
import SecondClassComponent from './SecondClassComponent';

// extends used for kai ap "ClassComponent" is component ko inherit krwana chahty ho kisi dusri class sai, dusri class kai feteatures is mah user kr sako
class FirstClassComponent extends Component {
    // is mmah hun return nhi render use krty hain 
    render() { 
        const age = 20;
        return (
            <View>
                <Text style={{fontSize:25}} > First Class Component</Text>
                <SecondClassComponent data = {age}/>
            </View>
        )
     };

};

export default FirstClassComponent;