import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [textColor, setTextColor] = useState('black'); // Estado para el color del texto

  // Función para cambiar el color del texto a rojo
  const changeTextColor = () => {
    setTextColor('red');
  };

  return (
    <View style={styles.container}>
       <Text style={[styles.text, { color: textColor }]}>¡Hola Mundo!</Text>
      <TouchableOpacity onPress={changeTextColor}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Presioname</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Tamaño de fuente
    fontWeight: 'bold', // Peso de la fuente
    textAlign: 'center', // Alineación de texto
    marginBottom: 20, // Margen inferior
  },
  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
