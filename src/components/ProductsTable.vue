<template>
 
    <div>

        <select  v-model="currency" >
            <option value="pln" selected>PLN</option>
            <option value="eur">EUR</option>
            <option value="gbp">GBP</option>
            <option value="usd">USD</option>
        </select>
        <ButtonMulti text="Currency"/>
        
        <table>
            <tr>
                <th>
                    Product name 
                    <ButtonMulti text="v"/>
                    <ButtonMulti v-if="false" text="A"/>
                </th>
                <th>
                    Position
                    <ButtonMulti text="v"/>
                    <ButtonMulti v-if="false" text="A"/>
                </th>
                <th>
                    Animal
                    <ButtonMulti text="v"/>
                    <ButtonMulti v-if="false" text="A"/>
                </th>
                <th>
                    Price
                    <ButtonMulti text="v"/>
                    <ButtonMulti v-if="false" text="A"/>
                </th>
                <th>
                    *
                </th>
            
            </tr>
            <tr v-for="product in store.displayedProducts" v-bind:key="product.id">
                <td>{{product.name}}</td>
                <td>{{product.positon}}</td>
                <td>{{product.animal}}</td>
                <td>{{ currencyChange(product.price)}}</td>
                <td id="options"><ButtonMulti/></td>
            </tr>
        </table>
        
    </div>
    </template>

<script>
    import { store } from '@/sripts/store';
    import ButtonMulti from './ButtonMulti.vue';
    export default  {
    name: "ProductsTable",
    data() {
        return {
            store,
            currency: "pln"
        };
    },
    methods: {
        currencyChange (value) {
            let price = '';
            switch (this.currency) {
                // PLN
                case 'pln': {
                    price = value + 'zł'
                }
                break;

                // EUR
                case 'eur': {
                    price = Math.round((value/4.65)) + '€'
                }
                break;

                // USD
                case 'usd': {
                    price = '$' + Math.round((value/4.37)); 
                }
                break;
                
                // gbp
                case 'gbp': {
                    price = '£' + Math.round((value/5.27));
                }
                break;

                default:
                    break;
            }
            return price;
        }
    },
    components: { ButtonMulti }
}
</script>

<style scoped>
    table {
        margin-top: 20px;
        border-collapse: collapse;
    }
    td{
        width: 140px;
        padding: 3px;
        border: 1px solid black;
        text-align: center;
    }
    th {
        border: 2px solid black;
    }
    button {
        height: 18px;
    }
    #options {
        width: 20px;
    }
</style>