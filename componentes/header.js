import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Equipos from './text';

export default function Header() {
  const equipos = ['Equipo1', 'Equipo2', 'Equipo3'];

  return (
    <View style={styles.headerStyle}>
      {equipos.map((equipo, index) => (
        <Equipos key={index} texto={equipo} />
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
