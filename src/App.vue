<template>
  <TitleMain msg="Jaś Industries"/>
  <MainMenu />
  <SearchBar/>
  <ProductsTable/>
</template>

<script>
import TitleMain from './components/TitleMain.vue'
import SearchBar from './components/SearchBar.vue'
import MainMenu from './components/MainMenu.vue';
import ProductsTable from './components/ProductsTable.vue';

export default {
  name: 'App',
  components: {
    TitleMain,
    SearchBar,
    MainMenu,
    ProductsTable
}
}
</script>

<style>
#app {
  width: 100vw;
}
</style>
