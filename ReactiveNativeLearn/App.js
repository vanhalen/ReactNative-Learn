import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Calculadora Simples Nacional</Text>
        <Text style={styles.logo}>
          Calculei <Text style={styles.slogan}>a melhor forma de calcular sua rentabilidade</Text>
        </Text>
    </View>
  );
}
