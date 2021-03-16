export const RESPONSE_TYPES = {
  blank: -1,
  correct: 0,
  tooHigh: 1,
  tooLow: 2,
  incorrectItems: 3,
};

export const CORRECT_ANSWERS = {
  pho: [
    "Beef",
    "Cinnamon",
    "Peppercorn",
    "Coriander Seeds",
    "Noodles",
    "Onions",
    "Garlic",
    "Star Anise",
    "Fennel Seeds",
    "Bean Sprouts",
  ],
  bbh: [
    "Beef",
    "Fish Sauce",
    "Ginger",
    "Noodles",
    "Onions",
    "Garlic",
    "Pork",
    "Shrimp Sauce",
    "Bean Sprouts",
    "Pineapple",
    "Lemongrass",
  ],
  banhxeo: [
    "Bean Sprouts",
    "Coconut Milk",
    "Flour",
    "Lettuce",
    "Shrimp",
    "Pork",
    "Rice Flour",
  ],
  banhmi: ["Bread", "Carrots", "Mayonnaise", "Pate", "Pork"],
  banhbeo: ["Carrots", "Corn Starch", "Rice Flour", "Shrimp", "Tapioca Starch"],
};

export const fullInventory = [
  { name: "Beef", image: "/items/beef.png" },
  { name: "Pork", image: "/items/pork.png" },
  { name: "Shrimp", image: "/items/shrimp.png" },
  { name: "Pate", image: "/items/pate.png" },
  { name: "Lemongrass", image: "/items/lemongrass.png" },
  { name: "Carrots", image: "/items/carrot.svg" },
  { name: "Pineapple", image: "/items/pineapple.svg" },
  { name: "Lettuce", image: "/items/lettuce.svg" },
  { name: "Bean Sprouts", image: "/items/beansprouts.jpg" },
  { name: "Onions", image: "/items/onion.svg" },
  { name: "Garlic", image: "/items/garlic.png" },
  { name: "Coriander Seeds", image: "/items/coriander.png" },
  { name: "Star Anise", image: "/items/anise.png" },
  { name: "Fennel Seeds", image: "/items/fennel.png" },
  { name: "Cinnamon", image: "/items/cinnamon.png" },
  { name: "Peppercorn", image: "/items/peppercorn.png" },
  { name: "Shrimp Sauce", image: "/items/shrimpsauce.png" },
  { name: "Fish Sauce", image: "/items/fishsauce.png" },
  { name: "Ginger", image: "/items/ginger.png" },
  { name: "Coconut Milk", image: "/items/coconutmilk.png" },
  { name: "Corn Starch", image: "/items/cornstarch.png" },
  { name: "Tapioca Starch", image: "/items/tapiocastarch.jpg" },
  { name: "Mayonnaise", image: "/items/mayonnaise.png" },
  { name: "Noodles", image: "/items/noodles.png" },
  { name: "Rice Flour", image: "/items/riceflour.jpg" },
  { name: "Bread", image: "/items/bread.png" },
  { name: "Flour", image: "/items/flour.jpg" },
];
