import { store } from "./store";
import Outcome from "./outcome";

class Products {
    constructor () {
        //Singletone
        if (Products.exists)
            return Products.instance;
    }
   
    addNewProduct = (name, positon, animal, price) => {
        let i = store.products.length;
        let id  = store.products[i-1].id + 1;
        
        let validation = this.validateNewProduct(id, name, positon, animal, price);
        if(validation.result){
            store.products.push({id, name, positon, animal, price});
        }
        console.log(validation);
        return validation;
    }
    addNewAnimal = (animalName) => {
        let id = store.animals[store.animals.length-1] + 1
        store.animals.push({id: id, name:animalName})
    }
    addNewPosition = (positionName) => {
        let id = store.positons[store.positons.length-1] + 1
        store.positons.push({id: id, name:positionName})
    }
    validateNewProduct = (id, name, position, animal, price) => {
        // for (const product of store.products) {
        //     if(id === product.id)
        //         return false;
        // }

        if(name === '')
            return Outcome.buildOutcome(false, 'Name sholud not ne empty');
        
        if(position === '')
            return Outcome.buildOutcome(false, 'Position sholud not ne empty');


        if(animal === '')
            return Outcome.buildOutcome(false, 'Aniaml sholud not ne empty');

        
        if(price <= 0)
            return Outcome.buildOutcome(false, 'Price sholud be more then 0');

        
        return Outcome.buildOutcome(true, "Product added to the list");
    }
    
}
const products = new Products();
export default products;

