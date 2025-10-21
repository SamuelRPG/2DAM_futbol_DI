import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';

const App = () => {

  //Açò é snecessari, per a gestionar la rotació. 
  //Caldrà afegir-ho en tots els nostres projectes de classe.
  useEffect(() => {
    const unlockScreenOerientation = async () => {
      await ScreenOrientation.unlockAsync()
    }
    unlockScreenOerientation()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={styles.titol}>Llistat de partits:</Text>
      <StatusBar style="auto" />
      <View style={{flex:0.25}}>
        <InfoEquip nom="Valencia C.F." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titol: {
    fontSize: 25,
    fontWeight: "bold",

  }
});
export default App;
