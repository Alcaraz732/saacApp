/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */


//import { route } from 'express/lib/application';
//import { route } from 'express/lib/router';
import React, { Component,useEffect,useState } from 'react';
import { Text, View,SectionList,FlatList, TextInput, StyleSheet,Button,ActivityIndicator, Image,TouchableOpacity,ToastAndroid } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as variables from "../../globalVariable/variables";
import RNRestart from 'react-native-restart';
import * as RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';
import SweetAlert from 'react-native-sweet-alert';
import ModalSelector from 'react-native-modal-selector'

const MessageTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={50} 
        
        placeholderTextColor="#000000"
      />
    );
  }
 
  






const HomePage =({route,navigation})=> {

     {
      let index=0;
      //Lista asistentes
      const dataAsis = [
        { key: index++, label: 'Alexa', valor:'Alexa' },
        { key: index++, label: 'Google Home', valor:'Okey, Google' },
        { key: index++, label: 'Ciri', valor:'Ciri' },
        { key: index++, label: 'Cortana', valor:'Cortana' },
      
        
    ];
    
    
    
      //************* */


      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);

      const [isLoad, setCarga] = useState(false);
      
      Tts.addEventListener('tts-finish', (event) => startRecording());
        
      const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('prueba', value);
          setCarga(false);
          setLoading(true)
          getData();
          //RNRestart.Restart();
       
        } catch (e) {
          // saving error
        }
      }
      const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('prueba')
         
          if(value!=null && isLoad==false){
             fetch('http://'+variables.ip+'/botones/categoria/'+value)
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
      const [isLoading2, setLoading2] = useState(true);
      const [data2, setData2] = useState([]);
      const [isLoad2, setCarga2] = useState(false);
      

      React.useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setCarga2(false);
            setLoading2(true);
            getData2();
        });
        return unsubscribe;
  }, [getData2, navigation]);
      const getData2 = async () => {
        try {
        
          const value = await AsyncStorage.getItem('tablero')
         
          if(value!=null && isLoad2==false){
             fetch('http://'+variables.ip+'/categorias/tablero/'+value)
          .then((response) => response.json())
          .then((json) =>{
            let iterableResponse = Object.values(json);
            
            //iterableResponse.map(item => console.log(item));
            setData2(iterableResponse);
          })
          .catch((error) => console.error(error))
          
          .finally(() => setLoading2(false));

          setCarga2(true);
          
          }
        } catch(e) {
          // error reading value
        }
      }
    //Al pulsar un boton
      const activateSound = async (text) => {

        setText(value + " " + text);
        Tts.getInitStatus().then(() => {
          Tts.setDefaultLanguage('es-ES');
          Tts.setDefaultRate(0.25);
          Tts.speak(variables.asistente+text);
          
          
        });
      }
  //Al pulsar hablar
  const speakFunc= async() => {

    Tts.getInitStatus().then(() => {
      Tts.setDefaultLanguage('es-ES');
      Tts.setDefaultRate(0.25);
      Tts.speak(variables.asistente+value);
      
      
    });

  }
  
    getData2();
    getData();

     
    /* useEffect(() => {
        fetch('http://'+variables.ip+'/categorias/tablero/'+variables.tablero)
          .then((response) => response.json())
          .then((json) =>{
            let iterableResponse = Object.values(json);
           // iterableResponse.map(item => console.log(item));
            setData2(iterableResponse);
          }).catch((error) => console.error(error))
          .finally(() => setLoading2(false));
      }, []);*/


      //VOZ PROCESAMIENTO
      const [result, setResult] = useState('')
  const [isLoadingVoice, setLoadingVoice] = useState(false)

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStartHandler;
    Voice.onSpeechEnd = onSpeechEndHandler;
    Voice.onSpeechResults = onSpeechResultsHandler;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onSpeechStartHandler = (e) => {
    console.log("start handler==>>>", e)
  }
  const onSpeechEndHandler = (e) => {
    setLoadingVoice(false)
    console.log("stop handler", e)
  }

  const onSpeechResultsHandler = (e) => {
    let text = e.value[0]
    setResult(text)
    console.log("speech result handler", e)
    SweetAlert.showAlertWithOptions({
      title: 'El Asistente ha respondido:',
      subTitle: e.value[0],
      confirmButtonTitle: 'OK',
      confirmButtonColor: '#000',
      otherButtonTitle: 'Cancel',
      otherButtonColor: '#dedede',
      style: 'success',
      cancellable: true
    },
    callback => console.log('callback'));
  }

  const startRecording = async () => {
    setLoadingVoice(true)
    try {
      await Voice.start('es-ES')
    } catch (error) {
      console.log("error raised", error)
    }
  }

  const stopRecording = async () => {
    try {
      await Voice.stop()
    } catch (error) {
      console.log("error raised", error)
    }
  }

        
    
    

        const [value, setText] = React.useState('');
      return (  
            
           <SafeAreaView   style={{flex:1}}>
            {/*BARRA DE BUSQUEDA*/ }
            <View>
                <MessageTextInput
                    multiline
                    numberOfLines={3}
                    onChangeText={text => setText(text)}
                    value={value}
                    style={{ padding: 10 }, styles.input} />
            </View>

           {/*CATEGORIAS*/ }
          <ScrollView style={{height:'17%'}}>
          <View style={{  padding:5,paddingLeft:15,paddingBottom:20, ajustifyContent:'space-around'}}  >

          {isLoading2 ? <ActivityIndicator/> : (
              data2.map((item,index)=>{
              if(index%2==0){
                return  <View style={{  flex: 2,margin:5,alignItems: 'center',justifyContent: 'space-between', backgroundColor:'#F9C106', borderWidth:1,borderRadius:5 ,width:80, height:80}}>
                <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {storeData(item.ID+'')}}>
                <Image style={styles.images} source={{
                   uri: item.Icono,
                 }}/> 
           <Text style={styles.text}>{item.Nombre}</Text>
               </TouchableOpacity>
           </View>  

              }
          

              })
        
        
      )}



  
   
          </View>
          <View style={{ top: -125    , padding:5,paddingLeft:30,paddingBottom:20, ajustifyContent:'space-around'}}  >
              
