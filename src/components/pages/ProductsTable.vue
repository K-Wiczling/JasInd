<template>
 
    <div>
        <table>
            <tr>
                <th>
                    Product name 
                </th>
                <th>
                    Position
                </th>
                <th>
                    Animal
                    
                </th>
                <th>
                    Price
                   
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
    import ButtonMulti from '../small/ButtonMulti.vue';
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
            switch (store.currency) {
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
        margin: auto;
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