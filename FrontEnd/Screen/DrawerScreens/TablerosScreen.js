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

import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from 'react-native-flat-button'
import * as variables from "../../globalVariable/variables";
import HomePage from './HomeScreen';
import RNFS from "react-native-fs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton, Colors } from 'react-native-paper';
import SweetAlert from 'react-native-sweet-alert';
import { Modal,Portal,Provider } from 'react-native-paper';





const TableroPage  = ({route,navigation})=> {

     {
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      console.log(data);
      const [isLoad, setCarga] = useState(false);
      const [modalVisible, setModalVisible] = useState(false);


     
      

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

      const DeleteData = async (uid) => {
        const username = await AsyncStorage.getItem('user_id');
        //console.log();
        fetch('http://'+variables.ip+'/tableros/'+uid, {
          method: 'DELETE',
         
          headers: {
            //Header Defination
            'Content-Type': 'application/json', 'Accept': 'application/json'
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            setLoading(false);
            console.log(responseJson);
            // If server response message same as Data Matched
            
             
              console.log(
                'Tablero borrado'
              );

              SweetAlert.showAlertWithOptions({
                title: 'El Tablero ha sido borrado:',
                subTitle:'Tablero borrado con exito',
                confirmButtonTitle: 'OK',
                confirmButtonColor: '#000',
                otherButtonTitle: 'Cancel',
                otherButtonColor: '#dedede',
                
                cancellable: true
              },
              callback => console.log('callback'));
            setCarga(false);
          })
          .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
          });
      };
      
    getData();
     

      const showModal = ()=>{
        SweetAlert.showAlertWithOptions({
          title: 'Eliminar Tablero',
          subTitle: 'Deseas eliminar el Tablero?',
          confirmButtonTitle: 'Si',
          confirmButtonColor: '#FF1818',
          otherButtonTitle: 'No',
          otherButtonColor: '#dedede',
          style: 'question',
          cancellable: true
        },callback => console.log('callback'));
      }
        
      const  changeTablero= async(num)=>{
        variables.tablero=num;
        await AsyncStorage.setItem('tablero', num+'');
        navigation.navigate('HomeScreen');
        
      }
      const hideModal = () => setModalVisible(false);
    
      const containerStyle = {backgroundColor: 'white', padding: 20, height:'30%',borderRadius:20};
        const [value, setText] = React.useState('');
        const [idDel, setIDDel] = React.useState('');
      return (  
        <Provider>   
        <View style={styles.container}>
          
          <Portal>
          <Modal
       contentContainerStyle={containerStyle}
        visible={modalVisible}
        onDismiss={hideModal}
        style={{padding:20,margin:20, }}
      >
        
          <Text style={{color:'black'}}>
            ¿Deseas eliminar el tablero?
          </Text>
          <Button 
          type="custom"
          backgroundColor={"#D91212"}
          borderColor={"#ffffff"}
          borderRadius={10}
          shadowHeight={5} 
          title={'Si'}
          onPress={() => 
        DeleteData(idDel)}
          >Si</Button>
          <Button
           type="custom"
           backgroundColor={"#000000"}
           borderColor={"#ffffff"}
           borderRadius={10}
           shadowHeight={5} 
           onPress={hideModal}
           title={'No'}>No</Button>
        
      </Modal>
      </Portal>

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
        <View>
    <Text>Hello world!</Text>
  
  </View>
      
        {isLoading ? <ActivityIndicator/> : (
              data.map((item,index)=>{
              return   ( 
              <TouchableHighlight
              onPress={() => 
                changeTablero(item.ID)}
              onLongPress={()=>{
                console.log('long press');
                //showModal();
                setIDDel(item.ID)
                setModalVisible(true);
              }}
            
              //Here is the trick
              //activeOpacity={0.6}
             >
              <Button
                type="custom"
                backgroundColor={item.Color}
                borderColor={"#ffffff"}
                borderRadius={10}
                shadowHeight={5}
                containerStyle={styles.buttonContainer}
                contentStyle={styles.content}
                
             
              title={item.Nombre}
              >
              
              {item.Nombre}
            </Button>
              </TouchableHighlight>      
              )
              })
        
        
      )}


      </View>
      </Provider>
    

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
  
