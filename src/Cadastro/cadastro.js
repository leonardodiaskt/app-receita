import * as React from 'react';
import { StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useState } from 'react';

import { db } from '../config/firebaseconfig';

import Img from '../../assets/login.jpg'

export default function Cadastro({ navigation }) {


  const [Email, setEmail] = useState()
  const [Senha, setSenha] = useState()

  const auth = getAuth();


  function NewUser() {
    createUserWithEmailAndPassword(auth, Email, Senha)
      .then((userCredential) => {
        alert("Usuario cadastrado com sucesso")
        const user = userCredential.user;
        console.log(userCredential);
        {navigation.navigate('Home')}
      })

      .catch((error) => {
        alert("O email é invalido")
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  return (
    <ImageBackground
      source={Img} style={stylesCad.imgCad}>

      <Text style={stylesCad.login}>Cadastro</Text>

      <TextInput
        placeholder='Nome'
        placeholderTextColor={'white'}
        style={stylesCad.inputS} />

      <TextInput
        onChangeText={(value) => { setEmail(value) }}
        placeholder='Email'
        placeholderTextColor={'white'}
        style={stylesCad.inputS} />

      <TextInput
        onChangeText={(value) => { setSenha(value) }}
        placeholder='Senha'
        placeholderTextColor={'white'}
        style={stylesCad.inputS} />


      <TouchableOpacity
        onPress={() => NewUser()}
        style={stylesCad.input}>
        <Text style={stylesCad.cadastrar}>Cadastrar</Text>
      </TouchableOpacity>

    </ImageBackground>

  )
}


const stylesCad = StyleSheet.create({
  login: {
    fontSize: 70,
    color: '#fff',
    marginTop: 90,
    alignSelf: 'center'
  },
  imgCad: {
    height: '100%',
    width: '100%',
    flex: 1,
    alignItems: 'center'
  },
  inputS: {
    marginTop: 50,
    width: '60%',
    height: 70,
    color: '#fff',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 30,
  },
  cadastrar: {
    fontSize: 50,
    color: 'Black',
    alignSelf: 'center'
  },
  input: {
    marginTop: 100,
    backgroundColor: '#fff',
    width: '60%',
    height: 70,
    fontSize: 30,
    borderRadius: 30,
    alignSelf: 'center',
    textColor: 'Black',
    alignItems: "center",
  }
});

