import { reactive } from "vue";

// 0 - list of products
// 1 - add new product
// 2 - add new category
export const store = reactive({
  appState: 0,
  modalShow: false,
  products: [
    { id: 0, name: "Tower", positon: "Ground", animal: "Cat", price: 98 },
    { id: 1, name: "house1", positon: "Tree", animal: "Squirel", price: 100 },
    { id: 2, name: "house2", positon: "Ground", animal: "Deer", price: 660 },
    { id: 3, name: "house3", positon: "Ground", animal: "Wolf", price: 300 },
    { id: 4, name: "BirdVilla", positon: "Tree", animal: "Bird", price: 240 },
    { id: 5, name: "WolfHouse", positon: "Ground", animal: "Wolf", price: 480 },
    {
      id: 6,
      name: "BearCave",
      positon: "UnderGround",
      animal: "Bear",
      price: 890,
    },
    { id: 7, name: "BirdStandard", positon: "Tree", animal: "Bird", price: 50 },
    { id: 8, name: "house2", positon: "Ground", animal: "Deer", price: 660 },
    { id: 9, name: "house3", positon: "Ground", animal: "Wolf", price: 300 },
    { id: 13, name: "BirdVilla", positon: "Tree", animal: "Bird", price: 240 },

  ],
  positons: [
    { id: 0, name: "Tree" },
    { id: 1, name: "Ground" },
    { id: 2, name: "UnderGround" },
  ],
  animals: [
    { id: 0, name: "Deer" },
    { id: 1, name: "Bird" },
    { id: 2, name: "Wolf" },
    { id: 3, name: "Rabbit" },
    { id: 4, name: "Bear" },
    { id: 5, name: "Cat" },
  ],
  displayedProducts: "",
  currency: "pln",
});
