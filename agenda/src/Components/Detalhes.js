//===========================================Importações=============================================

import React from "react";
import {View, Image, StyleSheet} from 'react-native';
import DataLine from "./DataLine";

//===================================================================================================

function Detalhes({route}){
    
    const {person} = route.params

    return(
        <View style={styles.background}>
            <Image source={{uri: person.picture.large}} style={styles.photo}/>
            <DataLine label="Email: " data={person.email}/>
            <DataLine label="Cidade: " data={person.location.city}/>
            <DataLine label="Estado: " data={person.location.state}/>
            <DataLine label="Tel: " data={person.phone}/>
            <DataLine label="Cel: " data={person.cell}/>
            <DataLine label="Nacionalidade: " data={person.nat}/>
        </View>
    );
}


//Declarando as estilizações
const styles = StyleSheet.create({
    photo: {
        aspectRatio: 1,
        marginLeft: 20,
        borderRadius: 20,
        width: 340,
        heigth: 170,
        flex: 1
    },
    container: {
        padding: 30,

    },
    background:{
        backgroundColor: "#0E1538",
    }
})

//Exportando o componente
export default Detalhes;