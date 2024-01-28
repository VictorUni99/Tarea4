
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './pantallas/Inicio';
import Perfil_Victor from './pantallas/perfil_victor';
import Perfil_Javier from './pantallas/perfil_javier';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Hogar" component={Inicio} />
        <Stack.Screen name="Perfil Victor" component={Perfil_Victor} />
        <Stack.Screen name="Perfil Javier" component={Perfil_Javier} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
