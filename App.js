import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from "./componentes/header";
import AssideBody from "./componentes/asside-body";
import Footer from "./componentes/footer";

export default function App() {
  const [equipoSeleccionado, setEquipoSeleccionado] = useState("Equipo1");

  const handleEquipoSeleccionado = (equipo) => {
    setEquipoSeleccionado(equipo);
    console.log("Equipo seleccionado:", equipo);
  };

  return (
    <View style={styles.container}>
      <Header onEquipoSeleccionado={handleEquipoSeleccionado} />
      <AssideBody equipoSeleccionado={equipoSeleccionado} /> {/* Pasa equipoSeleccionado como prop */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#000000',
    flex: 1,
  },
})
