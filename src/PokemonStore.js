import {defineStore} from 'pinia'

export const usePokemonStore = defineStore('pokemonStore', {
    state: () => {
        return {
            data: {
               id: '',
               name: '',
               type: '',
               weight: 0,
               height: 0,
               image: ''
            },
        }
    },
    actions: {
        async searchPokemon(searchVal) {
            const paramVal = (isNaN(searchVal)) ? searchVal.toLowerCase() : searchVal
            const requestData = await fetch('https://pokeapi.co/api/v2/pokemon/' + paramVal)
                .then((response) => response.json())

            this.$state.data = {
                id: requestData.id,
                name: requestData.name?.toUpperCase(),
                type: requestData.types[0].type.name,
                weight: requestData.weight,
                height: requestData.height,
                image: requestData.sprites.other['official-artwork'].front_default,
            }
        }
    },
    getters: {
        getData: state => state.data,
    },
})