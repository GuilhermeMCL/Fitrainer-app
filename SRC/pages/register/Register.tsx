import React, { useState } from 'react';
import {  Text, View, TextInput, TouchableOpacity, Alert , Image} from 'react-native';
import { style } from './styles';
import Logo from'../../assets/Logo.png';








export default function Registro  (){  
   return (

    <View style={style.container}> 
         
         
         <View style={style.top} > 
            <Image source={Logo}/>
         </View>
         <Text style={style.texto}>REGISTRAR</Text>

      <View style={style.Main}>
         <View style={style.inputContainer2}>
               <TextInput style={style.input2} placeholder="E-Mail"/> 
               <TextInput style={style.input2} placeholder='Senha'/>
               <TextInput style={style.input2} placeholder='Repita a Senha'/>
         </View>



      
      </View>

</View>

   )

}