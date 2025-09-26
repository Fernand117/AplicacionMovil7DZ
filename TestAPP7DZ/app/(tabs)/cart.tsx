import { Button, Image, ImageComponent, ScrollView, StyleSheet, Text, View } from 'react-native';
import { blue, red } from 'react-native-reanimated/lib/typescript/Colors';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Carrito de compras </Text>
        <Text> CP 94466</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}> Articulos en el Carrito de compras</Text>
      </View>

      <ScrollView>

        <View style={{ insetBlock: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, margin: 16 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8}}>
          <Image source={require("../../assets/images/Mojarra.jpg")} style={{ width: 250, height: 200, borderRadius: 8, resizeMode: 'contain'}} />
          <View style={{ backgroundColor: 'white', borderRadius: 8, elevation: 2, marginBottom: 16, padding: 12, flex:1, alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8, textAlign: 'left' }}>Mojarras UTCV</Text>
            <Text> Precio por pieza</Text>
            <Text>200.10</Text>
            <Button title="Agregar al carrito" onPress={() => { /* Lógica para agregar al carrito */ }} />
          </View>
        </View>
      </View>

                
        <View style={{ insetBlock: 16, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, margin: 16 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', gap: 8}}>
          <Image source={require("../../assets/images/Tilapia.png")} style={{ width: 250, height: 200, borderRadius: 8, resizeMode: 'contain' }} />
          <View style={{ backgroundColor: 'white', borderRadius: 8, elevation: 2, marginBottom: 16, padding: 12, flex:1, alignItems: 'flex-end' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8, textAlign: 'left' }}>Tilapia UTCV</Text>
            <Text> Precio por pieza</Text>
            <Text>180.70</Text>
            <Button title="Agregar al carrito" onPress={() => { /* Lógica para agregar al carrito */ }} />
          </View>
        </View>
      </View>

      </ScrollView>
      // footer
      <View style={styles.footer}>
        <View style={styles.footItem}>
          <Text>Producto</Text>
          <Text>$10,000</Text>
        </View>
        <View style={styles.footItem}>
          <Text>Envió</Text>
          <Text>Gratis</Text>
        </View>
        <View style={styles.footItem}>
          <Text style = {styles.totalText}>Total</Text>
          <Text style = {styles.totalText}>$10,000</Text>
        </View>

        <Button
          title="Continuar compra"
          accessibilityLabel="Continuar compra"
        />
      </View>
    </View>
  );



}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
  subTitle: {
    fontSize: 10,
  },
  container: {
    flex : 1
  },
  header: {
    backgroundColor: "#ffe600",
    height: 70,
    paddingLeft: 15,
  },
  subHeader: {
    backgroundColor: "white",
    height: 20,
    alignContent: "center",
    marginBottom: 15,
    paddingLeft: 15,
  },
  footer: {
    minHeight: 100,
    backgroundColor: "white",
    padding: 10,
  },
  footItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content : {
    backgroundColor : "white"
  }
});