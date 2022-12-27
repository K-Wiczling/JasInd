// import { store } from "./store";
import Outcome from "./outcome";

class Validation {
  constructor() {
    //Singletone
    if (Validation.exists) return Validation.instance;
  }

  validateNewProduct = (id, name, position, animal, price) => {
    // for (const product of store.products) {
    //     if(id === product.id)
    //         return false;
    // }

    if (name === "")
      return Outcome.buildOutcome(false, "Name sholud not ne empty");

    if (position === "")
      return Outcome.buildOutcome(false, "Position sholud not ne empty");

    if (animal === "")
      return Outcome.buildOutcome(false, "Aniaml sholud not ne empty");

    if (price <= 0)
      return Outcome.buildOutcome(false, "Price sholud be more then 0");

    return Outcome.buildOutcome(true, "Product added to the list");
  };
}
const validation = new Validation();
export default validation;
