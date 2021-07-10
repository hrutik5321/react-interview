const tableContent = [
  {
    index: 1,
    category: "Seeds/Seedings",
    image:
      "https://5.imimg.com/data5/ME/DW/MY-2994153/coriander-seed-500x500.jpg",
    description: "Chin Sakata 651(1500 seeds)",
    quantity: 26,
  },
  {
    index: 2,
    category: "Nutrients/Fertilizer",
    image: "https://4.imimg.com/data4/IL/MM/MY-310912/big-sanuf-250x250.jpg",
    description: "Acme Brand Fert A/B set - 50kg",
    quantity: 114,
  },
  {
    index: 3,
    category: "Pesticide/Fungiddle",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61VVveZptYL._AC_SX522_.jpg",
    description: "Valtants ME (Methyl Engenol) 30ml",
    quantity: 40,
  },
  {
    index: 4,
    category: "Growing Medium",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51JPmjuf2RL._AC_.jpg",
    description: "Acme Brand Cocopeat - 30kg",
    quantity: 20,
  },
  {
    index: 5,
    category: "Growing Medium",
    image:
      "https://5.imimg.com/data5/ME/DW/MY-2994153/coriander-seed-500x500.jpg",
    description: "Acme Brand Cocohusk - 50kg",
    quantity: 50,
  },
  {
    index: 6,
    category: "Pesticide/Fungiddle",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51JPmjuf2RL._AC_.jpg",
    description: "Deels (Delthametrin) 1L",
    quantity: 4,
  },
];

const productTableReducer = (state = tableContent, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default productTableReducer;
