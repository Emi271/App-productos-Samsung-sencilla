import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const MostrarProductosAgregados = (
    {
      mostrarProductos,
      eliminarProductoAction
    }
) => {
  return (
    <View style={styles.ProductosAgregadosContainer}>
      {mostrarProductos.map((item) => (
        <View key={item.id} style={styles.ProductoAgregadoContainer}>
          <Text>{item.nombre}</Text>
          <View style={styles.ProductoAgregadoBoton}>
          <Button
            title="X"
            onPress={() => eliminarProductoAction(item)}
          /></View>
        </View>
      ))}
    </View>
  )};

export default MostrarProductosAgregados

const styles = StyleSheet.create({
    ProductosAgregadosContainer: {
        backgroundColor: '#fffff0',
        flex: 1,
        width: 370,
        alignItems: 'baseline',
        justifyContent: 'flex-start',
        top: 40,
        borderRadius: 20} ,

    ProductoAgregadoContainer:{
      flexDirection: 'row',
      backgroundColor: '#f5daff',
      borderRadius: 10,
      margin: 10,
      alignItems: 'center',
      width: 340
    }, 
    ProductoAgregadoBoton: {
      flex: 3,
      padding: 5
    }
})