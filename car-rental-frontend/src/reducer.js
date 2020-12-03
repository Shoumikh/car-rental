export const initialState = {
  carList: [],
  user: null,
};

//takes a state and a action (add to datalayer or get from datalayer)
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_USERNULL":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

export default reducer;
