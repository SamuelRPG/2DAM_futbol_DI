import * as React from 'react';
import {getFitxaEquip, getObjEquip} from '../utils/funcionsEquips';
import { StyleSheet, Text, View, Image } from 'react-native';

const InfoEquips = (props) => {
    let objetoEquipo = getObjEquip(props.nom);
    let fitxa = getFitxaEquip(objetoEquipo);

    return (
        <View style={styles.container}>
            <View style={styles.contenedorPartidos}>
                <Image source={{uri: fitxa.imagenLogo}} style={{width: 100, height: 100}}/>
                <Text> {fitxa.nombre} </Text>
                <Text> {fitxa.anyFundacion}</Text>
            </View>
            <View style={styles.contenedorPartidos}>

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

export default InfoEquips;