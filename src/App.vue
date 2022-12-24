<template>
  <TitleMain msg="Jaś Industries"/>
  <MainMenu />
  

  <!-- Products List-->
  <PageContainer v-if="store.appState === 0" title="Products">
    <SearchBar/>
    <SortProducts/>
    <ProductsTable/>
  </PageContainer>

  <!-- New Products -->
  <PageContainer v-if="store.appState === 1" title="Add new product">
    <AddProductForm/>
  </PageContainer>

  <!-- New Category -->
  <PageContainer v-if="store.appState === 2" title="Add Category">
    <AddNewCategory/>
  </PageContainer>
</template>

<script>
import TitleMain from './components/TitleMain.vue'
import SearchBar from './components/SearchBar.vue'
import MainMenu from './components/MainMenu.vue';
import ProductsTable from './components/ProductsTable.vue';
import PageContainer from './components/PageContainer.vue';
import { store } from './sripts/store';
import AddProductForm from './components/AddProductForm.vue';
import AddNewCategory from './components/AddNewCategory.vue';
import SortProducts from './components/SortProducts.vue';

export default {
  name: 'App',
  components: {
    TitleMain,
    SearchBar,
    MainMenu,
    ProductsTable,
    PageContainer,
    AddProductForm,
    AddNewCategory,
    SortProducts
}, 
data() {
    return {
      store
    }
  },
  created () {
    store.displayedProducts = store.products;
  }
}
</script>

<style>
#app {
  width: 100vw;
}
</style>
