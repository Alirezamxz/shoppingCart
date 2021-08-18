export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      const item = action.payload;
      const existing = state.cartItems.find((i) => i.id === item.id);
      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.id === existing.id ? item : i
          ),
        };
      } else {
        return { ...state, cartItems: [...state.cartItems, item] };
      }
    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
