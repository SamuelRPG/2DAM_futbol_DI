// import * as React from 'react';
// import {getFitxaEquip, getObjEquip} from '../utils/funcionsEquips';
// import { StyleSheet, Text, View, Image } from 'react-native';

// const InfoEquips = (props) => {
//     let objetoEquipo = getObjEquip(props.nom);
//     let fitxa = getFitxaEquip(objetoEquipo);

//     return (
//             <View style={styles.contenedorPartidos}>
//                 <Image source={{uri: fitxa.imagenLogo}} style={{width: 100, height: 100}}/>
//                 <Text> {fitxa.nombre} </Text>
//                 <Text> {fitxa.anyFundacion}</Text>
//             </View>
//     );

// }

// const styles = StyleSheet.create({
//   contenedorPartidos: {
//     justifyContent: "center", 
//     alignContent: "center",
//     alignItems: "center",
//     borderColor: "black", 
//     borderWidth: 2,
//     borderRadius: 15, 
//     backgroundColor: "yellow",
//     padding: 25,
//     margin: 20,
//   },
// })

// export default InfoEquips;

import { StyleSheet, Text, View, Image } from 'react-native';
import { getFitxaEquip, getObjEquip } from '../utils/funcionsEquips';

const InfoEquip = (props) => {
    const objetoEquip = getObjEquip(props.nom);
    const fitxa = getFitxaEquip(objetoEquip);

    return (
        <View style={styles.caixa}>
            <Image source={{ uri: fitxa.imatgeEscut }} style={styles.escut} resizeMode="contain" />
            <Text style={styles.textoEquip}>{fitxa.nombre}</Text>
            <Text style={styles.textoAny}>Fundat: {fitxa.AnyFundacio}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    caixa: {
        width: 150,
        backgroundColor: 'yellow',
        padding: 10,
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 13,
        marginHorizontal: 10,
    },
    escut: {
        width: 80,
        height: 80,
        marginBottom: 8,
    },
    textoEquip: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    textoAny: {
        fontSize: 14,
    },
});
export default InfoEquip;