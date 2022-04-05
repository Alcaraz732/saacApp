/* eslint-disable prettier/prettier */
/* eslint-disable no-lone-blocks */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */


//import { route } from 'express/lib/application';
//import { route } from 'express/lib/router';
import React, { Component,useEffect,useState } from 'react';
import { Text, View,SectionList,FlatList, TextInput, StyleSheet,Button,ActivityIndicator, Image,TouchableOpacity } from 'react-native';
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





const HomePage =({route,navigation})=> {

     {
      const [isLoading, setLoading] = useState(true);
      const [data, setData] = useState([]);
      console.log(data);
    
      useEffect(() => {
        fetch('http://10.0.2.2:3000/botones')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
      }, []);

      const [isLoading2, setLoading2] = useState(true);
      const [data2, setData2] = useState([]);
      useEffect(() => {
        fetch('http://10.0.2.2:3000/categorias')
          .then((response) => response.json())
          .then((json) => setData2(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading2(false));
      }, []);
        
    
    

        const [value, setText] = React.useState('');
      return (  
            
           <SafeAreaView style={{flex:1}}>
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
          <ScrollView style={{height:'45%'}}>
          <View style={{  padding:5,paddingLeft:15,paddingBottom:20, ajustifyContent:'space-around'}}  >

          {isLoading2 ? <ActivityIndicator/> : (
              data2.map((item,index)=>{
              if(index%2==0){
                return  <View style={{  flex: 2,margin:5,alignItems: 'center',justifyContent: 'space-between', backgroundColor:'#F9C106', borderWidth:1,borderRadius:5 ,width:80, height:80}}>
                <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {console.warn(data2[index].Nombre)}}>
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
      <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {console.warn(data2[index].Nombre)}}>
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

          <ScrollView  contentContainerStyle={{  overflow:'scroll'}}>
         
          <Text>{route.params.showAll}</Text>
            <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',flexWrap:'wrap' }}>
            
            {isLoading ? <ActivityIndicator/> : (
              data.map((item,index)=>{
              return  <View style={{ alignItems: 'center',justifyContent: 'flex-start',paddingTop:10, padding:5,margin:5, backgroundColor:item.Color, borderWidth:1,borderRadius:5 ,width:100, height:100}}>
                         <TouchableOpacity style={{paddingLeft:3.5}} onPress={()=> {console.warn(route)}}>
                        
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
      color: 'white',
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
      
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    highlight: {
      fontWeight: '700',
    },
  });
   
  
  
  export default HomePage;
  
