import React, { useState } from 'react';
import { Button } from 'react-native';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
} from 'react-native';

const Perfil_Victor = ({ navigation })  => {
  const [comentario, setComentario] = useState('');
  const handleGoBack = () => {
    navigation.navigate('Hogar');
  };
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.svContenedor}
        contentInsetAdjustmentBehavior="automatic">
        <Image
          style={styles.fotoperfil}
          source={require('../imagenes/javifoto.jpg')}
        />
         <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Nombre:</Text>
          <Text style={styles.nacimientoyfecha}>Javier Maradiaga </Text>
        </View>
        <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Lugar de Nacimiento:</Text>
          <Text style={styles.nacimientoyfecha}>Tegucigalpa, Honduras</Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Fecha de Nacimiento:</Text>
          <Text style={styles.nacimientoyfecha}>06 de Julio del 1967</Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Pasatiempos:</Text>
          <Text style={styles.titulo}> En sus tiempos libre pasa haciendo remodelaciones en la casa
          </Text>
        </View>

        <View style={styles.seccion}>
          <Text style={styles.seccionHeader}>Titulo:</Text>
          <Text style={styles.titulo}> Ingeniero Electrico
          </Text>
        </View>
      </ScrollView>

      <View style={styles.regreso}>
        <Button title="Regresar al hogar" onPress={handleGoBack} />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  encabezado: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#53848b',
    
  },
  svContenedor: {
    alignItems: 'center',
  },
  fotoperfil: {
    width: 150,
    height: 200,
  },
  seccion: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%', 
    marginBottom: 10,
    },
  seccionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30, 
    color: '#003c72',

  },
 
  regreso: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 5,
    padding: 8,
    margin: 10,
    width: '80%',
    marginLeft: 40, 
    marginRight: 40,
  },
  nacimientoyfecha: {
    fontSize: 18,
    flexWrap: 'wrap',
    alignItems: 'center',
    textAlign: 'center', 
    marginTop: -20, 
    color: '#7f7690',

  },
  titulo: {
    fontSize: 18,
    flexDirection: 'column',
    textAlign: 'center', 
    marginTop: -30,
    marginLeft: 18, 
    marginRight: 18, 
    color: '#7f7690',

  },
});

export default Perfil_Victor;
