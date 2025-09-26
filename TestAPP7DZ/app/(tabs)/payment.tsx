import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Carrito de compras</Text>
        <Text>CP </Text>
      </View>

      <View style={styles.subHeader}>
        <Text>Datos de pago</Text>
      </View>

      <View style={styles.amount}>
        <Text>Monto a pagar</Text>
        <Text>$ 100.00</Text>
        <Text>IVA incluido</Text>
      </View>

      <ScrollView>
        <View style={styles.imageRow}>
          <Image source={require('../../assets/images/visa.png')}
          style={styles.logo}
          resizeMode='contain'
          />
          <Image source={require('../../assets/images/mastercard.png')}
          style={styles.logo}
          resizeMode='contain'
        />
          <Image source={require('../../assets/images/paypal.png')}
          style={styles.logo}
          resizeMode='contain'
        />
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {

  },

  header: {
    backgroundColor : "yellow",
    height : 40,
    justifyContent : "center",
    paddingLeft : 5
  },

  subHeader : {
    backgroundColor : "white",
    height : 35,
    justifyContent : "center",
    paddingLeft : 5
  },

  amount : {
    backgroundColor : "yellow",
    height : 60,
    justifyContent : "center",
    alignItems : "center"
  },

  imageRow : {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },

  logo: {
    width: 60,
    height: 30,
    marginRight: 10
  }
});
