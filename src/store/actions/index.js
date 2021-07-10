export const toggleTable = () => {
  return {
    type: "SHOW_TABLE",
  };
};

export const selectProduct = (data) => {
  return {
    type: "SELECTPRODUCT",
    data: data,
  };
};
