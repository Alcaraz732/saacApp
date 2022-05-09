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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IconButton, Colors } from 'react-native-paper';
import { ColorPicker,TriangleColorPicker,fromHsv  } from 'react-native-color-picker'
import SweetAlert from 'react-native-sweet-alert';
import SettingsList from 'react-native-settings-list';





const SettingScreen  =  ({route,navigation})=> {

     {
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      console.log(data);
      const [isLoad, setCarga] = useState(false);

    


        const [value, setText] = React.useState('');
        const [color, setColor] = React.useState('');
      return (  
            
        <View style={{backgroundColor:'#F0F0F1',flex:1,color:'black'}}>
        <View style={{flex:1, marginTop:50}}>
          <SettingsList>
          <SettingsList.Header headerText='Personalización' headerStyle={{color:'blue'}}/>
            <SettingsList.Item
       
              itemWidth={50}
              title='Color de fondo'
              titleStyle={{color:'black'}}
              onPress={() => Alert.alert('Icon Example Pressed')}
              
            />
                <SettingsList.Item
                
                itemWidth={50}
                title='Tamaño del texto'
                titleStyle={{color:'black'}}
                onPress={() => Alert.alert('Icon Example Pressed')}
                
                />
                <SettingsList.Item
                
                itemWidth={50}
                title='Tamaño de los botones'
                titleStyle={{color:'black'}}
                onPress={() => Alert.alert('Icon Example Pressed')}
                
                />
                <SettingsList.Item
                
                itemWidth={50}
                title='Discapacidad'
                titleStyle={{color:'black'}}
                onPress={() => Alert.alert('Icon Example Pressed')}
                
                />
                
            <SettingsList.Header headerText='Sonido' headerStyle={{color:'blue', marginTop:50}}/>
            <SettingsList.Item titleStyle={{color:'black'}} titleInfo='Cambiar tono de voz de la aplicación' hasNavArrow={false} title='Tono'/>
            <SettingsList.Item hasSwitch={true} hasNavArrow={false} titleStyle={{color:'black'}} title='Hablar al pulsar'/>
            <SettingsList.Item titleStyle={{color:'black'}}titleInfo='Cambiar velocidad de habla de la aplicación' hasNavArrow={false} title='Velocidad'/>
  
          </SettingsList>
        </View>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    color:'black',
  },
  });
   
  
  
  export default SettingScreen;
