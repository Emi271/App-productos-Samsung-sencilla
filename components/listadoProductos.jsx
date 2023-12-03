import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'

const ListadoProductos = (
    {
        productsData,
        agregarProductoAction
    }
) => {
  return (
    <View style={styles.listadoProductosContainer}>
    {productsData.map(product =>
      (
      <View style={styles.Producto} key={product.id}>  
      <Text style={styles.ProductoTexto}>{product.nombre}</Text>
      <Text style={styles.ProductoTexto}>{product.precio}</Text>
      <View style={styles.ProductoBotonContainer}>
       <Button onPress={() => agregarProductoAction(product)}  title='Agregar ⭐'/>
       </View>
      </View>
    ))}
  </View>
  )
}

export default ListadoProductos

const styles = StyleSheet.create({
listadoProductosContainer: {
    flex: 1,
    backgroundColor: '#d3ccff',
    alignItems: 'baseline',
    justifyContent: 'start',
    top: 50,
    width: 370,
    padding: 10,
    margin: 0,
    borderRadius: 20, 
} ,
Producto: {
  flexDirection: 'row',
  backgroundColor: '#f5daff',
  borderRadius: 10,
  margin: 10,
  alignItems: 'center',
  width: 340
} ,
ProductoBotonContainer: {
  flex: 3,
padding: 5,
}
})