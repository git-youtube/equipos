import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Equipos from './text';

export default function Header({ onEquipoSeleccionado }) {
    console.log('onEquipoSeleccionado:', onEquipoSeleccionado);
  const equipos = ['Equipo1', 'Equipo2', 'Equipo3'];

  const handleEquipoClick = (equipo) => {
    onEquipoSeleccionado(equipo);
  };

  return (
    <View style={styles.headerStyle}>
      {equipos.map((equipo, index) => (
        <TouchableOpacity key={index} onPress={() => handleEquipoClick(equipo)}>
          <Equipos texto={equipo} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    borderWidth: 2,
    borderColor: '#000000',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
