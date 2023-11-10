import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Equipos(props) {
  const cambiarColor = (equipo) => {
    switch (equipo) {
      case 'Equipo1':
        return '#1078A5';
      case 'Equipo2':
        return '#5AE2E9';
      case 'Equipo3':
        return '#7759EA';
      default:
        return 'white';
    }
  };

  const equipoColor = props.texto === props.equipoSeleccionado ? cambiarColor(props.texto) : 'white';

  return (
    <View>
      <Text style={[styles.equipos, { backgroundColor: equipoColor }]} onPress={() => props.onPress(props.texto)}>
        {props.texto}
      </Text>
    </View>
  );
}



const styles = StyleSheet.create({
    equipos: {
        fontSize: 16,
        borderWidth: 2,
        borderColor: '#000000',
        margin: 10,
    }
});
