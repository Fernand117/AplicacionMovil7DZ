import { Image } from 'expo-image';
import { StyleSheet, TextInput, View, Text } from 'react-native';
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

      <ThemedView style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 16 }}>
        <ThemedText type="title" style={{flex: 1}}>¡Busca tu mojarra ideal!</ThemedText>
        <View style={{ alignItems: 'center', gap: 4 }}>
          <Image
            source={require('@/assets/images/carrito_mojarra.jpg')}
            style={{ width: 64, height: 64, borderRadius: 8 }}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#b78c00ff' }}>
            Carrito
          </Text>
        </View>
      </ThemedView>

      <View>
        <TextInput
          placeholder="Buscar..."
          value={search}
          onChangeText={setSearch}
          style={{ marginTop: 16, marginBottom: 16, padding: 8, borderWidth: 1, backgroundColor: '#fff', borderColor: '#ccc', borderRadius: 8 }}
        />
      </View>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 32, justifyContent: 'center' }}>
        <View style={{ alignItems: 'center' }}>
          <Image
        source={require('@/assets/images/mojarra_fit.jpg')}
        style={{ width: 256, height: 256, borderRadius: 8 }}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8, color: '#b78c00ff' }}>
        $120.00
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
        source={require('@/assets/images/mojarra_frita.jpeg')}
        style={{ width: 256, height: 256, borderRadius: 8 }}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8, color: '#b78c00ff' }}>
        $150.00
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
        source={require('@/assets/images/mojarra_naranja.jpeg')}
        style={{ width: 256, height: 256, borderRadius: 8 }}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8, color: '#b78c00ff' }}>
        $135.00
          </Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
        source={require('@/assets/images/mojarra_solla.png')}
        style={{ width: 256, height: 256, borderRadius: 8 }}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8, color: '#b78c00ff' }}>
        $140.00
          </Text>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

});
