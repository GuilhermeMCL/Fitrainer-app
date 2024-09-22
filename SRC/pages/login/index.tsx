import { style } from "./styles";
import Logo  from '../../assets/Logo.png'
import Next from '../../assets/Next.png'
import Google from '../../assets/googleicon.png'
import Face from '../../assets/facebookicon.png'

import React, { useState } from 'react';
import {  Text, View, TextInput, TouchableOpacity, Alert , Image} from 'react-native';


export default function Login() {
        return (
          <View style={style.container}>
            <Image source={Logo} />
            <Text style={style.loginTitle}>LOGIN</Text>
      
            <View style={style.inputContainer}>
              <TextInput
                style={style.input}
                placeholder="E-mail ou Usuário"
              />
            <View/>
            <View style={style.inputContainer2}>
              <TextInput
                style={style.input2}
                placeholder="Senha"

              />
            </View>
            </View>
            <View style={{paddingTop: 110}}>
          
            </View>
            <View style={style.boxtext}>
            <Text style={style.forgotPassword} onPress={() => Alert.alert('Esqueci a Senha', 'Implemente a funcionalidade de recuperação de senha.')}>
              Esqueceu sua senha?
            </Text>
            </View>
            <View style={style.boxtext2}>
            <Text style={style.registerText} onPress={() => Alert.alert('Cadastrar', 'Implemente a funcionalidade de registro.')}>
              Cadastrar?
            </Text>
            </View>
            <View style={style.socialLogin}>
              <TouchableOpacity style={style.socialButton} onPress={() => Alert.alert('Google', 'Implemente o login com Google.')}>
                <Image style={style.socialButtonText} source={Google}/>

              </TouchableOpacity>
              <TouchableOpacity style={style.socialButton} onPress={() => Alert.alert('Facebook', 'Implemente o login com Facebook.')}>
                <Image style={style.socialButtonText} source={Face}/>
              </TouchableOpacity>
            </View>
          <View style={{ marginTop: 10}}>
            <TouchableOpacity style={style.nextButton} onPress={() => Alert.alert('Próximo', 'Implemente a funcionalidade de avançar.')}>
              <Image source={Next} style={style.buttonnextButtonText}/>

            </TouchableOpacity>
            </View>
          </View>
        );
      };
