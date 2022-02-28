//===========================================Importações=============================================

import React from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PeoplePage from './src/Components/PeoplePage';
import Detalhes from './src/Components/Detalhes';

//===================================================================================================

function App() {

  const Stack = createStackNavigator()

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Lista de Pessoas" component={PeoplePage} options={style}/>
        <Stack.Screen name="Detalhes" component={Detalhes} options={({route}) => {
          const titlePage = route.params.person.name.first

          return({
            title: titlePage,
            headerStyle: style.headerStyle,
            headerTitleStyle: style.headerTitleStyle
          })
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

//Declarando a estilização
const style = {
  headerStyle:{
    backgroundColor: '#2a67ad'
  },
  headerTitleStyle:{
    color: '#FFF',
    fontSize: 30,
    textAlign: 'center'
  }
}

//Exportando o componente
export default App
