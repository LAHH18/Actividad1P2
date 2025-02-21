import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';

const CalculadoraPropinas = () => {
    const [monto, setMonto] = useState<string>('');
    const [propina, setPropina] = useState<number | null>(null);
    const [total, setTotal] = useState<number | null>(null);
    const [porcentajePersonalizado, setPorcentajePersonalizado] = useState<string>('');
    const [historial, setHistorial] = useState<{ id: string; monto: number; propina: number; total: number }[]>([]);

    const calcularPropina = (porcentaje: number) => {
        const montoNum = parseFloat(monto);
        if (isNaN(montoNum)) return;

        const propinaCalculada = montoNum * (porcentaje / 100);
        const totalCalculado = montoNum + propinaCalculada;

        setPropina(propinaCalculada);
        setTotal(totalCalculado);

        const nuevoHistorial = {
            id: Date.now().toString(),
            monto: montoNum,
            propina: propinaCalculada,
            total: totalCalculado,
        };
        setHistorial([nuevoHistorial, ...historial]);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.mainContainer}>
                <Text style={styles.title}> Calculadora de Propinas</Text>
                <Text style={styles.autor}> Luis Angel Hernandez Hernandez 5B 20230028</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Ingresa el monto"
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    value={monto}
                    onChangeText={setMonto}
                />

                <Text style={styles.subtitle}>Selecciona un porcentaje:</Text>
                <View style={styles.buttonContainer}>
                    {[10, 15, 20].map((percent) => (
                        <TouchableOpacity
                            key={percent}
                            style={styles.button}
                            onPress={() => calcularPropina(percent)}
                        >
                            <Text style={styles.buttonText}>{percent}%</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.customTipContainer}>
                    <TextInput
                        style={styles.customTipInput}
                        placeholder="Ingresa otro porcentaje"
                        placeholderTextColor="#999"
                        keyboardType="numeric"
                        value={porcentajePersonalizado}
                        onChangeText={setPorcentajePersonalizado}
                    />
                    <TouchableOpacity
                        style={styles.customTipButton}
                        onPress={() => calcularPropina(parseFloat(porcentajePersonalizado))}
                    >
                        <Text style={styles.customTipButtonText}>Calcular</Text>
                    </TouchableOpacity>
                </View>

                {propina !== null && total !== null && (
                    <View style={styles.resultContainer}>
                        <Text style={styles.resultText}> Propina: ${propina.toFixed(2)}</Text>
                        <Text style={styles.resultText}> Total: ${total.toFixed(2)}</Text>
                    </View>
                )}

                <Text style={styles.historialTitle}> Historial</Text>
                <FlatList
                    data={historial}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.historialItem}>
                            <Text style={styles.historialText}>
                                ${item.monto} + ${item.propina.toFixed(2)} = ${item.total.toFixed(2)}
                            </Text>
                        </View>
                    )}
                    scrollEnabled={false}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: '#f0f4f8',
    },
    mainContainer: {
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 25,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#2c3e50',
    },
    autor:{
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 15
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 15,
        color: '#34495e',
        fontWeight: '600',
    },
    input: {
        width: '100%',
        height: 55,
        borderWidth: 2,
        borderColor: '#3498db',
        borderRadius: 15,
        paddingHorizontal: 20,
        fontSize: 18,
        marginBottom: 25,
        backgroundColor: '#fff',
        color: '#2c3e50',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    button: {
        backgroundColor: '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 15,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    customTipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    customTipInput: {
        flex: 1,
        height: 55,
        borderWidth: 2,
        borderColor: '#3498db',
        borderRadius: 15,
        paddingHorizontal: 20,
        fontSize: 18,
        backgroundColor: '#fff',
        color: '#2c3e50',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    customTipButton: {
        backgroundColor: '#2ecc71',
        paddingHorizontal: 25,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    customTipButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    resultContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
        marginBottom: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2c3e50',
        textAlign: 'center',
        marginVertical: 5,
    },
    historialTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#2c3e50',
        textAlign: 'center',
    },
    historialItem: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    historialText: {
        fontSize: 16,
        color: '#34495e',
        fontWeight: '500',
    },
});

export default CalculadoraPropinas;