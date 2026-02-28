import { useDispatch } from "react-redux";
import { modifyQuantity, removeItemfromCart } from "../../features/cartSlice";
import { useState } from "react";

const CartItem = ({ product }) => {
  console.log(product);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);
  return (
    <tr>
      <td className="py-6 px-2 font-bold">
        <img className="" src={product.image} alt="" />
      </td>
      <td className="py-6 px-2">${product.title}</td>
      <td className="py-6 px-2">${product.price}</td>
      <td className="py-6 px-2">
        <div className="flex items-center justify-center  rounded-md w-max mx-auto overflow-hidden">
          <input
            onClick={(e) => setQuantity(quantity + 1)}
            className="px-3 m-4 py-1 bg-blue-100 hover:bg-blue-200 text-lg "
            type="button"
            value="+"
          />
          <input
          // in this input i will try to change the quantity but i am unsuccessfully able to do that
            // onChange={(e) => {
            //   const typeCount = parseInt(e.target.value);
            //   setQuantity(typeCount);
            //   dispatch(modifyQuantity({ id: product.id, quantity: typeCount }));
            // }}
            // className="w-10 px-2 py-1"
            // type="text"
            // name="quantity"
            // id=""
            // value={quantity}
          />
          <input
            onClick={(e) => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="px-3 m-4 py-1 bg-blue-100 hover:bg-blue-200 text-lg "
            type="button"
            value="-"
          />
        </div>
      </td>
      <td className="py-6 px-2">${(product.price * quantity).toFixed(2)}</td>
      <td className="py-6 px-2 text-red-500 cursor-pointer">
        <button
          className="p-4 bg-red-200 hover:bg-red-600 rounded-2xl"
          onClick={(e) => dispatch(removeItemfromCart(product.id))}>
          X
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
