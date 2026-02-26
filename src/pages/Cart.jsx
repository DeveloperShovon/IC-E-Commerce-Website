

const Cart = ({products}) => {
    
  // ডাইনামিক ডাটা সিমুলেশন
 
  console.log(products);

  return (
    <div className="p-8 bg-white font-sans">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-gray-600 border-b">
            <th className="py-4 px-2">Image</th>
            <th className="py-4 px-2">PRODUCT Title</th>
            <th className="py-4 px-2">Price</th>
            <th className="py-4 px-2 text-center">Quantity</th>
            <th className="py-4 px-2">Subtotal</th>
            <th className="py-4 px-2">Action</th>
          </tr>
        </thead>
        <tbody>
            <cartItem/>
        </tbody>
      </table>

      {/* নিচের টোটাল সেকশন */}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold italic">
          You Total Price Will be ${}
        </h2>
      </div>

      <div className="mt-10">
        <button className="text-gray-700 font-medium hover:underline">
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;