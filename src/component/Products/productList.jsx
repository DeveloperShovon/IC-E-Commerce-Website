import { useDispatch } from "react-redux"
import { addToCart } from "../../features/cartSlice"
import { useEffect, useState } from "react";
import { supabase } from "../../createClint";
import loadingSpin from "../Loading/loadingSpin";



export default function ProductList() {

   const dispatch = useDispatch()
   const [products, setProducts] = useState([]);

     const [loading, setLoading] = useState(true);
     
     async function fetchPost() {
       setLoading(true);
       const { data, error } = await supabase.from("products").select("*");
       if (error) {
         console.error("Error fetching products:", error);
       } 
       else {
         setProducts(data);
         setLoading(false);
       }
       
     }
   
     useEffect(() => {
       fetchPost();
     }, []);
     console.log(loading);

  return (
    
    <div className="max-w-7xl mx-auto px-4 py-10">
      <loadingSpin loading={loading}/>
      
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-xl p-4 shadow-lg hover:shadow-lg transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-32 object-contain"
              />
            </div>

            {/* Title */}
            <h4 className="text-sm font-semibold mb-2">
              {product.title}
            </h4>

            {/* Rating */}
            <p className="text-yellow-400 text-sm mb-2">
              ★★★★☆ <span className="text-gray-500">(4.0)</span>
            </p>

            {/* Price */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-green-600 font-bold">
                  {product.price}$
                </span>
                <span className="text-gray-400 line-through ml-2 text-sm">
                  {product.oldPrice}
                </span>
              </div>
            </div>

            {/* Add Button */}
            
            <button onClick={()=> dispatch(addToCart(product))} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm transition">
              Add
            </button>
            
           
          </div>
        ))}

      </div>
    </div>
  )
}