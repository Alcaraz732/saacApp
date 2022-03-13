/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */


import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet,Button, Image,TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const MessageTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={50}
      />
    );
  }

  

const HomePage =()=> {

     {
        const [value, setText] = React.useState('');
        return (  
            
           <SafeAreaView>
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
          <ScrollView >
            <View style={{padding:5,paddingLeft:15,paddingBottom:20, ajustifyContent:'space-around'}}  >
 
            <View style={{ flex: 2,alignItems: 'center',justifyContent: 'flex-start',paddingTop:10, backgroundColor:'#F9C106', borderWidth:1,borderRadius:5 ,width:80, height:80}}>
            <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {console.log('does not work');}}>      
                <Image style={styles.images} source={{
                   uri: 'https://cdn-icons-png.flaticon.com/512/100/100766.png',
                  }}/> 
                  <Text style={styles.text}>Frases</Text>
                  
              </TouchableOpacity>

              </View >
              <View style={{ top:8,flex: 2,alignItems: 'center',justifyContent: 'flex-start',paddingTop:10, backgroundColor:'#F9C106', borderWidth:1,borderRadius:5, width:80,height:80}}>
              <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {console.log('does not work');}}>      
                <Image style={styles.images} source={{
                   uri: 'https://cdn-icons-png.flaticon.com/512/88/88290.png',
                  }}/> 
                  <Text style={styles.text}>Noticias</Text>
                  
              </TouchableOpacity>
              </View >
              <View style={{ flex: 2, padding: 2,position:'absolute',alignSelf: 'center', left:100,paddingTop:10,top:5,backgroundColor:'#F9C106', borderWidth:1,borderRadius:5, width:80,height:80 }}>
              <TouchableOpacity style={{paddingLeft:1}} onPress={()=> {console.log('does not work');}}>      
                <Image style={styles.images} source={{
                   uri: 'https://icons-for-free.com/iconfiles/png/512/forecast+sun+weather+icon-1320184881471073011.png',
                  }}/> 
                  <Text style={styles.text}>Tiempo</Text>
                  
              </TouchableOpacity>
              </View>
              <View style={{ flex: 2, padding: 2,position:'absolute',alignSelf: 'center', left:100,paddingTop:10, top:93,backgroundColor:'#F9C106', borderWidth:1,borderRadius:5, width:80,height:80 }}>
              <TouchableOpacity style={{paddingLeft:1}} onPress={()=> {console.log('does not work');}}>      
                <Image style={styles.images} source={{
                   uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Simple_Music.svg/600px-Simple_Music.svg.png',
                  }}/> 
                  <Text style={styles.text}>Musica</Text>
                  
              </TouchableOpacity>
              </View>
              
                </View>
          
          
           {/*HERRAMIENTAS*/ }
          
          <View style={{padding:5,paddingRight:12,paddingBottom:10,alignSelf:'flex-end',position:'absolute',direction:'rtl'}}  >
 
            <View style={{ flex: 2,alignItems: 'center',justifyContent: 'flex-start',paddingTop:10, backgroundColor:'#D3CFC1', borderWidth:1,borderRadius:5 ,width:55, height:55}}>
            <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {console.log('does not work');}}>      
                <Image style={styles.icon} source={{
                   uri: 'https://cdn.icon-icons.com/icons2/2550/PNG/512/backspace_icon_152694.png',
                  }}/> 
                 
                  
              </TouchableOpacity>

              </View >
              <View style={{ top:3,flex: 2,alignItems: 'center',justifyContent: 'flex-start',paddingTop:10, backgroundColor:'#D3CFC1', borderWidth:1,borderRadius:5, width:55,height:55}}>
              <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {console.log('does not work');}}>      
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
            <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {console.log('does not work');}}>      
                <Image style={styles.icon} source={{
                   uri: 'https://www.iconsdb.com/icons/preview/red/x-mark-xxl.png',
                  }}/> 
                 
                  
              </TouchableOpacity>

              </View >
              <View style={{ position:'absolute',flex: 2,alignItems: 'center',justifyContent: 'flex-start',paddingTop:10, right:85,top:64,backgroundColor:'#D3CFC1', borderWidth:1,borderRadius:5, width:55,height:55}}>
              <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {console.log('does not work');}}>      
                <Image style={styles.icon} source={{
                   uri: 'https://cdn-icons-png.flaticon.com/512/1692/1692804.png',
                  }}/> 
                  
                  
              </TouchableOpacity>
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
            <ScrollView>
            <View style={{ flex: 3,padding:5,alignItems: 'flex-start', justifyContent: 'center' }}>
                    <Text>Aqui se cargaran los botones</Text>
                </View>
            </ScrollView>
          
                
        </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    text: {
      fontFamily: 'Odor Mean Chey',
      color: 'white',
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
      
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    highlight: {
      fontWeight: '700',
    },
  });
   
  
  
  export default HomePage;
  
