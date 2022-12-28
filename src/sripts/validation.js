import Outcome from "./outcome";

class Validation {
  constructor() {
    //Singletone
    if (Validation.exists) return Validation.instance;
  }

  // Validateing text input (input type='string' , select)
  validateTextInput = ( value, name) => {
    if (
      value === "" ||
      value === null ||
      value === undefined
    ) {
      return Outcome.buildOutcome(false, `${name} input can't be empty`);
    }
    else {
      return Outcome.buildOutcome(true, `${name} input validated correctly`);
    }
  };

  // Validate number input ( input type='number')
  validateNumberInput = (num, name) => {
    if (
      num !== null &&
      num !== undefined &&
      typeof num === "number" &&
      num > 0
    ) {
      return Outcome.buildOutcome(true, "input validated correctly");
    }
    return Outcome.buildOutcome(false, `incorrect ${name} input`);
  };

  // Id validation 
  validateId = (id, arr) => {
    if(typeof id === 'number' && !isNaN(id)){
      if (arr.length === id) {
        return Outcome.buildOutcome(true, 'Id can be used as new', {newId: true})
      }
      return Outcome.buildOutcome(true, 'There is product with this id', {newId: false})
    }
    return Outcome.buildOutcome(false, 'Id validation false', )
  }

  // generate uniqe Id
  getUniqeId = (arr) => {
    let id = arr[arr.length - 1].id + 1;
    return id;
  }
}
const validation = new Validation();
export default validation;
