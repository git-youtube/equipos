import { View, StyleSheet } from "react-native";
import React from "react";
import Equipos from "./text";
export default function Body() {
    return (
       
            <View>
                <Equipos texto="Jugador 1.1"></Equipos>
                <Equipos texto="Jugador 1.2"></Equipos>
                <Equipos texto="Juhador 1.3"></Equipos>
                <Equipos texto="Jugador 1.4"></Equipos>
                <Equipos texto="Jugador 1.5"></Equipos>
            </View>
        
    );
}

