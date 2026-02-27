import { useDispatch } from "react-redux";
import { modifyQuantity, removeItemfromCart } from "../../features/cartSlice";

const CartItem = ({product}) => {
  console.log(product);
  const dispatch = useDispatch();
  return (
  <tr>
    <td className="py-6 px-2 font-bold"><img className="" src={product.image} alt="" /></td>
    <td className="py-6 px-2">${product.title }</td>
    <td className="py-6 px-2">${product.price }</td>
    <td className="py-6 px-2">
      <div className="flex items-center justify-center border rounded-md w-max mx-auto overflow-hidden">
        
        <button
          onClick={() =>
            dispatch(modifyQuantity(product.id))
          }
          className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-lg border-r"
        >
          -
        </button>

        <span className="px-4 py-1">{product.quantity}</span>

        <button
          onClick={() =>
            dispatch(modifyQuantity(product.id ))
          }
          className="px-3 py-1 bg-blue-100 hover:bg-blue-200 text-lg border-l"
        >
          +
        </button>

      </div>
    </td>

    <td className="py-6 px-2">
      ${product.price * product.quantity}
    </td>

    <td className="py-6 px-2 text-red-500 cursor-pointer">
      <button
        onClick={() =>
          dispatch(removeItemfromCart(product.id))
        }
      >
        X
      </button>
    </td>
  </tr>
);
};

export default CartItem;
