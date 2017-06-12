export default (state = false, action) => {
  switch (action.type) {
    case "UPDATE_ACTIVE":
      return action.data;
    default:
      return state;
  }
};
