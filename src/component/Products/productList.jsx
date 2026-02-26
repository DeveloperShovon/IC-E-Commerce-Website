
import Cart from "../../pages/Cart"
export default function ProductList({ products }) {
  <Cart products={products}/>
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      
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
            
            <button onClick={(e)=> {}} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm transition">
              Add
            </button>
            
           
          </div>
        ))}

      </div>
      
    </div>
    
  )
}
