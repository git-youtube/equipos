import React, { Component } from 'react';
import { View } from 'react-native';
import Jugadores from './jugador';

export default class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jugadores: ['Jugador1', 'Jugador2', 'Jugador3', 'Jugador4', 'Jugador5'],
    };
  }

  render() {
    const { jugadores } = this.state;

    return (
      <View>
        {jugadores.map((jugador, index) => (
          <Jugadores key={index} texto={jugador} />
        ))}
      </View>
    );
  }
}
