<template>
    <button>{{msg}}</button>
      
  </template>
  
  <script>
  export default {
    name: 'ButtonMulti',
    props: {
      msg: String
    }
  }
  </script>
  
  <style scoped>
    button {
        background-color: black;
        color: white;
    }
    button:hover {
        background-color: #444;
    }
  </style>
    