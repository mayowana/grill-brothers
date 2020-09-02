const INITIAL_STATE = {
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, payload.meals],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: payload,
      };
  }
  return state;
};

export default cartReducer;
