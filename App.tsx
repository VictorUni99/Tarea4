import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import PantallaPrincipal from './components/PantallaPrincipal';

const App: React.FC = () => {
  return (
    <ImageBackground
      source={require('./imagenes/fondo.png')} // Ruta de la imagen de fondo
      style={styles.background}
    >
      <View style={styles.container}>
        <PantallaPrincipal />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
