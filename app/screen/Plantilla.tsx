import { StyleSheet, Text, View } from "react-native";
import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Contenido from "../Components/Contenido";

const Plantilla = () => {
    return(
        <View>
            <Text>Plantilla</Text>
            <Header titulo="Calculadora" nombre="L.A" imagen="../../assets/avatar.png"/>
            <Contenido/>
            <Footer fecha="07/02/2025" grupo="5B"/>
        </View>
    )
}


export default Plantilla

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
})



