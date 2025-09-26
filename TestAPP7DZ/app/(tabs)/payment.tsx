import React, { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function cardNumberMask(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{4})(?=\d)/g, "$1-")
    .slice(0, 19);
}
function expiryDateMask(value: string) {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(?=\d)/g, "$1/")
    .slice(0, 5);
}
function cvvMask(value: string) {
  return value.replace(/\D/g, "").slice(0, 3);
}

export default function HomeScreen() {
  const [remember, setRemember] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Carrito de compras</Text>
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
      <View style={styles.imageRow}>
        <Image
          source={require("../../assets/images/visa.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/images/mastercard.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/images/paypal.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <ScrollView style={styles.container2}>
        <Text> Número de tarjeta </Text>
        <TextInput
          style={styles.input}
          placeholder="XXXX-XXXX-XXXX-XXXX"
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={(text) => setCardNumber(cardNumberMask(text))}
          maxLength={19}
        />
        <Text> Fecha de expiración </Text>
        <TextInput
          style={styles.input}
          placeholder="MM/AA"
          keyboardType="numeric"
          value={expiryDate}
          onChangeText={(text) => setExpiryDate(expiryDateMask(text))}
          maxLength={5}
        />
        <Text> CVV </Text>
        <TextInput
          style={styles.input}
          placeholder="XXX"
          keyboardType="numeric"
          value={cvv}
          onChangeText={(text) => setCvv(cvvMask(text))}
          maxLength={3}
        />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setRemember(!remember)}
            style={styles.checkbox}
          >
            {remember ? <Text style={styles.checkmark}>✓</Text> : null}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Recordar método de pago</Text>
        </View>

        <Button
          title="Confirmar"
          onPress={() => {
            console.log({ cardNumber, expiryDate, cvv, remember });
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  header: {
    backgroundColor: "#ffe600",
    height: 40,
    justifyContent: "center",
    paddingLeft: 5,
  },
  subHeader: {
    backgroundColor: "white",
    height: 35,
    justifyContent: "center",
    paddingLeft: 5,
  },
  title: {
    fontSize: 24,
  },

  container2: {
    backgroundColor: "white",
  },

  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    backgroundColor: "white",
  },
  checkmark: {
    fontSize: 18,
    color: "blue",
  },
  checkboxLabel: {
    fontSize: 16,
  },
  amount: {
    backgroundColor: "yellow",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  imageRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  logo: {
    width: 60,
    height: 30,
    marginRight: 10,
  },
});