{isLoading2 ? <ActivityIndicator/> : (
    data2.map((item,index)=>{
    if(index%2==1){
      return  <View style={{  flex: 2,alignItems: 'center',left:100,top:-80,justifyContent: 'space-between', margin:5  ,backgroundColor:'#F9C106', borderWidth:1,borderRadius:5 ,width:80, height:80}}>
      <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {storeData(item.ID+'')}}>
      <Image style={styles.images} source={{
         uri: item.Icono,
       }}/> 
 <Text style={styles.text}>{item.Nombre}</Text>
     </TouchableOpacity>
 </View>

    }


    })


)}


</View>
          
          
           {/*HERRAMIENTAS*/ }
          
          <View style={{padding:5,paddingRight:12,paddingBottom:10,alignSelf:'flex-end',position:'absolute',direction:'rtl'}}  >
 
            <View style={{ flex: 2,alignItems: 'center',justifyContent: 'flex-start',paddingTop:10, backgroundColor:'#D3CFC1', borderWidth:1,borderRadius:5 ,width:55, height:55}}>
            <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {speakFunc()}}>      
                <Image style={styles.icon} source={{
                   uri: 'https://icons.iconarchive.com/icons/custom-icon-design/mono-general-4/512/sound-icon.png',
                  }}/> 
                 
                  
              </TouchableOpacity>

              </View >
              <View style={{ top:3,flex: 2,alignItems: 'center',justifyContent: 'flex-start',paddingTop:10, backgroundColor:'#D3CFC1', borderWidth:1,borderRadius:5, width:55,height:55}}>
              <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {startRecording();}}>      
                <Image style={styles.icon} source={{
                   uri: 'https://cdn2.iconfinder.com/data/icons/language-learning/24/Mesa_de_trabajo_7-512.png',
                  }}/> 
                  
                  
              </TouchableOpacity>
              </View >
              <View style={{ top:6,flex: 2,alignItems: 'center',justifyContent: 'flex-start',paddingTop:10, backgroundColor:'#D3CFC1', borderWidth:1,borderRadius:5, width:55,height:55}}>
              <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {console.log('does not work');}}>      
                <Image style={styles.icon} source={{
                   uri: 'http://cdn.onlinewebfonts.com/svg/img_203138.png',
                  }}/> 
                  
                  
              </TouchableOpacity>
              </View >

                  

              <View style={{ flex: 2,position:'absolute',alignItems: 'center',justifyContent: 'flex-start',paddingTop:10,right:85,top:5, backgroundColor:'#D3CFC1', borderWidth:1,borderRadius:5 ,width:55, height:55}}>
            <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {setText('');}}>      
                <Image style={styles.icon} source={{
                   uri: 'https://www.iconsdb.com/icons/preview/red/x-mark-xxl.png',
                  }}/> 
                 
                  
              </TouchableOpacity>

              </View >
              <View style={{ position:'absolute',flex: 2,alignItems: 'center',justifyContent: 'flex-start',paddingTop:10, right:85,top:64,backgroundColor:'#D3CFC1', borderWidth:1,borderRadius:5, width:55,height:55}}>
                
             
             
              <Image style={styles.icon} source={{
                   uri: 'https://cdn-icons-png.flaticon.com/512/1692/1692804.png',
                  }}/> 
                   <ModalSelector
                    data={dataAsis}
                   cancelText= 'Volver'
      
                   style={{backgroundColor:'rgba(0,0,0,0.5', display:'flex', position:'absolute', width:'80%',height:'80%'}}
                    onChange={(option)=>{ variables.asistente = option.valor }} />
              
    
              
              </View >
              <View style={{ position:'absolute',flex: 2,alignItems: 'center',justifyContent: 'flex-start',paddingTop:10,right:85,top:123, backgroundColor:'#D3CFC1', borderWidth:1,borderRadius:5, width:55,height:55}}>
              <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {console.log('does not work');}}>      
                <Image style={styles.icon} source={{
                   uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Star_icon-72a7cf.svg/2048px-Star_icon-72a7cf.svg.png',
                  }}/> 
                  
                  
              </TouchableOpacity>
              </View >
              
              
              
                </View>
          </ScrollView>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              
              }}
            />
                       {isLoadingVoice ? <ActivityIndicator text="Cargando"/> : (console.log("Loading"))}

          <ScrollView  contentContainerStyle={{  overflow:'scroll'}}>
         
         
            <View style={{flexDirection:'row',flex:4,justifyContent:'space-between',flexWrap:'wrap' }}>
            
            {isLoading ? <ActivityIndicator/> : (
              data.map((item,index)=>{
              return  <View style={{ alignItems: 'center',justifyContent: 'flex-start',paddingTop:10, padding:5,margin:5, backgroundColor:item.Color, borderWidth:1,borderRadius:5 ,width:100, height:100}}>
                         <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {activateSound(item.Nombre)}}>
                        
                        <Text key={index} style={styles.textboton}>{item.Nombre}</Text>
                        <Image style={styles.icon} source={{
                          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Star_icon-72a7cf.svg/2048px-Star_icon-72a7cf.svg.png',
                          
                        }}/> 
                        </TouchableOpacity>
                    </View>
                      

              })
        
        
      )}
      </View>
               
            
            </ScrollView>
          
                
        </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    text: {
      fontFamily: 'Odor Mean Chey',
      color: 'black',
      borderRadius:1,
      alignSelf:'center',
    },
    textboton: {
      fontFamily: 'Odor Mean Chey',
      color: 'black',
      borderRadius:1,
      alignSelf:'center',
    },
    icon: {
      width:35,
      height: 35,
      alignSelf:'center',
    },
    images: {
      width:50,
      height: 50,
      alignSelf:'center',
    },
    input: {
      color:'black',
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    highlight: {
      fontWeight: '700',
    },
  });
   
  
  
  export default HomePage;
  
