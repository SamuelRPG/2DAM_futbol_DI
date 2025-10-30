import {React, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InfoEquips from './components/InfoEquips';
const App = () => {


  
// Pantalla Principal
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.titol}>Llistat de partits:</Text>
      <View style={{flex:0.25}}>
        <InfoEquips nom="Levante"/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:5,
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
