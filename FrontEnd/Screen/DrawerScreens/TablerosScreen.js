/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */


//import { route } from 'express/lib/application';
//import { route } from 'express/lib/router';
import React, { Component,useEffect,useState } from 'react';
import { Text, View,SectionList,FlatList, TextInput,  Alert,
  AppRegistry,StyleSheet,ActivityIndicator, Image,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from 'react-native-flat-button'
import * as variables from "../../globalVariable/variables";
import HomePage from './HomeScreen';
import RNFS from "react-native-fs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton, Colors } from 'react-native-paper';








const TableroPage  = ({route,navigation})=> {

     {
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      console.log(data);
      const [isLoad, setCarga] = useState(false);
     // const user = await AsyncStorage.getItem('user_id')
      
      //console.log(user._W);
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('user_id')
         
          if(value!=null && isLoad==false ){
             fetch('http://'+variables.ip+'/tableros/usuario/'+value)
          .then((response) => response.json())
          .then((json) =>{
            let iterableResponse = Object.values(json);
            
            //iterableResponse.map(item => console.log(item));
            setData(iterableResponse);
          })
          .catch((error) => console.error(error))
          
          .finally(() => setLoading(false));
          setCarga(true);
          
          
          }
        } catch(e) {
          // error reading value
        }
      }
    getData();
     

 
        
      const  changeTablero= async(num)=>{
        variables.tablero=num;
        await AsyncStorage.setItem('tablero', num+'');
        navigation.navigate('HomeScreen');
        
      }
    

        const [value, setText] = React.useState('');
      return (  
            
        <View style={styles.container}>

      <IconButton
          icon="plus"
          color={Colors.blue500}
          style={{display:'flex',position:'absolute', top:10, right:1 }}
          size={30}
          onPress={() => navigation.navigate('CreateTableroScreenStack')}
        />
        <IconButton
          icon="reload"
          color={Colors.blue500}
          style={{display:'flex',position:'absolute', top:10, right:40 }}
          size={30}
          onPress={() => setCarga(false)}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color:'black' }}>
          Selecciona el Tablero
        </Text>

        {isLoading ? <ActivityIndicator/> : (
              data.map((item,index)=>{
              return   ( 
              <TouchableOpacity
              onLongPress={console.log('long press')}
            
              //Here is the trick
              activeOpacity={0.6}
             >
              <Button
                type="custom"
                backgroundColor={item.Color}
                borderColor={"#ffffff"}
                borderRadius={10}
                shadowHeight={5}
                containerStyle={styles.buttonContainer}
                contentStyle={styles.content}
                  onPress={() => 
                changeTablero(item.ID)}
             
              title={item.Nombre}
              >
              
              {item.Nombre}
            </Button>
              </TouchableOpacity>      
              )
              })
        
        
      )}

    
      </View>
    

        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  buttonContainer: {
    width: 300,
    height: 150,
    marginVertical: 5
  },
  content:{
    fontSize: 22
  }
  });
   
  
  
  export default TableroPage;
  
