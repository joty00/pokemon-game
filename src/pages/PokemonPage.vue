<template>

  <div v-if="!pokemon">
    <h1>Wait..</h1>
  </div>

  <div v-else>
    <h1>Who is this Pokemon?</h1>
    <PokemoPicture 
    :pokemonId ='pokemon.id'
    :showPokemon="showPokemon"/>

    <PokemonOptions v-if="!showAnswer"
    :pokemons="pokemonArr"
    @selection="checkAnswer"/>
    
    <div v-if="showAnswer" class="container">
      <h2 class="fade-in">{{ message }}</h2>
      <button @click="resetGame">New Game</button>
    </div>

  </div>

</template>

<script>
import PokemoPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
    name: 'PokemonPage',
    components: {
        PokemoPicture,
        PokemonOptions,
    },
    data() {
      return {
        pokemonArr: [],
        pokemon: null,
        showPokemon: false,
        showAnswer: false,
        message: ''
      }
    },
    methods: {

      async mixPokemonArr() {
        this.pokemonArr = await getPokemonOptions()
        const randInt = Math.floor(Math.random()*4)
        this.pokemon = this.pokemonArr[randInt]
      },

      checkAnswer(pokemonId) {
        this.showPokemon = true
        this.showAnswer = true
        if (pokemonId === this.pokemon.id) {
          this.message = `You right, it was ${this.pokemon.name}!!!`
        }else {
          this.message = `Oh no, it was ${this.pokemon.name}!!!`
        }
      },

      resetGame() {
        this.showPokemon = false
        this.showAnswer = false
        this.pokemonArr = []
        this.pokemon = null
        this.mixPokemonArr()
      }
    },

    mounted() {
      this.mixPokemonArr()
    }
}
</script>

<style scoped>
  button {
    background-color: transparent;
    border: 3px solid rgba(140, 196, 231, 0.649);
    font-weight: bold;
    border-radius: 5px;
    padding: 12px;
    cursor: pointer;
    max-width: 350px;
  }

  button:hover {
    background-color: rgba(140, 196, 231, 0.649);
    border: 3px solid transparent;
    transition: 0.3s;
  }

  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  
</style>