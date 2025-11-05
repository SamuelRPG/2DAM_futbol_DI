import * as React from 'react';
import { getFitxaEquip, getObjEquip, getCapEstadio } from '../utils/funcionsEquips';
import { StyleSheet, Text, View, Image } from 'react-native';
import InfoEquips from './InfoEquips.js';

const InfoPartit = (props) => {
  let nombre = props.local;
  let nombreVisitante = props.visitante;
  let hora = props.hora;
  let estadio = props.estadio;
  let obj = getObjEquip(nombre);
  let capacidad = getCapEstadio(obj);
  return (
    <View style={styles.ccontainer}>
      <View style={styles.contenedorVS}>
        <View style={{ flexDirection: 'row' }}>
          <InfoEquips nom={nombre} />
          <InfoEquips nom={nombreVisitante} />
        </View>
        <View style={styles.infoVS}>
          <Text style={styles.text}>{hora + "\n" + estadio}</Text>
          <Text style={styles.text}>{capacidad}</Text>
        </View>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  ccontainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 10,
  },


  contenedorVS: {
    justifyContent: "space-evenly",
    backgroundColor: "red",
    borderRadius: 10,
    width: 405,
    height: 300,
    borderWidth: 2,
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  infoVS: {
    fontWeight: 'bold',
      fontSize: 20,
    backgroundColor: "green",
    justifyContent: 'center',
    padding: 5,
    width: 405,
    alignItems: 'center',
    alignContent: 'center',


    text: {
      fontWeight: 'bold',
      fontSize: 20,
    }

  },
  // contenedorPartidos: {
  //   marginTop: 30,
  //   justifyContent: "center", 
  //   alignContent: "center",
  //   padding: 15,
  //   alignItems: "center",
  //   borderColor: "black", 
  //   borderWidth: 2,
  //   borderRadius: 15, 
  //   backgroundColor: "yellow",
  // },
})

export default InfoPartit;
