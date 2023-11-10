import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Equipos from './text';

export default function Header({ onEquipoSeleccionado }) {
  const equipos = ['Equipo1', 'Equipo2', 'Equipo3'];
  const [equipoSeleccionado, setEquipoSeleccionado] = useState('Equipo1');

  const handleEquipoSeleccionado = (equipo) => {
    setEquipoSeleccionado(equipo);
    onEquipoSeleccionado(equipo);
  };

  return (
    <View style={styles.headerStyle}>
      {equipos.map((equipo, index) => (
        <TouchableOpacity key={index} onPress={() => handleEquipoSeleccionado(equipo)}>
          <Equipos texto={equipo} equipoSeleccionado={equipoSeleccionado} onPress={handleEquipoSeleccionado} />
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
