import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Boton from '../Components/Boton'

const Calculadora = () => {

    //Estados de la app
    const [V1,setV1]=useState<string>('');
    const [V2,setV2]=useState<string>('');
    const [Res,setRes]=useState<number|null>(0);

    //Logica del componente calculadora
    const Suma=()=>{
        const val1=parseFloat(V1);
        const val2=parseFloat(V2);
        const resultado=val1+val2;
        setRes(resultado);
    }

    const Resta=()=>{
        const val1=parseFloat(V1);
        const val2=parseFloat(V2);
        setRes(val1-val2);
    }

    const Multiplicacion=()=>{
        const val1=parseFloat(V1);
        const val2=parseFloat(V2);
        setRes(val1*val2);
    }

    const Division=()=>{
        const val1=parseFloat(V1);
        const val2=parseFloat(V2);
        setRes(val1/val2);
    }

    //enderizando nuestro componente
  return (
    <View style={styles.container}>
      <Header titulo="Calculadora Basica" nombre='Luis Angel Hdez Hdez'
      imagen={require("../../assetes/ActivityIndicatorBase.png")} />
      <View>
        {/* Aqui va la calculadora */}
        <Text>Valor 1</Text>
        <TextInput placeholder='Valor 1'
        onChangeText={setV1}/>
        <Text>Valor 2</Text>
        <TextInput placeholder='Valor 2'
        onChangeText={(val)=>setV2(val)}/>
        <View>
            <Boton titulo='+' onPress={()=>{Suma()}}/>
            <Boton titulo='-' onPress={()=>{Resta()}}/>
            <Boton titulo='*' onPress={()=>{Multiplicacion()}}/>
            <Boton titulo='/' onPress={()=>{Division()}}/>
        </View>
        <Text>El resultado de la operacion es: {Res}</Text>
        <Text>Valor1 : {V1} y valor2: {V2}</Text>
        <Footer fecha='14/02/2025' grupo='B'/>
      </View>
    </View>
  )
}

export default Calculadora

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }
})