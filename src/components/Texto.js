import { View, Text, StyleSheet } from 'react-native'
import React, { Children } from 'react'

export default function Texto({children, style}) {
    let estilo = styles.texto;

    if(style?.fontWeight === 'bold'){
        estilo = styles.textoNegrito;
    }

  return (
    <Text style={[style, estilo.texto]}>{children}</Text>
  )
}


const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: 'normal',
    },
    textoNegrito:{
        fontFamily: "MontserratBold",
        fontWeight: 'normal',
    }
})