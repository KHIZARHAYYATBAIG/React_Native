//DRAWER NAVIGATION
import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Button } from 'react-native';
import 'react-native-gesture-handler';
const Drawer  = createDrawerNavigator();

const HomeScreen = ({navigation})=>(
  <View style={styles.screenContainer}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title='Open Drawer' onPress={()=> navigation.openDrawer()} />
  </View>
);
const ProfileScreen = ({navigation})=>(
  <View style={styles.screenContainer}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button title='Open Drawer' onPress={()=> navigation.openDrawer()} />
  </View>
);
const SettingScreen = ({navigation})=>(
  <View style={styles.screenContainer}>
      <Text style={styles.title}>Setting Screen</Text>
      <Button title='Open Drawer' onPress={()=> navigation.openDrawer()} />
  </View>
);



const App = () => {
  return (
    // <View>
    //   <Text style={{fontSize:30 }}>App Dev</Text>
    // </View>
    <NavigationContainer>
      <Drawer.Navigator
      screenOptions={{
        drawerStyle:{
          backgroundColor:'#4d4d4dff',
          width:240,
        },
        drawerLabelStyle:{
          fontSize:18,
          color:'white',
        },
        headerStyle:{
          backgroundColor:'#fffcfcff',
        },
        headerTintColor:{
          color:'white',

        },
        headerTitleAlign:{
          headerTitleAlign:'center',
        }
      }}
      >
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='Profile' component={ProfileScreen}/>
        <Drawer.Screen name='Settings' component={SettingScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  screenContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#202020ff',
  },
  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20,
    color:'white',
  }
});
export default App;