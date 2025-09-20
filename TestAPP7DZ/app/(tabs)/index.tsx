import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/banner_mojarras.jpg')}
          style={{ width: '100%', height: '100%' }}
        />
      }>
      <ThemedView style={styles.titleContainer}>

        <ThemedText type="title">Bienvenido a la tiendita xd :D</ThemedText>
      </ThemedView>

      <View>
        <TextInput
          placeholder="Buscar..."
          value={search}
          onChangeText={setSearch}
          style={{ marginBottom: 16, padding: 8, borderWidth: 1, borderColor: '#ccc', borderRadius: 8 }}
        />

      </View>

      <View >
        <Image
          source={require('@/assets/images/mojarra_fit.jpg')}
        />
        <Image
          source={require('@/assets/images/mojarra_frita.jpeg')}
        />
        <Image
          source={require('@/assets/images/mojarra_naranja.jpeg')}
        />
        <Image
          source={require('@/assets/images/mojarra_solla.png')}
        />
      </View>


    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  
});
