<template>
    <div>
        <label for="name">Animal Name</label>
        <input v-model="cAnimal" type="text" name="name">
        <ButtonMulti text="Add new animal" @click="addAnimal"/>

        <label for="name">Position Name</label>
        <input v-model="cPosition" type="text" name="name">
        <ButtonMulti text="Add new positon" @click="addPosition"/>

    </div>
</template>
  
<script>
    import { store } from '@/sripts/store';
    import product from '../sripts/products.js'

    import ButtonMulti from './ButtonMulti.vue';

  
    export default {
        name: 'AddNewCategory',
        components: {
            ButtonMulti
        }, 
        data() {
            return {
                store,
                cAnimal: '',
                cPosition: ''
            }
        },
        methods: {
            addPosition () {
                product.addNewPosition(this.cPosition);
            },
            addAnimal () {
                 product.addNewAnimal(this.cAnimal);
            }
        }   
    }
</script>
  
<style>
    label {
        display: block;
        margin-top: 30px;
    }
    input, select {
        display: block;
        margin-bottom: 15px;
    }
</style>
  