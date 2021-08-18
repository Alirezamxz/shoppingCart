import axios from "axios";

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_LIST_REQUEST" });
    const { data } = await axios.get(
      "https://my-json-server.typicode.com/alirezamxz/shoppingCart/products"
    );
    dispatch({ type: "PRODUCT_LIST_SUCCESS", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const productDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: "PRODUCT_DETAIL_REQUEST" });
    const { data } = await axios.get(
      `https://my-json-server.typicode.com/alirezamxz/shoppingCart/products/${id}`
    );
    dispatch({ type: "PRODUCT_DETAIL_SUCCESS", payload: data });
  } catch (error) {
    console.error(error);
  }
};
