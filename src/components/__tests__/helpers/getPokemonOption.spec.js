import getPokemonOptions, { getPokemons, getPokemonName } from '@/helpers/getPokemonOptions.js'
import { describe, expect, test } from 'vitest'

describe('pokemonOptions helper', () => {

    test('debe devolver un arreglo de numeros', () => {

        const pokemons = getPokemons()
        expect(pokemons[0]).toBe(1)
        expect(pokemons[253]).toBe(254)
        expect(pokemons[345]).toBe(346)
        expect(pokemons[630]).toBe(631)

    })

    test('debe de rteornar un arreglo de 4 elementos con nombres de pokemons', async () => {

        const names = await getPokemonName([1, 2, 3, 4])
        expect(names).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ])

    })

    test('getPokemonOptions debe retornar un arreglo mezclado', async () => {

        const pokemons = await getPokemonOptions()
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
            {
                name: expect.any(String),
                id: expect.any(Number)
            },
        ])
    })



})