import React from "react";
import { ScrollView, StyleSheet, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Inicio = ({ navigation }) => {
  const handlePressVictor = () => {
    navigation.navigate('Perfil Victor');
  };

  const handlePressJavier = () => {
    navigation.navigate('Perfil Javier');
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.contenedor}>
        <Text style={styles.bienvenida}> Bienvenido </Text>
        <Text style= {styles.persona}> Victor Maradiaga</Text>
        <Button title="Perfil de Victor" onPress={handlePressVictor} />
        <Text style= {styles.persona}> Javier Maradiaga</Text>
        <Button title="Perfil de Javier" onPress={handlePressJavier} />

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
  },
  bienvenida: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#154a66",
    alignSelf: "center",
    marginTop: 100,
  },
  persona: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#552832",
    alignSelf: "center",
    marginTop: 100,
  },
  
});

export default Inicio;