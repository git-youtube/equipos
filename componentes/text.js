import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Equipos(props) {
    return (
        <View>
            <Text style={styles.equipos}>{props.texto}</Text>
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