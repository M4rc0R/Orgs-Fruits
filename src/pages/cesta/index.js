import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Topo from "./components/topo";
import Detalhes from "./components/detalhes";
import Botao from "./components/botao";
import Item from "./components/item";
import Texto from "../../components/Texto";



export default function Cesta({topo, detalhes, itens}) {
  return (
    <>
       <FlatList 
        data={itens.lista} 
        renderItem={Item} 
        keyExtractor={({nome})=> nome}
        ListHeaderComponent={()=> {
         return <>
          <Topo {...topo}/>
          <View style={styles.container}>
            <Detalhes {...detalhes}/>
            <Botao {...detalhes}/>
            <Texto style={styles.titulo}>{itens.titulo}</Texto>
          </View>
          </>
        }}/>

    
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  titulo:{
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 10,
    fontSize: 25,
    lineHeight: 32,
},
  
});
