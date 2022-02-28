//===========================================Importações=============================================

import React from "react";
import {View, Text, StyleSheet} from "react-native";

//===================================================================================================

function DataLine(props){
    return(
        <View style={styles.line}>
            <Text style={styles.label}>{props.label}</Text>
            <Text style={styles.label}>{props.data}</Text>
        </View>
    )
}

//Declarando as estilizações
const styles = StyleSheet.create({
    line: {
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: "#C5C5C5",
        backgroundColor: "#0E1538",
    },
    label:{
        color: "#FFF",
        fontSize: 25 
    }
})

//Exportando o componente
export default DataLine