import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Carrito</Text>
      </View>
      <View style={styles.subHeader}>
        <Text> Aqui van cositas</Text>
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
