/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */


//import { route } from 'express/lib/application';
//import { route } from 'express/lib/router';
import React, { Component,useEffect,useState } from 'react';
import { Text, View,SectionList,FlatList, TextInput,  Alert,
  AppRegistry,StyleSheet,ActivityIndicator, Image,TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from 'react-native-flat-button'
import * as variables from "../../globalVariable/variables";
import HomePage from './HomeScreen';
import RNFS from "react-native-fs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton, Colors } from 'react-native-paper';
import { ColorPicker,TriangleColorPicker,fromHsv  } from 'react-native-color-picker'
import SweetAlert from 'react-native-sweet-alert';






const CreateBoton  =  ({route,navigation})=> {

     {
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      console.log(data);
      const [isLoad, setCarga] = useState(false);

      const handleSubmitButton = async() => {
       
        const categoria = await AsyncStorage.getItem('prueba');
        //console.log();
        fetch('http://'+variables.ip+'/botones', {
          method: 'POST',
          body: JSON.stringify({'Nombre':`${value}` ,'categoria':`${categoria}`,'Imagen':`${icon}`,'Color':`${fromHsv(color)}`,'Sonido':`${sonido}`,'Favorito':`0`,}) ,
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
            if (responseJson.Nombre != null) {
             
              console.log(
                'Cat created'
              );

              SweetAlert.showAlertWithOptions({
                title: 'La Categoria ha sido creada:',
                subTitle:'Categoria creada con exito',
                confirmButtonTitle: 'OK',
                confirmButtonColor: '#000',
                otherButtonTitle: 'Cancel',
                otherButtonColor: '#dedede',
                style: 'success',
                cancellable: true
              },
              callback => console.log('callback'));
            } else {
              
            }
          })
          .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
          });
      };
    


        const [value, setText] = React.useState('');
        const [color, setColor] = React.useState('');
        const [icon, setIcono] = React.useState('');
        const [sonido, SetSound] = React.useState('');
      return (  
            
        <View style={{flex: 1}}>
     
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={{alignItems: 'center'}}>

        </View>
        <KeyboardAvoidingView enabled>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(UserName) => setText(UserName)}
              underlineColorAndroid="#f000"
              placeholder="Nombre"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Icon) => setIcono(Icon)}
              underlineColorAndroid="#f000"
              placeholder="URL del icono"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(Sonido) => SetSound(Sonido)}
              underlineColorAndroid="#f000"
              placeholder="Sonido que emitira el bot??n"
              placeholderTextColor="#8b9cb5"
              autoCapitalize="sentences"
              returnKeyType="next"
              blurOnSubmit={false}
            />
          </View>
          
          <View style={{flex: 1, padding: 45, }}>
      <Text style={{color:'black'}}>Color:</Text>
          <TriangleColorPicker
              onColorSelected={color => alert(`Color seleccionado: ${color}`)}
              onColorChange= {color=>setColor(color)}
              style={{flex: 1,right:-50, height:200, width:200,textAlign:'center'}}
            />

				
			</View>

         
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={handleSubmitButton}>
            <Text style={styles.buttonTextStyle}>Crear Bot??n</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>

        );
    }
}

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  });
   
  
  
  export default CreateBoton
