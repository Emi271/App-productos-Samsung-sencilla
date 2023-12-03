import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView} from 'react-native';
import { useState } from 'react';
import ListadoProductos from './components/ListadoProductos';
import MostrarProductosAgregados from './components/MostrarProductosAgregados';

export default function App() {
const [productosAgregados, setProductosAgregados] = useState([])
const products = [
  {
    id: '1', 
    nombre: 'Samsung Galaxy S23 256GB',
    precio: ' U$D 600'
  } ,
  {
    id: '2',
    nombre: 'Samsung Galaxy S23+ 512GB',
    precio: ' U$D 700'
  },
  {
    id: '3', 
    nombre: 'Samsung Galaxy A04s 128GB',
    precio: ' U$D 120'
  } ,
  {
    id: '4',
    nombre: 'Samsung Galaxy M23 5G 128',
    precio: ' U$D 870'
  },
  {
    id: '5', 
    nombre: 'Samsung Galaxy A04e 32GB',
    precio: ' U$D 70'
  } ,
  {
    id: '6',
    nombre: 'Samsung Galaxy A34 128GB',
    precio: ' U$D 270'
  },
]

const agregarProducto = (product) => {
  setProductosAgregados([...productosAgregados, product])}

const eliminarProducto = (item) => {
  setProductosAgregados(productosAgregados.filter((product) => product !== item))}


  return (
    <>
    <View style={styles.container}>
    <StatusBar style="auto" />
<ListadoProductos
productsData={products}
agregarProductoAction={agregarProducto}/>
<MostrarProductosAgregados
mostrarProductos={productosAgregados}
eliminarProductoAction={eliminarProducto}/>
</View>
</>
  )}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  backgroundColor: '#eaf3ff',
paddingBottom: 20},
  scrollView: {
    marginHorizontal: 20,
  },});
