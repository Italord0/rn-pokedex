import React, { Component, useEffect, useState } from 'react'
import { Text, StyleSheet, View, Platform, StatusBar, FlatList } from 'react-native'
import colors from '../colors'
import { PokemonCard } from '../components/PokemonCard';
import { api } from '../services/api';
interface PokemonProps {
    name: string;
    url: string;
}

export default function App() {

    async function fetchPokemons() {
        try {
            const { data } = await api.get('pokemon?limit=152&offset=0');

            setPokemons(data.results)

        } catch (error) {
            console.log(error)
        }
    }

    const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

    function handlePokemon(pokemon: PokemonProps) {
        console.log(pokemon.name)
    }

    useEffect(() => {
        fetchPokemons();
    }, [])

    const testes = [ { name : 'teste' , url : 'maisTeste' } ]

    return (
        <View style={styles.container} >

            <Text style={styles.title}> Pokedéx </Text>
            <View style = { styles.pokemons } >
                <FlatList
                    data={pokemons}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => String(item.name)}
                    numColumns={3}
                    renderItem={({ item , index }) => (<PokemonCard
                        data={item}
                        index = {index}
                        onPress={() => handlePokemon(item)} />)}></FlatList>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
        marginStart: 32,
        marginEnd: 32
    },
    pokemons: {
        marginTop : 4,
        flex : 1,
        width : '100%',
        justifyContent : 'center'
    }
})
