import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import colors from '../colors'

interface PokemonCardProps extends RectButtonProps {
    data: {
        name: string
    }
    index : number
}

function capitalizeFirstLetter(string : String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

function PokemonCard({ data, index , ...rest } : PokemonCardProps) {
    return (
        <RectButton style = {styles.container} {... rest} >
            <Image style = {styles.image} source={{uri: `https://pokeres.bastionbot.org/images/pokemon/${index+1}.png`}} />
            <Text style = {styles.name}> {capitalizeFirstLetter(data.name)} </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        maxWidth: '45%',
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        margin: 10,
        backgroundColor : colors.shape
    },
    image : {
        width : 100,
        height : 100,
    },
    name : {
        marginVertical: 16,
        paddingHorizontal : 8,
        textAlign : 'center'
    }
})

export { PokemonCard }
