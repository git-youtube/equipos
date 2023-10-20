import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button,Image} from 'react-native';
import Header from "./componentes/header";
import Body from "./componentes/asside-body";
import Footer from "./componentes/footer";


export default function App() {
  return (
    <View style={styles.container}>
    <Header/>
    <Body/>
   <Footer/>
  </View>
  );
}

const styles = StyleSheet.create({
container:{
borderWidth: 2,
borderColor: '#000000',
flex:1,
},
});
