import {StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Texto from '../../../components/Texto';


export default function Botao({botao}) {
  return (
    <TouchableOpacity style={styles.botao} onPress={()=>{}}>
        <Texto style={styles.textoBotao}>{botao}</Texto>
      </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6,

      },
      textoBotao:{
        textAlign: 'center',
        color: "#FFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
      }
})