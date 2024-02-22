import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, ImageSourcePropType, Text, Alert, Image } from 'react-native';
import Cuadricula from './Cuadricula';

// Importa las imágenes necesarias
const imagenes: ImageSourcePropType[] = [
  require('../imagenes/imagen1.png'),
  require('../imagenes/imagen2.png'),
  require('../imagenes/imagen3.png'),
  require('../imagenes/imagen4.png'),
  require('../imagenes/imagen5.png'),
  require('../imagenes/imagen6.png'),
];

const PantallaPrincipal: React.FC = () => {
  const [cartas, setCartas] = useState<Array<{ imagen: ImageSourcePropType; estado: 'oculta' | 'revelada' | 'encontrada' }>>(
    Array(12)
      .fill(null)
      .map((_, i) => ({
        imagen: require('../imagenes/incognito.png'), 
        estado: 'oculta', 
      }))
  );
  const [cartasSeleccionadas, setCartasSeleccionadas] = useState<number[]>([]);
  const [intentos, setIntentos] = useState<number>(0);
  const [paresCompletados, setParesCompletados] = useState<number>(0);

  console.log("Estado actual de las cartas:", cartas);

  const voltearCarta = (index: number) => {
    const nuevasCartas = [...cartas];
    nuevasCartas[index].estado = 'revelada'; 
    nuevasCartas[index].imagen = imagenes[index % 6]; 

    setCartas(nuevasCartas);
    setCartasSeleccionadas([...cartasSeleccionadas, index]);

    if (cartasSeleccionadas.length === 1) {
      setIntentos(intentos + 1);
      const primeraCartaIndex = cartasSeleccionadas[0];
      const segundaCartaIndex = index;

      if (cartas[primeraCartaIndex].imagen === cartas[segundaCartaIndex].imagen) {
        setTimeout(() => {
          setParesCompletados(paresCompletados + 1);
        }, 1000);
      } else {
        setTimeout(() => {
          nuevasCartas[primeraCartaIndex].estado = 'oculta'; 
          nuevasCartas[segundaCartaIndex].estado = 'oculta';
          setCartas(nuevasCartas);
        }, 1000);
      }
      setCartasSeleccionadas([]);
    }
  };

  useEffect(() => {
    if (paresCompletados === 6) {
      Alert.alert('¡Felicidades!', `Has completado el juego en ${intentos} intentos`);
    }
  }, [paresCompletados]);

  const reiniciarJuego = () => {
    const nuevasCartas = cartas.map((carta) => ({
      ...carta,
      estado: 'oculta' as 'oculta', 
      imagen: require('../imagenes/incognito.png'), 
    }));
    setCartas(nuevasCartas);
    setCartasSeleccionadas([]);
    setIntentos(0);
    setParesCompletados(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Bienvenido al Juego Invisible</Text>
      <Text style={styles.texto}>Debes presionar los 12 cuadros invisibles hasta encontrar todos los pares</Text>
      <Image
        source={require('../imagenes/incognito.png')}
        style={styles.imagen}
      />
      <View style={styles.cuadriculaContainer}>
        <Cuadricula cartas={cartas} voltearCarta={voltearCarta} />
      </View>
      <Button title="Reiniciar Juego" onPress={reiniciarJuego} color="green" />
              <Text>Intentos: {intentos}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    textAlign: 'center',
    marginBottom: 10,
  },
  imagen: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  cuadriculaContainer: {
    backgroundColor: 'black', 
    padding: 10,
    borderRadius: 10, 
  },
  boton: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default PantallaPrincipal;