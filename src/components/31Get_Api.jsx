import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Get_Api = () => {
    // jab b data get ho gah usy hun useEffect hook m use krein gai. reason ya ha kai ap kai component kai mount hony sai pehly  ap ak life cycle mehtod call hota ha or wo cycle useEffect hook mah hoty hein. SImple UI kai render hony sai pehly API ko call krwanna ho to useEffect hook use krty hein.

    // useEffect( () => {
        // fetch('https://jsonplaceholder.typicode.com/posts') ya old method ha.new method axios ha. jab hum fetch use krty hein to ya hamy ek Promis return krta ha. or usy handle krny kai liye hum .then use krty hein.  .then callback fuction leta h.....

        // old method
    //     fetch('http://10.0.2.2:3000/user').then(response =>{
    //         response.json().then(result =>{
    //             console.log(result)
    //         })
    //     })
    // }, []);

    // new method axios
    const [myData, setMydata]= useState([]);
    useEffect(()=>{
        axios.get('http://10.0.2.2:3000/user').then((result)=>{
            // console.log(result)
            setMydata(result.data)
        })
    },[])
  return (
    <View>
      <Text style={{fontSize:25, marginBottom:10}}>Get_Api</Text>

      {/* my data to ek array ha ,  abh array ko itrate krny kaai liya js mah forloop supproted nhi hota , yahan map function use hota.   */}
      {
        myData.map((item, index)=>(
            <Text key={index} style={{fontSize:20, backgroundColor:"red", marginVertical:5, padding:5, color:"white"}}>{item.name}</Text>
        ))
      }



      
    </View>
  );
};

export default Get_Api;