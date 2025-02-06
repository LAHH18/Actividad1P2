import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Login from "./app/screen/Login"; // Verifica la ruta
import RegistroDHL from './app/screen/RegistroDHL';

export default function App() {
  return (
    <View style={styles.container}>
      <RegistroDHL />
      <StatusBar style="auto" />
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
});
