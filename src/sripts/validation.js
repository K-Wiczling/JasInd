import Outcome from "./outcome";
import { store } from "./store";
class Validation {
  constructor() {
    //Singletone
    if (Validation.exists) return Validation.instance;
  }

  // Validateing text input (input type='string' , select)
  validateTextInput = (value, name) => {
    if (value === "" || value === null || value === undefined) {
      return Outcome.buildOutcome(false, `${name} input can't be empty`);
    } else {
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
    if (typeof id === "number" && !isNaN(id)) {
      if (arr[arr.length - 1] !== id) {
        return Outcome.buildOutcome(true, "Id can be used as new", {
          newId: true,
        });
      }
      return Outcome.buildOutcome(true, "There is product with this id", {
        newId: false,
      });
    }
    return Outcome.buildOutcome(false, "Id validation false");
  };

  // Change currency
  currencyChange(value, getPln) {
    let price = "";
    function calcPrice(changeFactor, currencyCode, countryCode) {
      const formatter = new Intl.NumberFormat(countryCode, {
        style: "currency",
        currency: currencyCode,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formatter.format(value / changeFactor);
    }
    if (getPln) {
      price = calcPrice(1, "PLN", "pl-PL");
      return price;
    }
    switch (store.currency) {
      // PLN
      case "pln":
        {
          price = calcPrice(1, "PLN", "pl-PL");
        }
        break;

      // EUR
      case "eur":
        {
          price = calcPrice(4.65, "EUR", "de-DE");
        }
        break;

      // USD
      case "usd":
        {
          price = calcPrice(4.37, "USD", "en-US");
        }
        break;

      // gbp
      case "gbp":
        {
          price = calcPrice(5.27, "GBP", "en-GB");
        }
        break;

      default:
        break;
    }
    return price;
  }

  // generate uniqe Id
  getUniqeId = (arr) => {
    let id = arr[arr.length - 1].id + 1;
    return id;
  };
}
const validation = new Validation();
export default validation;
