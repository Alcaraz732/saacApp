/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, { Component,useEffect,useState } from 'react';
import {Button, View,ActivityIndicator,Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomePage from './pages/Home';
import TableroPage from './pages/Tableros';
import {createStackNavigator} from '@react-navigation/stack'

/*    {isLoading ? <ActivityIndicator/> : (
              data.map((item,index)=>{
             
                  <Drawer.Screen  initialParams={{showAll:item.ID}} name={item.Nombre} component={Homefunc} />

              })
        
        
      )}*/ 
 
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function Homefunc({route,navigation}) {
  return (
  <HomePage route={route} navigation={navigation}>
    
  </HomePage>);
  
    
}
function Tablerofunc({route,navigation}) {
  return (
  <TableroPage route={route} navigation={navigation}>
    
  </TableroPage>);
  
    
}

function NotificationsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();


export default function App() {

  const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      console.log(data);
    
      useEffect(() => {
        fetch('http://10.0.2.2:3000/tableros')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);
  return (

    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Inicio">
 
        <Drawer.Screen  initialParams={{showAll:'no way'}} name={"Home"} component={Homefunc} />
        <Drawer.Screen  initialParams={{showAll:'no way'}} name="Tableros" component={TableroPage} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Home2" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
