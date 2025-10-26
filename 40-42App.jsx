import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
// import Home from './src/39Naviagtion/39Home';
import About from './src/39Naviagtion/39About';
import Login from './src/39Naviagtion/40Login';
import MyHeader from './src/39Naviagtion/42MyHeader'
import Exemple from './src/39Naviagtion/42Exemple'
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
    // const headerLeft = ()=> <Button title='One' />
    // const headerRight = ()=> <Button title='two' />
     const myExemple = ()=> <Exemple  />


  return (
    <NavigationContainer>
        <Stack.Navigator>
            {/* <Stack.Screen 
            name='Home' component={Home} 
            // options={{headerShown:false}}
            /> */}
             {/* <Stack.Screen 
            name='Login' component={Login} 
            />
             <Stack.Screen 
            name='About' component={About}
            /> */}

            <Stack.Screen
            name="Headeer" component={MyHeader}
            options={{
                title:'',
                // headerLeft: ()=> <Button title='One' />,
                // headerRight: ()=> <Button title='two' />
    
                // headerRight: headerRight,
                // headerLeft: headerLeft,

                headerRight:myExemple,
                headerLeft:myExemple
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );
};
export default App;