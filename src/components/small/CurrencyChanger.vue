<template>
  <div id="currency-wrapper">
    <h3>Currency</h3>
    <select v-model="currency">
      <option value="pln" selected>PLN</option>
      <option value="eur">EUR</option>
      <option value="gbp">GBP</option>
      <option value="usd">USD</option>
    </select>
    <ButtonMulti text="Clear Currency" @click="clearCurrency" />
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
    clearCurrency() {
      this.currency = "pln";
    },
  },
  watch: {
    currency() {
      store.currency = this.currency;
    },
  },
  components: { ButtonMulti },
};
</script>

<style scoped>
#currency-wrapper {
}
select {
}
#options {
  width: 20px;
}
</style>
