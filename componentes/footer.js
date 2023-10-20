import { View, StyleSheet } from "react-native";
import React from "react";
import Equipos from "./jugador";
export default function Footer() {
    return (
    <View style={styles.footerStyle}>
      <Equipos texto="www.equipo.com"/>
      <Equipos texto="123456789"/>
    </View>
    );
}

const styles = StyleSheet.create({
    footerStyle: {
        borderWidth: 2,
        borderColor: "#000000",
        flexDirection: "row",
        height: 100,
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
        padding: 10,
      },
  });