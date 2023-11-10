import { View, StyleSheet, Image } from "react-native";
import React, { Component } from "react";
export default class Asside extends Component{
    constructor(Props) {
        super(Props);
        this.state = {
          Imagenes1: [{ Jugador1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/871.png" },
          { Jugador2: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/f8/latest/20200428203046/Gengar.png/800px-Gengar.png" },
          { Jugador3: "https://th.bing.com/th/id/R.fc3703eb7e3081c3bf0288b87fadb656?rik=Md3FMd03r4Z44Q&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f03%2fFree-download-Pikachu-wallpaper-HD.jpg&ehk=FkTwOJaPqaW7KRnXuC7gROGyl21twd32i9xGgekq0Rs%3d&risl=&pid=ImgRaw&r=0" },
          { Jugador4: "https://upload.wikimedia.org/wikipedia/en/4/4b/Pok%C3%A9mon_Mew_art.png" },
          { Jugador5: "https://p16-sign.tiktokcdn-us.com/tos-useast5-p-0068-tx/432d4d9b118e49d0bfef5142254b708d_1659542097~tplv-photomode-zoomcover:720:720.jpeg?x-expires=1699657200&x-signature=5GYrT09%2B9f0SWZXGZXVLyibuWxE%3D" },
          { Jugador6: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/438.png" },
          { Jugador7: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/815.png" },
          { Jugador8: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/195.png" },
          { Jugador9: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png" },
          { Jugador10: "https://legends.pokemon.com/assets/pokemon/pokemon_palkia.png" },
          { Jugador11: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/644.png" },
          { Jugador12: "https://static.pokemonpets.com/images/monsters-images-800-800/8807-Mega-Zeraora.webp" },
          { Jugador13: "https://media.printables.com/media/prints/247002/stls/2224618_55048767-3a71-44b7-9edf-ce85eaed1fcc/thumbs/inside/1280x960/png/sonic-poligonal_preview.webp" },
          { Jugador14: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/45/latest/20160625151113/Victini.png/800px-Victini.png"},
          { Jugador15: "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/6/66/latest/20150729161538/Rayquaza.png/800px-Rayquaza.png" },
          ],
        }
      }
      render() {
        const { jugadorSeleccionado } = this.props;
        const imagenJugador = this.state.Imagenes1.find(jugador => jugador[jugadorSeleccionado]);
    
        return (
          <View style={styles.assideStyle}>
            <Image style={styles.image} source={{ uri: imagenJugador ? imagenJugador[jugadorSeleccionado] : '' }} />
          </View>
        )
      }
 


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