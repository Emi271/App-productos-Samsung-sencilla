import { StyleSheet, Text, View} from 'react-native'
import React from 'react'

const listadoProductos = (
    {
        
    }
) => {
  return (
    <View style={styles.listadoProductosContainer}>
    {products.map(product => (
      <View key={product.id}>  
      <Text>{product.nombre}</Text>
      <Text>{product.precio}</Text>
      <Button onPress={() => agregarProducto}>Marcar como favorito</Button>
      </View>
    ))}
  </View>
  )
}

export default listadoProductos

const styles = StyleSheet.create({
listadoProductosContainer: {
    flex: 3,

}
})