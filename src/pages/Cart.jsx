import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cartSlice";
import CartItem from "../component/Cart/CartItem";



const Cart = () => {
  const product = useSelector((state)=>state.cart)  ;
  const dispatch = useDispatch();
 
  
  
  return (
    <div className="p-8 bg-white font-sans">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-4 px-2 text-center text-sm md:text-base lg:text-lg">Image</th>
            <th className="py-4 px-2 text-center text-sm md:text-base lg:text-lg">Product Title</th>
            <th className="py-4 px-2 text-center text-sm md:text-base lg:text-lg">Price</th>
            <th className="py-4 px-2 text-center text-sm md:text-base lg:text-lg">Quantity</th>
            <th className="py-4 px-2 text-center text-sm md:text-base lg:text-lg">Subtotal</th>
            <th className="py-4 px-2 text-center text-sm md:text-base lg:text-lg">Action</th>
          </tr>
        </thead>
        <tbody>
           {product.map((product) => (
            <CartItem product={product} key={product.id}/>
           ))}
        </tbody>
      </table>
          

      <div className="mt-10">
        <button onClick={()=>dispatch(clearCart()) } className="text-gray-700 font-medium hover:underline">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;