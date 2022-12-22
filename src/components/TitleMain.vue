<template>
    <div class="title">
      <h1>{{ msg }}</h1>
        
    </div>
  </template>
  
  <script>
  export default {
    name: 'TitleMain',
    props: {
      msg: String
    }
  }
  </script>
  
  <style scoped>
    h1 {
        text-align: center;
        border-bottom: 1px solid black ;
    }
  </style>
    