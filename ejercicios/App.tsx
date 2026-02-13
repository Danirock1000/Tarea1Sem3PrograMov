import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomInput from './src/components/customInput';
import CustomButtom from './src/components/customButtom';
import { useState } from 'react';

export default function App() {

  // Estados para almacenar el nombre y la edad ingresados por el usuario
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState<number>(0);

  // Funciones para manejar los cambios en los campos de nombre y edad
  const handleNombreChange = (value: string | number) => {
    setNombre(value as string);
  };
  const handleEdadChange = (value: string | number) => {
    setEdad(value as number);
  };

// Función para evaluar el nombre y la edad ingresados por el usuario
  const handleEvaluar = () => {
    if (nombre.trim() === "") {
      alert("Por favor ingresa tu nombre");
    } else if (typeof edad === "number" && edad > 0) {
      alert("Hola " + nombre + ", tu edad es " + edad);
    } else {
      alert ("Esta edad no es valida");
    }
  };

// Renderizado del componente App
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicios Semana 3</Text>
      <StatusBar style="auto" />
      <View style={styles.wrapper}>
        <Text style={styles.excerciseTitle}>Ejercicio 1</Text>
        <CustomInput
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={handleNombreChange}
          typeInput='text'
        />
        <CustomInput
          placeholder="Ingresa tu edad"
          value={edad}
          onChange={handleEdadChange}
          typeInput='number'
        />
        <View>
          <CustomButtom title={"Evaluar"}
            onClick={handleEvaluar}
          />
        </View>
      </View>

    </View>
  );
}

// Estilos para el componente App
const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
    
  },
  wrapper: {
    width: "80%",
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 10,
  },
  excerciseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },

});
