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
import * as variables from "../globalVariable/variables";
import HomePage from './Home';
import RNFS from "react-native-fs";
 







const TableroPage =({route,navigation})=> {

     {
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      console.log(data);
    
      useEffect(() => {
        fetch('http://10.0.2.2:2000/tableros')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

 
        
     function changeTablero(num){
        variables.tablero=num;
        navigation.navigate('Home');
        
      }
    

        const [value, setText] = React.useState('');
      return (  
            
        <View style={styles.container}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Seleccionar Tablero
        </Text>

        {isLoading ? <ActivityIndicator/> : (
              data.map((item,index)=>{
              return      <Button
                type="custom"
                backgroundColor={item.Color}
                borderColor={"#16a085"}
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
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    width: 200,
    height: 50,
    marginVertical: 5
  },
  content:{
    fontSize: 22
  }
  });
   
  
  
  export default TableroPage;
  
