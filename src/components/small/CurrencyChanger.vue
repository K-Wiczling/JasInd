<template>
  <div id="currency-wrapper">
    <h3>Currency</h3>
    <select class="input-2" v-model="currency">
      <option value="pln" selected>PLN</option>
      <option value="eur">EUR</option>
      <option value="gbp">GBP</option>
      <option value="usd">USD</option>
    </select>
    <ButtonMulti class="btn-medium" text="Clear Currency" @click="clearCurrency" />
  </div>
</template>

<script>
import { store } from "@/sripts/store";
import ButtonMulti from "./ButtonMulti.vue";

export default {
  name: "CurrencyChanger",
  data() {
    return {
      store,
      currency: "pln",
    };
  },
  methods: {
    // Return to the PLN prices
    clearCurrency() {
      this.currency = "pln";
    },
  },
  watch: {
    // Change Currency
    currency() {
      store.currency = this.currency;
    },
  },
  components: { ButtonMulti },
};
</script>

<style scoped>
#options {
  width: 20px;
}
</style>
