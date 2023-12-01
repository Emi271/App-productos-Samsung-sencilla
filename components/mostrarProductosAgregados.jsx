import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const mostrarProductosAgregados = (
    {
        
    }
) => {
  return (
    <View style={styles.ProductosAgregadosContainer}>
    <Text style={styles.ProductosAgregadosText}>{item.nombre}</Text>
    <Button style={styles.botonEliminar} title='X' onPress={() => eliminarProducto(item)}
    />
  </View>
  )
}

export default mostrarProductosAgregados

const styles = StyleSheet.create({
    ProductosAgregadosContainer: {
        backgroundColor: 'c4b2ff'
    }
})