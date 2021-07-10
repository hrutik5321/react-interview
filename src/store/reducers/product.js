const product = {
  index: 1,
  category: "Seeds/Seedings",
  image: "Image",
  description: "Chill Sakata 651(1500 seeds)",
  quantity: 26,
};

const ProductReducer = (state = product, action) => {
  switch (action.type) {
    case "SELECTPRODUCT":
      return (state = action.data);
    default:
      return state;
  }
};

export default ProductReducer;
