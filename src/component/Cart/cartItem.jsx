import { useDispatch } from "react-redux";
import { modifyQuantity, removeItemfromCart } from "../../features/cartSlice";
import { useState } from "react";

const CartItem = ({ product }) => {
  
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(product.quantity);
  
   
  
  console.log(quantity);
  return (
    <>
      <tr>
        {/* Product Img */}
      <td className="py-2 px-2 font-bold">
        <img className="img-fluid h-12 md:h-16 lg:h-24 object-cover" src={product.image} alt="" />
      </td>
      <td className="py-2 px-2 text-sm md:text-base lg:text-lg">${product.title}</td>
      <td className="py-2 px-2 text-sm md:text-base lg:text-l">${product.price}</td>
      <td className="py-2 px-2 text-sm md:text-base lg:text-lg">
        <div className="flex items-center justify-center  rounded-md w-max mx-auto overflow-hidden">
          <input
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 m-4 py-1 bg-blue-100 hover:bg-blue-200 text-lg "
            type="button"
            value="+"
          />
          <input
            onChange={(e) => {
              const tCount = e.target.value;
              
              setQuantity(tCount);
              dispatch(modifyQuantity({ id: product.id, quantity:quantity}));
            }}
            className="w-10 px-2 py-1"
            type="text"
            name="quantity"
            id=""
            value={quantity}
          />
          <input
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="px-3 m-4 py-1 bg-blue-100 hover:bg-blue-200 text-lg "
            type="button"
            value="-"
          />
        </div>
      </td>
      <td className="py-2 px-2">${(product.price * quantity).toFixed(2)}</td>
      <td className="py-2 px-2 text-red-500 cursor-pointer">
        <button
          className="px-6 py-1 cursor-pointer hover:bg-red-100 rounded-md"
          onClick={() => dispatch(removeItemfromCart(product.id))}>
          X
        </button>
      </td>
     
    </tr>

     
    </>
     
  );
};

export default CartItem;
