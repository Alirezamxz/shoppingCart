import axios from "axios";

export const addToCart = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://my-json-server.typicode.com/alirezamxz/shoppingCart/products/${id}`
  );

  dispatch({
    type: "CART_ADD_ITEM",
    payload: {
      id: data.id,
      title: data.title,
      image: data.image,
      price: data.price,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: "CART_REMOVE_ITEM",
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
