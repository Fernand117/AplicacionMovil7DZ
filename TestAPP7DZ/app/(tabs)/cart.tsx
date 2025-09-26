import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Carrito de compras </Text>
        <Text> CP 94466</Text>
      </View>
      <View style={styles.subHeader}>
        <Text>Todos los productos</Text>
      </View>
      <ScrollView style = {styles.content}>
        <Text> idk </Text>
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
    position: "sticky",
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
