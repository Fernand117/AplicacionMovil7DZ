import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Confirmación de pedido</Text>
      </View>
      <View style={styles.subHeader}>
        <Text> Método de pago</Text>

      </View>

      <ScrollView>
// aqui va todo xd
<Text> idk </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {

  },
  header: {
    backgroundColor : "blue",
    height : 100,
  },
  subHeader : {
    backgroundColor : "white",
    height : 40
  },
  
});
