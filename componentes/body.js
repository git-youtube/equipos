import React, { Component } from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import Jugador from './jugador';

export default class Body extends Component {
  render() {
    const jugadoresPorEquipo = {
      Equipo1: ['Jugador1', 'Jugador2', 'Jugador3', 'Jugador4', 'Jugador5'],
      Equipo2: ['Jugador6', 'Jugador7', 'Jugador8', 'Jugador9', 'Jugador10'],
      Equipo3: ['Jugador11', 'Jugador12', 'Jugador13', 'Jugador14', 'Jugador15'],
    };

    const { jugadorSeleccionado, equipoSeleccionado, JugadorSeleccionado } = this.props;
    return (
      <View>
        {equipoSeleccionado && jugadoresPorEquipo[equipoSeleccionado].map((jugador, index) => (
          <Jugador
            key={index}
            texto={jugador}
            jugadorSeleccionado={jugadorSeleccionado}
            JugadorSeleccionado={JugadorSeleccionado}
          />
        ))}
      </View>
    );
  }
}







