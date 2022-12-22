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
    const productsList = [
        {id:'1', name: 'house1', positon: 'Tree', animal: 'Squirel', price: 100},
        {id:'2',name: 'house2', positon: 'Ground', animal: 'Deer', price: 150},
        {id:'3',name: 'house3', positon: 'Ground', animal: 'Wolf', price: 300},
    ]
    export default  {
        name: 'ProductsTable',
        data() {
            return {
                products: productsList
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