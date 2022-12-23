import { reactive } from 'vue'

// 0 - list of products
// 1 - add new product
// 2 - add new category
export const store = reactive({
  appState: 0,
  products: [
    {id:'1', name: 'house1', positon: 'Tree', animal: 'Squirel', price: 100},
    {id:'2',name: 'house2', positon: 'Ground', animal: 'Deer', price: 150},
    {id:'3',name: 'house3', positon: 'Ground', animal: 'Wolf', price: 300},
  ],
  positons: [{id:0, name:'Tree'}, {id:1, name:'Ground'}],
  animals: [{id:0, name:'Deer'}, {id:1, name:'Bird'},{id:2, name:'Wolf'},{id:2, name:'Rabbit'}]
})