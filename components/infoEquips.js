import * as React from 'react';
import {getFitxaEquip, getObjEquip} from '../utils/funcionsEquips';
import { StyleSheet, Text, View, Image } from 'react-native';

const InfoEquips = (props) => {
    let objetoEquipo = getObjEquip(props.nom);
    let fitxa = getFitxaEquip(objetoEquipo);

    return (
            <View style={styles.contenedorPartidos}>
                <Image source={{uri: fitxa.imagenLogo}} style={{width: 100, height: 100}}/>
                <Text> {fitxa.nombre} </Text>
                <Text> {fitxa.anyFundacion}</Text>
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
    justifyContent: "center", 
    alignContent: "center",
    alignItems: "center",
    borderColor: "black", 
    borderWidth: 2,
    borderRadius: 15, 
    backgroundColor: "yellow",
    padding: 25,
  },
})

export default InfoEquips;