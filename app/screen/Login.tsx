import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Podai</Text>
      <Text style={styles.label}>Usuario</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput style={styles.input} secureTextEntry={true} />
      <View style={styles.button}>
        <Button title="Login" color="#fff" onPress={() => Alert.alert("Alerta", "Has presionado el botón de login")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
      backgroundColor: "#f4f4f4",
      width: "100%",
    },
    innerContainer: {
      width: "100%",
      maxWidth: 400, 
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 40,
      textAlign: "center",
    },
    label: {
      fontSize: 16,
      fontWeight: "600",
      color: "#555",
      alignSelf: "flex-start",
      marginBottom: 8,
    },
    input: {
      width: "100%",
      height: 50,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 20,
      backgroundColor: "#fff",
      fontSize: 16,
      color: "#333",
    },
    button: {
      width: "100%",
      backgroundColor: "#007bff",
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 15,
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
    },
  });
  