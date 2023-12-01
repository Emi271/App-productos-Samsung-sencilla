import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { useState } from 'react';
import mostrarProductosAgregados from './components/mostrarProductosAgregados';
import listadoProductos from './components/listadoProductos';

export default function App() {
const [productosAgregados, setProductosAgregados] = useState('')
const products = [
  {
    id: '1', 
    nombre: 'Samsung Galaxy S23 256GB',
    precio: 'U$D 600'
  } ,
  {
    id: '2',
    nombre: 'Samsung Galaxy S23+ 512GB',
    precio: 'U$D 700'
  }
]

const listadoProductos = () => {
return (
 <>
 </>
)}

const agregarProducto = (product) => {
  setProductosAgregados([...productosAgregados, product])}

const eliminarProducto = (item) => {
  setProductosAgregados(productosAgregados.filter((product) =>product.id !== item.id))}

const mostrarProductosAgregados = ({item}) =>(
<>

</>
)

  return (
    <>
    <View style={styles.container}>
    <StatusBar style="auto" />
<listadoProductos

/>
<mostrarProductosAgregados

/>
</View>
</>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    flex: 2,
    color: '#ff1cd6',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 29,
    padding: 30

  },

});
