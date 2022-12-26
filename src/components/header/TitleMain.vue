<template>
  <div class="title">
    <h1>Jaś Industries</h1>
    <MainMenu/>
  </div>
</template>
  
<script>
  import MainMenu from './MainMenu.vue';

  export default {
    name: "TitleMain",
    props: {
        msg: String
    },
    components: { MainMenu }
  }
</script>
  
<style scoped>
  .title {
    display: flex ;
    justify-content: space-between;
    border-bottom: 5px solid var(--thirdColor);
    background-color: var(--mainColor);
  }
  h1 {
    font-size: 1.6rem;
    color: var(--brakerColor);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
    text-align: start;
    width: 250px;
    margin: 0;
  }
</style>
    