import { View, StyleSheet } from "react-native";
import React from "react";
import Asside from "./asside";
import Body from "./body";
export default function AssideBody() {
    return (
        <View style={styles.bodyStyle}>
            <Body />
            <Asside />
        </View>
    );


}
const styles = StyleSheet.create({
    bodyStyle: {
        borderWidth: 2,
        borderColor: '#000000',
        flex: 1,
        flexDirection: 'row',
    },
});