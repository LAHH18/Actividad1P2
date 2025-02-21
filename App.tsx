import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, View } from "react-native";
import Login from "./app/screen/Login"; // Verifica la ruta
import RegistroDHL from './app/screen/RegistroDHL';
import Plantilla from "./app/screen/Plantilla";
import Boton from "./app/Components/Boton";

export default function App() {
  return (
    <View style={styles.container}>
      <Plantilla/>              
      <StatusBar style="auto" />
      <Boton titulo='crack' onPress={()=>Alert.alert('Saludos')}
      variante="peligro"
      //icono
      posicionIcono="izquierda"
      disable={true}/>

      <Boton titulo="Google"onPress={()=>{Alert.alert('Se logueo con Google')}}
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  botonG:{
    backgroundColor: 'blue'
  }
});


