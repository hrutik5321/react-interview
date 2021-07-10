const showTableReducer = (state = true, action) => {
  switch (action.type) {
    case "SHOW_TABLE":
      return !state;
    default:
      return state;
  }
};

export default showTableReducer;
