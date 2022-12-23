<template>
    <table>
        <tr v-for="product in products" v-bind:key="product.id">
            <td>{{product.name}}</td>
            <td>{{product.positon}}</td>
            <td>{{product.animal}}</td>
            <td>{{product.price}}zl</td>
        </tr>
    </table>
    
</template>

<script>
    import { store } from '@/sripts/store';
    export default  {
        name: 'ProductsTable',
        data() {
            return {
                products: store.products
            }
        }
    }
</script>

<style>
    table {

        border-collapse: collapse;
    }
    td{
        padding: 3px;
        border: 1px solid black;

    }
</style>