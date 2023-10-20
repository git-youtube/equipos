import { View, StyleSheet } from "react-native";
import React from "react";
import Equipos from "./text";
export default function Header() {
    return (
        <View style={styles.headerStyle}>
      <Equipos texto="Equipo1"></Equipos>
      <Equipos texto="Equipo2"></Equipos>
      <Equipos texto="Equipo3"></Equipos>
      </View>
    );


}
const styles = StyleSheet.create({
    headerStyle:{
        borderWidth: 2,
        borderColor: '#000000',
        height:100,
        flexDirection: "row",
        alignItems: "center",
        }
  });