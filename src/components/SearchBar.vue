<template>
    <div class="searchBar">
      <input type="text">
      <ButtonMulti msg="Search"/>
    </div>
  </template>
  
  <script>
    import ButtonMulti from './ButtonMulti.vue';

    export default {
      name: 'SearchBar',
      props: {
        
      },
      components: {
          ButtonMulti,
      }
    }
  </script>
  
  <style scoped>
    #searchBar {
        width: 100%;
    }
    input {
        
    }
    button {
        background-color: black;
        color: white;
    }
    button:hover {
        background-color: #444;
    }
  </style>
    