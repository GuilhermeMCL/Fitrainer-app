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

    </View> 



   



   )
    








}