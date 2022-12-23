<template>
    <button>{{text}}</button>
      
  </template>
  
  <script>
  export default {
    name: 'ButtonMulti',
    props: {
      text: String
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
    