import * as React from 'react';
import {getFitxaEquip, getObjEquip} from '../utils/funcionsEquips';
import { StyleSheet, Text, View, Image } from 'react-native';
import InfoEquips from './InfoEquips.js';

const InfoPartit = (props) => {
    let nombre = props.local;
    let nombreVisitante = props.visitante;
    let hora = props.hora;
    let estadio = props.estadio;
    return (
        <View style={styles.container}>
            <View style={styles.contenedorProximosPartidos}>
                <InfoEquips nom={nombre}></InfoEquips>
                <Text>{hora +"\n" + estadio}</Text>
                <InfoEquips nom={nombreVisitante}></InfoEquips>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    margin:5,
    padding: 5,
    backgroundColor: "#fff",
  },
  contenedorProximosPartidos: {
    flexDirection:"row",
    justifyContent: "space-between", 
    alignContent: "center",
    alignItems: "center",
    borderColor: "black", 
    borderWidth: 2,
    borderRadius: 15, 
    backgroundColor: "gray",
  },
  contenedorPartidos: {
    marginTop: 30,
    justifyContent: "center", 
    alignContent: "center",
    padding: 15,
    alignItems: "center",
    borderColor: "black", 
    borderWidth: 2,
    borderRadius: 15, 
    backgroundColor: "yellow",
  },
})

export default InfoPartit;