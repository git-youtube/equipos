import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Jugador(props) {
    return (
        <View>
            <TouchableOpacity style={styles.equipos} onPress={() => props.jugadorSeleccionado(props.texto)}><Text>{props.texto}</Text></TouchableOpacity>
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