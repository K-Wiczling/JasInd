<template>
    <div class="mainMenu">
        <ButtonMulti @click="setAppState(0)" text="List of Products" />
        <ButtonMulti @click="setAppState(1)" text="New Product" />
        <ButtonMulti @click="setAppState(2)" text="New Category" />
    </div>
</template>
  
<script>
    import ButtonMulti from './ButtonMulti.vue';
    import { store } from '@/sripts/store';

    export default {
        name: 'SearchBar',
        props: {
            text: String
        },
        components: {
            ButtonMulti
        },
        data() {
            return {
                store
            }
        },
        methods: {
            setAppState (n) {
                store.appState = n;
            }
        }
        
    }
</script>
  
<style scoped>
    .mainMenu {
        border: 1px solid black;
        display: flex;
        justify-content: space-around;
        
    }
    button {
        height: 30px;
    }

</style>
    