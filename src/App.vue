<template>
  <TitleMain />

  <!-- Products List-->
  <PageContainer v-if="store.appState === 0" title="Products">
    <div id="input-wrapper">
      <SearchBar class="input-box" />
      <SortProducts class="input-box" />
      <CurrencyChanger class="input-box" />
    </div>
    <ProductsTable />
  </PageContainer>

  <!-- New Products -->
  <PageContainer v-if="store.appState === 1" title="Add new product">
    <AddProductForm />
  </PageContainer>

  <!-- New Category -->
  <PageContainer v-if="store.appState === 2" title="Add Category">
    <AddNewCategory />
  </PageContainer>
  <PageFooter />
</template>

<script>
import { store } from "./sripts/store";
import TitleMain from "./components/header/TitleMain.vue";
import SearchBar from "./components/small/SearchBar.vue";
import ProductsTable from "./components/pages/ProductsTable.vue";
import PageContainer from "./components/pages/PageContainer.vue";
import AddProductForm from "./components/pages/AddProductForm.vue";
import AddNewCategory from "./components/pages/AddNewCategory.vue";
import SortProducts from "./components/small/SortProducts.vue";
import CurrencyChanger from "./components/small/CurrencyChanger.vue";
import PageFooter from "./components/pages/PageFooter.vue";

export default {
  name: "App",
  components: {
    TitleMain,
    SearchBar,
    ProductsTable,
    PageContainer,
    AddProductForm,
    AddNewCategory,
    SortProducts,
    CurrencyChanger,
    PageFooter,
  },
  data() {
    return {
      store,
    };
  },
  created() {
    store.displayedProducts = store.products;
  },
};
</script>

<style>
#input-wrapper {
  width: 90vw;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  border-radius: 10px 10px 0 0;
  padding-bottom: 10px;
}
#app {
  width: 100vw;
}


@media only screen and (max-width: 850px) {
  #input-wrapper {
    grid-template-columns: 1fr 1fr;
  }

}

@media only screen and (max-width: 450px) {
  #input-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
