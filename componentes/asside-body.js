import { View, StyleSheet } from "react-native";
import React, { Component } from "react";
import Asside from "./asside";
import Body from "./body";
export default class AssideBody extends Component {
    constructor(props) {
      super(props);
      this.state = {
        jugadorSeleccionado: "Jugador1",
      };
    }
  
    jugadorSeleccionado = (jugador) => {
        console.log("Jugador seleccionado en AssideBody:", jugador);
        this.setState({ jugadorSeleccionado: jugador });
      };
      
    render() {
      const { jugadorSeleccionado } = this.state;
      const { equipoSeleccionado } = this.props;
      
      return (
        <View style={styles.bodyStyle}>
          <Body equipoSeleccionado={equipoSeleccionado} jugadorSeleccionado={this.jugadorSeleccionado} JugadorSeleccionado={jugadorSeleccionado}/>
          <Asside jugadorSeleccionado={jugadorSeleccionado} onJugadorSeleccionado={this.jugadorSeleccionado} />
        </View>
      );
    }
  }
  




const styles = StyleSheet.create({
    bodyStyle: {
        borderWidth: 2,
        borderColor: '#000000',
        flex: 1,
        flexDirection: 'row',
    },
});
