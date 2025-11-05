import { React, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import InfoPartit from './components/InfoPartit';
import BarraDeBusqueda from './components/BarraDeBusqueda';
import { Searchbar } from 'react-native-paper';
const App = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEquips, setFilteredEquips] = useState([]);

  const handleOnPress = () => {
    console.log(searchQuery);
  }
  // Pantalla Principal
  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titol}>Llistat de partits:</Text>
      <View>
        <Searchbar
          placeholder="Search"
          onChangeText={(newValue) => setSearchQuery(newValue)}
          value={searchQuery}
          onIconPress={handleOnPress}
        />
      </View>
      <View>
        <InfoPartit local="Barcelona" visitante="Valencia" hora="18:30" estadio="Mestalla" />
        <InfoPartit local="Girona" visitante="Levante" hora="18:30" estadio="Mestalla" />
        <InfoPartit local="Mallorca" visitante="Elche" hora="18:30" estadio="Mestalla" />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    backgroundColor: "#fff",
  },
  titol: {
    margin: 5,
    fontSize: 25,
    fontWeight: "bold",

  }
});
export default App;
