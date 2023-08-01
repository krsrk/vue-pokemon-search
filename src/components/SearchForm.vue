<template>
    <div class="search_box">
        <div class="search">
            <div class= "select_area">
                <div class="text">Search Pokémon</div>
            </div>

            <div class="line"></div>

            <div class = "text_and-icon">
                <input
                    v-model="searchVal"
                    type="text"
                    class="search_text"
                    id="search_text"
                    placeholder="By Pokémon Name or Id ..">
                <a  @click="handlerSearchClick" style="cursor: pointer;">
                    <i>
                        <IconPokemon />
                    </i>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import {defineComponent, ref} from "vue"
import IconPokemon from "@/components/icons/IconPokemon.vue"
import { usePokemonStore } from "@/PokemonStore"

export default defineComponent({
    name: "MrsTplAdminShoppingCarts",
    components: {IconPokemon},
    setup() {
        const store = usePokemonStore()
        const searchVal = ref('')
        const handlerSearchClick = () => {
            store.searchPokemon(searchVal.value)
        }

        return {
            searchVal,
            handlerSearchClick,
        }
    },
})
</script>

<style scoped>
@import url(https://kit.fontawesome.com/9b8a7e18a0.js);
@import url(https://fonts.googleapis.com/css?family=Roboto);

body {
    background-color : #FAFAFA;
    display : grid;
}

.search_box {
    padding-top : 200px;
}

.search {
    padding-left: 25px;
    display: flex;
    align-items: center;
    margin : auto;
    width : 612px;
    height: 54px;
    background-color : white;
    border-radius: 25px;
    -webkit-box-shadow: 0px 10px 38px 0px rgba(0,0,0,0.1);
    -moz-box-shadow: 0px 10px 38px 0px rgba(0,0,0,0.1);
    box-shadow: 0px 10px 38px 0px rgba(0,0,0,0.1);
}

.select_area {
    color : #4451FE;
    display : flex;
    align-items: center;
    font-family: 'Roboto', sans-serif; line-height:24px;
    font-weight : medium ;
}

.text {
    padding-left:15px;
}

.line {
    margin-left: 15px;
    border-left: 1px solid #D8D8D8;
    height: 40px;
}

.search_text {
    width: 100%;
    border: none;
    margin-left : 15px;
    font-size : 16px;
    font-family: 'Roboto', sans-serif; line-height:24px;
    font-weight : Regular ;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #ADB1B8;
}


.text_and-icon {
    width: 410px;
    display: flex;
    align-items: center;
}
.search_icon {
    color : #5E6573;
    transition: all .6s ease-in-out;
    -webkit-transition: all .6s ease-in-out; /** Chrome & Safari **/
    -moz-transition: all .6s ease-in-out; /** Firefox **/
    -o-transition: all .6s ease-in-out; /** Opera **/
}

.search_text:focus {
    outline: none !important;
}

.search_text:focus + .search_icon{
    color : #4451FE;
    transform: translate(55px,0);
    -webkit-transform: translate(55px,0);
    -o-transform: translate(55px,0);
    -moz-transform: translate(55px);
}
</style>