<template>
    <div id="searchBar">
      <input type="text">
      <ButtonMulti text="Search"/>
      <ButtonMulti text="Clear"/>
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
        border: 1px solid black;
        padding: 2px;
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
    