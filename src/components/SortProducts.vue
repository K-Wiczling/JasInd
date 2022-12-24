<template>
    <div id="sortProducts">
        <label for="position">Sort</label>
        <select v-model="sortCategory" >
            <option value="Name" selected>Name</option>
            <option value="Position">Position</option>
            <option value="Animal">Animal</option>
            <option value="Price">Price</option>
        </select>
        <select  v-model="sortType" name="sortType" id="sortType" >
            <option value="Ascending" selected>Ascending</option>
            <option value="Descending">Descending</option>
        </select>
      <ButtonMulti text="Sort" @click="sort"/>
      <ButtonMulti text="Clear"/>
    </div>
  </template>
  
  <script>
    import ButtonMulti from './ButtonMulti.vue';

    export default {
      name: 'SortProducts',
      props: {
        
      },
      data () {
        return {
            sortCategory: 'Name',
            sortType: 'Ascending'

        }
      },
      methods: {
        sort () {
            console.log('sort');
        }
      },
      components: {
          ButtonMulti,
      }
    }
  </script>
  
  <style scoped>
    #sortProducts {
        border: 1px solid black;
    }
  </style>
    