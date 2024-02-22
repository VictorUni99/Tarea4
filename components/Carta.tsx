import React, { useRef, useEffect } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';

interface CartaProps {
  imagen: any;
  estado: 'oculta' | 'revelada' | 'encontrada';
  onPress: () => void;
}

const Carta: React.FC<CartaProps> = ({ imagen, estado, onPress }) => {
  const animacion = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (estado === 'revelada') {
      Animated.timing(animacion, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(animacion, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [estado]);

  const interpolacion = animacion.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '0deg'],
  });

  const animacionEstilo = {
    transform: [{ rotateY: interpolacion }],
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.carta]}>
        <Animated.View style={[styles.cara, animacionEstilo]}>
          {(estado === 'revelada' || estado === 'encontrada') && imagen && <Image source={imagen} style={styles.imagen} />}
          {estado === 'oculta' && <Image source={require('../imagenes/incognito.png')} style={styles.imagen} />}
        </Animated.View>
        <Animated.View style={[styles.cara, styles.caraTrasera, animacionEstilo]}>
          {estado === 'oculta' && <Image source={require('../imagenes/incognito.png')} style={styles.imagen} />}
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  carta: {
    width: 80,
    height: 120,
    margin: 5,
  },
  cara: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  caraTrasera: {},
  imagen: {
    width: 60,
    height: 90,
    resizeMode: 'contain',
  },
});

export default Carta;
