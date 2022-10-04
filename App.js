import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/Cadastro/Home';
import Login from './src/Cadastro/Login';
import Cadastro from './src/Cadastro/cadastro';
import Carnes from './src/Produtos/Carnes/Carnes';
import Lanches from './src/Produtos/Lanches/Lanches';
import Marinha from './src/Produtos/Marinha/Marinha';
import Massas from './src/Produtos/Massas/Massas';
import Sobremesas from './src/Produtos/Sobremesas/Sobremesas';
import Vegetariano from './src/Produtos/Vegetariana/Vegetariano';
import HomePage from './src/HomePage';

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
        />

        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name='HomePage'
          component={HomePage}
          options={{
            headerTintColor:"#EB5656"
          }}
        />

        <Stack.Screen
          name='Carnes'
          component={Carnes}
          options={{
            headerTintColor:"#EB5656"
          }}
        />

        <Stack.Screen
          name='Lanches'
          component={Lanches}
          options={{
            headerTintColor:"#EB5656"
          }}
        />

        <Stack.Screen
          name="Marinha"
          component={Marinha}
          options={{
            headerTintColor:"#EB5656"
          }}
        />
    
        <Stack.Screen
          name="Massas"
          component={Massas}
          options={{
            headerTintColor:"#EB5656"
          }}
        />
        <Stack.Screen
          name="Sobremesas"
          component={Sobremesas}
          options={{
            headerTintColor:"#EB5656"
          }}
        />
        <Stack.Screen
          name="Vegetariano"
          component={Vegetariano}
          options={{
            headerTintColor:"#EB5656"
          }}
        />
      </Stack.Navigator>
      {/* <Rotas /> */}
    </NavigationContainer>
  );
}