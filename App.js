// import { React, useEffect, useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ScrollView} from 'react-native';
// import InfoPartit from './components/InfoPartit';
// import BarraDeBusqueda from './components/BarraDeBusqueda';
// import { Searchbar } from 'react-native-paper';
// const App = () => {

//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredEquips, setFilteredEquips] = useState([]);
//   const listaPartidos = [
//     {
//       local:"Barcelona", visitante:"Valencia", hora:"18:30", estadio:"Mestalla"
//     }, 
//     {
//        local:"Girona", visitante:"Levante", hora:"18:30"
//     }, 
//     {
//         local: "Mallorca", visitante:"Elche", hora:"18:30"
//     },
//   ]

//   const handleOnPress = () => {
//     console.log(searchQuery);
//   }
//   // Pantalla Principal
//   return (
//     <ScrollView>
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <Text style={styles.titol}>Llistat de partits:</Text>
//       <View>
//         <Searchbar
//           placeholder="Search"
//           onChangeText={(newValue) => setSearchQuery(newValue)}
//           value={searchQuery}
//           onIconPress={handleOnPress}
//         />
//       </View>
//       <View>
//         {listaPartidos.map((elem, i) => {
//           return (
//           <View key={i.toString()}>
//             <InfoPartit local={elem.local} visitante={elem.visitante} hora={elem.hora} estadio={elem.estadio}/>
//           </View>
//           );
//         })}
//       </View>
//     </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     margin: 5,
//     padding: 5,
//     backgroundColor: "#fff",
//   },
//   titol: {
//     margin: 5,
//     fontSize: 25,
//     fontWeight: "bold",

//   }
// });
// export default App;

import { useState } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import InfoPartit from './components/InfoPartit';
import { Searchbar } from 'react-native-paper';


const App = () => {
  const [text, setText] = useState('');

  // define a search handler and pass it to the Searchbar so it's not undefined
  const handleSearch = () => {
    console.log('Search:', text);
    // perform filtering or other actions here
  };

  const llistaPartits = [
    {
      local: "Barcelona",
      visitante: "Elche",
      hora: "21:30",
      estadio: "Mont LLuis",
      capacitat: "53.123",
      arbitre: "Jorge Sevilla"
    },
    {
      local: "Valencia",
      visitante: "Levante",
      hora: "18:30",
      estadio: "",
      capacitat: "",
      arbitre: "Francisco Segura"
    },
    {
      local: "Girona",
      visitante: "Villarreal",
      hora: "14:30",
      estadio: "",
      capacitat: "",
      arbitre: "Carlos Teran"
    },
  ];

  const partitsBuscats = llistaPartits.filter((elem) => {
    const busqueda = text.toLowerCase();
    return (
      elem.local.toLowerCase().includes(busqueda) || elem.visitante.toLowerCase().includes(busqueda)
    )
  })
  return (

    <View style={styles.container}>
      <Searchbar
        style={{ backgroundColor: "#3cff00ff" }}
        placeholder='Busca equipos'
        value={text}
        onChangeText={setText}
      />
      <ScrollView>
        {
          partitsBuscats.length === 0 ?
            <View>
              <Text> No se han encontrado partidos con el termino de busuqeda <Text style={{color:"blue"}}> {text}</Text></Text>
              <Image style={styles.image} source={require('./assets/robot.jpg')} />
            </View>
              :
            
              partitsBuscats.map((elem, i) => {
                return (
                  <View key={i.toString()}>
                    <InfoPartit local={elem.local} visitante={elem.visitante} hora={elem.hora}
                      estadio={elem.estadio} capacitat={elem.capacitat} arbitre={elem.arbitre} />
                  </View>
                )
              })
            
        }

      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '6%',
    backgroundColor: "#fff",
  },
  image: {
    width: 300,  // Puedes ajustar el tamaño de la imagen
    height: 500, // Ajusta también la altura si lo deseas
    marginTop: 20,
  }
});
export default App;
