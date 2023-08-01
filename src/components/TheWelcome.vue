<template>
    <WelcomeItem v-if="pokemonInfo">
        <template #icon>
            <IconDocumentation/>
        </template>
        <template #heading>
            {{ pokemonInfo.name }}
        </template>

        <img :src="pokemonInfo.image" :alt="pokemonInfo.name"/>
        <br>
        <div class="text-box">
            <div class="item">
                <label>ID: </label> <span>{{ pokemonInfo.id }}</span>
            </div>
            <div class="item">
                <label>Type: </label> <span>{{ pokemonInfo.type }}</span>
            </div>
            <div class="item">
                <label>Weight: </label> {{ pokemonInfo.weight }}
            </div>
            <div class="item">
                <label>Height: </label> {{ pokemonInfo.height }}
            </div>
        </div>
    </WelcomeItem>
</template>

<script>
import {computed, defineComponent, onMounted} from "vue";
import IconPokemon from "@/components/icons/IconPokemon.vue"
import {usePokemonStore} from "@/PokemonStore"
import WelcomeItem from "@/components/WelcomeItem.vue";
import IconDocumentation from "@/components/icons/IconDocumentation.vue";

export default defineComponent({
    name: 'TheWelcome',
    components: {IconDocumentation, IconPokemon, WelcomeItem},
    setup() {
        const store = usePokemonStore()
        const pokemonInfo = computed(() => store.getData)

        onMounted(() => {
            store.searchPokemon(1)
        })

        return {
            pokemonInfo
        }
    }
})
</script>
<style scoped>
.text-box {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: nowrap;
}
.item {
    font-size: large;
    padding: 10px;
}
.item > label {
    font-weight: bold;
}
.item > span {
    text-transform: capitalize;
}
</style>