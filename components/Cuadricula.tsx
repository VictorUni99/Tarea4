import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Carta from './Carta';

interface CuadriculaProps {
  cartas: { imagen: any; estado: 'oculta' | 'revelada' | 'encontrada' }[];
  voltearCarta: (index: number) => void;
}

const Cuadricula: React.FC<CuadriculaProps> = ({ cartas, voltearCarta }) => {
  console.log("Cartas en la cuadrícula:", cartas);
  return (
    <View style={styles.container}>
      {cartas.map((carta, index) => (
        <Carta
          key={index}
          imagen={carta.imagen}
          estado={carta.estado}
          onPress={() => {
            console.log("Carta presionada:", index);
            voltearCarta(index);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center', 
  },
});

export default Cuadricula;
