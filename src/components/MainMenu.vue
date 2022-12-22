<template>
    <div class="mainMenu">
        <ButtonMulti msg="List of Products" />
        <ButtonMulti msg="New Product" />
        <ButtonMulti msg="New Category" />
    </div>
</template>
  
<script>
    import ButtonMulti from './ButtonMulti.vue';
    export default {
        name: 'SearchBar',
        props: {
            
        },
        components: {
            ButtonMulti
        }
    }
</script>
  
<style scoped>
    .mainMenu {
        width: 100%;
        border: 1px solid black;
        display: flex;
        justify-content: space-around;
        padding: 10px;
        
    }
    button {
        height: 30px;
    }

</style>
    