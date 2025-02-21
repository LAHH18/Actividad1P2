import { StyleSheet, View, Text } from 'react-native'
import React from 'react'

const Contenido = () => {
  return (
    <View style={styles.container}>
      <Text>Contenido</Text>
      <Text>Contenido</Text>
      <Text>Contenido</Text>
      <Text>Contenido</Text>
      <Text>Contenido</Text>
      <Text>Contenido</Text>
    </View>
  )
}

export default Contenido

const styles = StyleSheet.create({
    container:{
        height: 100,
    }
})
