import React from 'react'
import Texto from '../../../components/Texto';
import { Image, StyleSheet, View, FlatList } from 'react-native';

export default function Item({item: {nome, imagem}}) {

    return <View style={styles.container}> 
        <Image source={imagem} style={styles.imagem}/>
        <Texto style={styles.texto}>{nome}</Texto>
    </View>

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem:{
        width: 46,
        height: 46,
    },
    texto:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 15,
        color: "#464646",
    }
})