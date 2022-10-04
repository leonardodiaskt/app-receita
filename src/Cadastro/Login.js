import * as React from 'react';
import { StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

// import Banco from './Database/Db'

import { db } from '../config/firebaseconfig';

import Img from '../../assets/login.jpg'
 
export default function Login({ navigation }) {

  const [VerificaSenha, setVerificaSenha] = useState('')
  const [VerificaEmail, setVerificaEmail] = useState('')

  const auth = getAuth();

  function VerificationUser() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, VerificaEmail, VerificaSenha)
      .then((user) => { navigation.navigate('HomePage') })
      .catch((err) => { alert("Usuário não cadastrado ou ocorreu algum erro no banco: " + err) })
  }

  return (
    <ImageBackground
      source={Img} style={stylesLog.imgCad}>

      <Text style={stylesLog.login}>Login</Text>

      <TextInput
        onChangeText={(value) => setVerificaEmail(value)}
        placeholder='Email'
        placeholderTextColor={'white'}
        style={stylesLog.inputE} />

      <TextInput
        onChangeText={(value) => setVerificaSenha(value)}
        placeholder='Senha'
        placeholderTextColor={'white'}
        style={stylesLog.inputS} />

      <TouchableOpacity
        onPress={() => VerificationUser()}
        style={stylesLog.input}>
        <Text style={stylesLog.loginButtom}>Logar</Text>
      </TouchableOpacity>

    </ImageBackground>

  )
}

const stylesLog = StyleSheet.create({
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

  inputE: {
    marginTop: 50,
    width: '60%',
    height: 70,
    color: '#fff',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 30,
    textColor: '#fff'
  },

  login: {
    fontSize: 70,
    color: '#fff',
    marginTop: 120,
    alignSelf: 'center'
  },
  input: {
    marginTop: 100,
    backgroundColor: '#fff',
    width: '60%',
    height: 70,
    borderRadius: 30,
    alignSelf: 'center',
    textColor: 'Black',
    alignItems: "center",
  },
  loginButtom: {
    fontSize: 45

  }
});
