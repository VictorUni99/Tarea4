import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface EncabezadoProps {
  movimientos: number;
  puntuacion: number;
}

const Encabezado: React.FC<EncabezadoProps> = ({ movimientos, puntuacion }) => {
  return (
    <View style={styles.container}>
      <Text>Movimientos: {movimientos}</Text>
      <Text>Puntuación: {puntuacion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#eee',
  },
});

export default Encabezado;
