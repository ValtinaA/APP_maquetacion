import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bloque1}>
        <Text style={styles.texto}>A</Text>
      </View>
      <View style={styles.bloque2}>
        <Text style={styles.texto}>B</Text>
      </View>
      <View style={styles.bloque3}>
        <View style={styles.Subbloque1}>
          <Text style={styles.texto}>C</Text>
        </View>
        <View style={styles.Subbloque2}>
          <Text style={styles.texto}>D</Text>
        </View>
        <View style={styles.Subbloque3}>
          <Text style={styles.texto}>E</Text>
        </View>
      </View>
      <View style={styles.bloque4}>
        <Text style={styles.texto}>F</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  bloque1: {
    width: '100%',
    height: 100,
    backgroundColor: '#D3D3D3',
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bloque2: {
    width: '100%',
    height: 300,
    backgroundColor: '#ADD8E6',
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bloque3: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  Subbloque1: {
    width: 100,
    height: 100,
    backgroundColor: 'violet',
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Subbloque2: {
    width: 100,
    height: 100,
    backgroundColor: 'violet',
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Subbloque3: {
    width: 100,
    height: 100,
    backgroundColor: 'violet',
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bloque4: {
    width: '100%',
    height: 300,
    backgroundColor: '#FFD700',
    marginBottom: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24, // Tamaño de texto más grande
    fontWeight: 'bold', // Texto en negrita
  },
});
