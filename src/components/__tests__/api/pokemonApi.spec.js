import pokemonApi from '@/api/pokemonApi.js'
import { describe, expect, test } from 'vitest'

describe('pokemonApi', () => {
    test('axios debe estar configurado con al api de pokemon', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })

})