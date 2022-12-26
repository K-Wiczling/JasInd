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
        background-color: var(--secondColor);
        color: white;
        border: 0;
        padding-left: 5px;
        padding-right: 5px;
    }
    button:hover {
      color: black;
      background-color: var(--brakerColor);
    }
  </style>
    