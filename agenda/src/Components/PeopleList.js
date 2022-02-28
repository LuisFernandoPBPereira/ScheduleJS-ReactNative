//=========================================IMPORTAÇÕES==================================================

import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';

//======================================================================================================

//====================================COMPONENTE PEOPLELIST=============================================
function PeopleList({people, navigation}) {

  if(people.length != 0){ //Se o tamanho de people for diferente de 0, executa a função.
    const textElements = people.map((person) => {
      const {login, picture, name} = person;
      
      //Usando botão TouchableOpacity no return
      return(
        <TouchableOpacity onPress={() => { 
          navigation.navigate("Detalhes", {person})
        }} key={login.uuid}>

          {/* adicionando estilo na view */}
          <View style={styles.container}> 
            <Image source={{uri: picture.thumbnail}} style={styles.photo}/>
            <Text style={styles.text}>{`${name.first} ${name.last}`}</Text>
          </View>
        </TouchableOpacity>
      )
    })
    

    return(
      <View>
        {textElements}
      </View>
    )
  }

  return(
    <Text style={styles.loading}> 
      Carregando os dados... Aguarde por favor!
    </Text>
  )
  
}

//Declarando as estilizações
const styles = StyleSheet.create({
  photo:{
    aspectRatio: 1,
    marginLeft: 20,
    borderRadius: 20,
    width: 1,
    heigth: 50,
    flex: 1
  },
  container: {
    backgroundColor: "#0E1538",
    heigth: 80,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  text: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 5,
    color: "#FFF"
  },
  loading: {
    fontSize: 20,
    color: "#F00",
    
  }
})

//Exportando o componente
export default PeopleList

//==========================================================================================================================================





