//===========================================Importações=============================================

import React, {useEffect, useState} from "react";
import { ScrollView, View } from "react-native";
import PeopleList  from "./PeopleList";
import axios from "axios";

//===================================================================================================

export default function PeoplePage(props){
    const {navigation} = props
    const [people, setPeople] = useState([]) //Salva o estado dessas constantes

    //Ativando uma função usando useEffect()
    useEffect(() => {
      async function getInfo(){
          const {data} = await axios.get("https://randomuser.me/api/?results=50&nat=br") //Usando API de usuários
          setPeople(data.results) //setando resultados da API em data
      }
      getInfo()
    }, [])

    //Retornando em uma ScrollView
    return(
        <ScrollView>
            <View>
                <PeopleList people={people} navigation={navigation}/>
            </View>
        </ScrollView>
    )
}