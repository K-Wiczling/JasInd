<template>
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
            
        </tr>
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
import ButtonMulti from './ButtonMulti.vue';
    export default  {
    name: "ProductsTable",
    data() {
        return {
            products: store.displayedProducts
        };
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

    }
    th {
        border: 2px solid black;
    }
    button {
        height: 18px;
    }
</style>