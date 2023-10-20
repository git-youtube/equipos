import { View, StyleSheet, Image } from "react-native";
import React from "react";
export default function Asside() {
    return (
        <View style={styles.assideStyle}>
        <Image style={styles.image} source={{
                          uri: 'https://estaticos-cdn.sport.es/clip/079f8146-5fef-4016-b95b-6acfcb65b810_alta-libre-aspect-ratio_default_0.jpg',
                      }}></Image>
        </View>
    );


}
const styles = StyleSheet.create({
    assideStyle:{
        borderWidth:2,
        borderColor: '#000000',
      flex:1,
      },
      image: {
       flex:1,
      },
  });