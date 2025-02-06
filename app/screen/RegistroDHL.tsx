import React from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Image,Alert } from 'react-native';

const RegistroDHL = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.backArrow}>←</Text>
                <Text style={styles.title}>Registrarse</Text>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.circleActive}>
                    <Text style={styles.progressText}>1</Text>
                </View>
                <View style={styles.progressLine} />
                <View style={styles.circleInactive} />
            </View>

            {/* Formulario */}
            <View style={styles.formContainer}>
                <TextInput placeholder="Nombre" placeholderTextColor="#fff" style={styles.input} />
                <TextInput placeholder="Apellido" placeholderTextColor="#fff" style={styles.input} />

                {/* Teléfono */}
                <View style={styles.phoneContainer}>
                    <View style={styles.countryCode}>
                        <Image source={{ uri: 'https://flagcdn.com/w40/mx.png' }} style={styles.flag} />
                        <Text style={styles.countryText}>+52</Text>
                    </View>
                    <TextInput placeholder="Número de teléfono celular" placeholderTextColor="#fff" style={[styles.input, { flex: 1 }]} />
                </View>

                <TextInput placeholder="Dirección de correo electrónico" placeholderTextColor="#fff" style={styles.input} />
                
                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>

                        {/* Botón Siguiente */}
            <View style={styles.botonSiguiente}>
                <Button title="SIGUIENTE" color="#000" onPress={() => Alert.alert("Alerta", "Has presionado el botón de Registrarse")} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    header: {
        backgroundColor: '#FFD000',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    backArrow: {
        fontSize: 24,
        color: 'black',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        color: 'black',
    },
    progressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
    },
    circleActive: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
    },
    progressText: {
        color: 'white',
        fontWeight: 'bold',
    },
    progressLine: {
        width: 50,
        height: 2,
        backgroundColor: '#999',
    },
    circleInactive: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#222',
    },
    formContainer: {
        padding: 20,
    },
    input: {
        backgroundColor: '#222',
        color: '#fff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#666',
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    countryCode: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#222',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#666',
    },
    flag: {
        width: 24,
        height: 16,
        marginRight: 5,
    },
    countryText: {
        color: 'white',
        fontSize: 16,
    },
    botonSiguiente: {
        backgroundColor: '#FFD000',
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 250,
        marginHorizontal: 20, 
    },
    
});

export default RegistroDHL;
