<template>
    <div>
        <h3>Currency</h3>
        <select  v-model="currency" >
            <option value="pln" selected>PLN</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
            <option value="usd">USD</option>
        </select>
        <ButtonMulti text="Currency"/>
    </div>
    </template>

<script>
    import { store } from '@/sripts/store';
    import ButtonMulti from './ButtonMulti.vue';

    export default  {
    name: "CurrencyChanger",
    data() {
        return {
            store,
            currency: "pln"
        };
    },
    watch: {
        currency() {
            store.currency = this.currency;
        }
    },
    components: { ButtonMulti }
}
</script>

<style scoped>

    #options {
        width: 20px;
    }
</style>