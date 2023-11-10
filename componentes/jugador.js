import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const coloresJugadores = {
    Jugador1: '#2F70A5',
    Jugador2: '#6379B6',
    Jugador3: '#5ECBCC',
    Jugador4: '#3C7D8C',
    Jugador5: '#7CDEC5',
    Jugador6: '#2F70A5',
    Jugador7: '#6379B6',
    Jugador8: '#5ECBCC',
    Jugador9: '#3C7D8C',
    Jugador10: '#7CDEC5',
    Jugador11: '#2F70A5',
    Jugador12: '#6379B6',
    Jugador13: '#5ECBCC',
    Jugador14: '#3C7D8C',
    Jugador15: '#7CDEC5',
  };
  export default function Jugador(props) {
    console.log('Jugador seleccionado:', props.jugadorSeleccionado);
    
    //const jugadorColor = coloresJugadores[props.texto];
    const jugadorColor = props.texto === props.JugadorSeleccionado  ? coloresJugadores[props.texto] : 'white';
    return (
      <View>
        <TouchableOpacity style={[styles.equipos, { backgroundColor: jugadorColor }]} onPress={() => props.jugadorSeleccionado(props.texto)}>
          <Text>{props.texto}</Text>
        </TouchableOpacity>
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