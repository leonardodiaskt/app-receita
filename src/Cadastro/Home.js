import { StyleSheet, ImageBackground,Text, TouchableOpacity, View } from 'react-native';

import Img from '../../assets/login.jpg'

export default function Home({ navigation }) {
  return (
      <ImageBackground 
      source={Img} style={styles.img}>

        <View>

          <Text style={styles.welcome}>Welcome to Receita da Adriane</Text>
          
          <TouchableOpacity 
          onPress={() => navigation.navigate('Login')}
          style={styles.input}>
            <Text style={styles.login}>Login</Text>
          </TouchableOpacity>
        
          <TouchableOpacity   
          style={styles.cadastrar}
          onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.cadastro}>Cadastrar-se</Text>
          </TouchableOpacity>
        </View>
      

      </ImageBackground>
  );
}


const styles = StyleSheet.create({
  img:{
    height: '100%',
    width: '100%',
    flex: 1,
    color:'rgba(0,0,1,1)'

  },
  welcome:{
    fontSize: 70,
    color: '#fff',
    marginLeft: 'auto',
    marginTop: 150 
  },
  input:{
    marginTop: 230,
    backgroundColor: '#fff',
    width: '60%',
    height: 70,
    fontSize: 30,
    borderRadius: 30,
    alignSelf: 'center',
    textColor: 'Black',
    alignItems: "center",
    
  },
  cadastrar:{
    marginTop: 8,
    color: '#fff',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  login:{
  fontSize: 45,
  },
  cadastro:{
  color: '#fff'
  }

});

