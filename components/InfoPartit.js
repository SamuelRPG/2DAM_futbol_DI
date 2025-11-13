// import * as React from 'react';
// import { getFitxaEquip, getObjEquip, getEstadio, getCapEstadio } from '../utils/funcionsEquips';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import InfoEquips from './InfoEquips.js';

// const InfoPartit = (props) => {
//   let nombre = props.local;
//   let nombreVisitante = props.visitante;
//   let hora = props.hora;
//   let estadio = props.estadio;
//   let obj = getObjEquip(nombre);
//   let capacidad = getCapEstadio(obj);

//   if (estadio == null) {
//     estadio = getEstadio(obj);
//   }

//   return (
//     <View style={styles.ccontainer}>
//       <View style={styles.contenedorVS}>
//         <View style={{ flexDirection: 'row' }}>
//           <InfoEquips nom={nombre} />
//           <InfoEquips nom={nombreVisitante} />
//         </View>
//         <View style={styles.infoVS}>
//           <Text style={styles.text}>{hora}</Text>
//           <Text style={styles.text}>{estadio + "\n" + capacidad}</Text>
//         </View>
//       </View>
//     </View>
//   );

// }

// const styles = StyleSheet.create({
//   ccontainer: {
//     backgroundColor: 'white',
//     alignItems: 'center',
//     alignContent: 'center',
//     marginTop: 10,
//   },


//   contenedorVS: {
//     justifyContent: "space-evenly",
//     backgroundColor: "red",
//     borderRadius: 10,
//     width: 405,
//     height: 300,
//     borderWidth: 2,
//     alignContent: 'center',
//     alignItems: 'center',
//     padding: 5,
//   },
//   infoVS: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     backgroundColor: "green",
//     justifyContent: 'center',
//     padding: 5,
//     width: 405,
//     alignItems: 'center',
//     alignContent: 'center',


//     text: {
//       fontWeight: 'bold',
//       fontSize: 20,
//     }

//   },
//   // contenedorPartidos: {
//   //   marginTop: 30,
//   //   justifyContent: "center", 
//   //   alignContent: "center",
//   //   padding: 15,
//   //   alignItems: "center",
//   //   borderColor: "black", 
//   //   borderWidth: 2,
//   //   borderRadius: 15, 
//   //   backgroundColor: "yellow",
//   // },
// })

// export default InfoPartit;


import { React, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InfoEquip from './InfoEquips.js';
import { getFitxaEquip, getObjEquip } from '../utils/funcionsEquips';


const InfoPartit = (props) => {
    let local = props.local;
    let visitante = props.visitante;
    let hora = props.hora;
    let estadio = null;
    let capacitat = null;
    let arbitre = props.arbitre;
    let objetoEquip = getObjEquip(props.local);
    let fitxa = getFitxaEquip(objetoEquip);


    if (props.estadio === "") {
        estadio = fitxa.estadi;
        if(props.capacitat !== ""){
            capacitat = props.capacitat;
        }else{
            capacitat = objetoEquip.intStadiumCapacity;
        }
    } else {
        estadio = props.estadio
        
        if(props.capacitat !== ""){
            capacitat = props.capacitat;
        }else{
            capacitat = "Sense Dades"
        }
    }

     return (
        <View style={styles.caixaGrisInfo}>
            <View style={styles.infoEquips}>
                <InfoEquip nom={local}     />
                <InfoEquip nom={visitante} />
            </View>
            <View style={styles.horaEstadi}>
                <Text style={styles.horaP}>{hora} / {estadio}</Text>
                <Text style={styles.textInfo}>{capacitat} / {arbitre}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    caixaGrisInfo: {
        flex: 2,
        padding: 10,
        backgroundColor: "#999999",
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 13,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: '3%',
    },
    infoEquips: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',           
    },
    horaEstadi: {
        width: '100%',
        height: '25%',
        marginTop: '5%',
        marginBottom: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFDB3',
        borderWidth: 2,
        borderRadius: 10
    },
    horaP: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    estadiP:{
        
    },
    capacitatP:{

    },
    arbitreP:{

    }
});

export default InfoPartit;
