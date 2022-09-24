import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/basic/button/Button";
import { addToCart, removeFromCart } from "../../redux/slices/cartSlice";
import { Center } from "../../styles/style";

export default function GraphQl() {
  const cartList = useSelector((state) => state.cart.cartList);
  const dispatch = useDispatch();
  console.log("sasas", cartList.length);
  let id = 1;
  return (
    <div>
      <h2 className="mb-6 text-primary-100 text-2xl ">
        total items in cart is == {cartList?.length}
      </h2>
      <div className="flex">
        <div
          onClick={() =>
            dispatch(addToCart({ id: cartList.length + 1 || 1, title: "name" }))
          }
          className="w-40 h-10 border cursor-pointer text-primary-50 border-secondary-200 hover:bg-secondary-300 hover:text-primary-800"
        >
          <Center>Add Item</Center>
        </div>
        <div
          onClick={() => dispatch(removeFromCart({ id: cartList.length - 1 }))}
          className="w-40 h-10 border cursor-pointer text-primary-50 border-secondary-200 hover:bg-secondary-300 hover:text-primary-800"
        >
          <Center>Remove Item</Center>
        </div>
      </div>
    </div>
  );
}
