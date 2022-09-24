import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      return { ...state, cartList: [...state.cartList, actions.payload] };
    },
    removeFromCart: (state, actions) => {
      // state.cartList=cartList?.filter((it) => !it.id === id)

      return {
        ...state,
        cartList: state.cartList?.filter((it) => it.id !== actions.payload.id),
      };
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;

// basic
// toolkit reduce the task of action creators (action creator return an object with type:"",payload:{}||''||[] )
// toolkit > reducers ===action creators function(data) and return action modifying object to {type:slice_name/method, payload:data}
