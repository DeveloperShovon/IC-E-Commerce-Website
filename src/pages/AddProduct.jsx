import NavLogo from "../assets/nav/NavLogo-img.png";
import { useState } from "react";
import { useAddProductMutation } from "../features/apiSlice";
import { Link } from "react-router";

export default function AddProduct() {

const [product, setProduct] = useState({
  title: "",        // 'name' এর বদলে 'title' হবে
  price: "",
  image: "",
  oldPrice: "",     // ডাটাবেজে এই কলামটি আছে
  quantity: 0       // ডাটাবেজে default 1 আছে, তাও দিতে পারেন
});

  // RTK Query mutation hook
  const [addProduct] = useAddProductMutation();

  // Handle input change
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.name==="price" ? Number(e.target.value) : e.target.value
    })
  }

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    addProduct(product)
    

    setProduct({
      
      title: "",
      price: "",
      image: "",
      oldPrice: ""
    })

   
  }


  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 hidden md:block bg-white border-gray-800 p-8">
        <Link to="/home" className="flex items-center space-x-2">
        <div className="text-md font-bold flex items-center">
          <img src={NavLogo} alt="Foodzy Logo" className="h-10 w-10" />
          <p>Foodzy </p>
        </div>
        </Link>
        <div className="mt-10">
            <h2 className="text-lg font-semibold mb-6">Product Information</h2>
        <ul className="space-y-4 text-sm">
          <li className="text-blue-600 font-medium">Product Details</li>
        </ul>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 p-6 md:p-10">
        {/* Header */}
        <div className="flex justify-between mb-6">
          <h1 className="text-xl font-semibold">Add Product</h1>
          <span className="text-sm text-gray-500">Do you need help?</span>
        </div>

        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 max-w-3xl mx-auto">
          <h2 className="text-lg font-semibold mb-6">Product Information</h2>

          {/* Image URL Inputs */}
          <form onSubmit={handleSubmit} className="space-y-6"> 
            
          <div className="mb-6">
            <label className="text-sm text-gray-600 mb-2 block">
              Image URLs
            </label>

            <div className="space-y-3">
              
                <input
                  name="image"
                  type="text"
                  placeholder="Enter image URL"
                  value={product.image}
                  onChange= {handleChange}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
             
            </div>
           
          </div>

          {/* Name */}
          {/* <div className="mb-6">
            <label className="text-sm text-gray-600 mb-2 block">Name</label>
            <input
              type="text"
              placeholder="Product name"
              value={product.name}
              onChange={handleChange}
              name="name"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}

          {/* Description */}
          <div className="mb-6">
            <label className="text-sm text-gray-600 mb-2 block">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Write product description..."
              value={product.title}
              onChange={handleChange}
              name="title"
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div className="mb-6">
            <label className="text-sm text-gray-600 mb-2 block">
              Price ($)
            </label>
            <input
              type="number"
              placeholder="Enter price"
              value={product.price}
              name="price"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
                    <div className="mb-6">
            <label className="text-sm text-gray-600 mb-2 block">
             Old Price ($)
            </label>
            <input
              type="number"
              placeholder="Enter price"
              value={product.oldPrice}
              name="oldPrice"
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Additional Info */}
          <div className="mb-6">
            <button className="text-sm text-blue-600 hover:underline">
              Additional Info ⌄
            </button>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button 
            className="text-sm text-gray-500 hover:underline">
              <Link to="/home">Cancel</Link>
            </button>
             <button 
            className="text-sm text-gray-500 hover:underline">
              <Link to="/products">View Products</Link>
            </button>

            <button onClick={handleSubmit} className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
              Add Product →
            </button>
          </div>  
          </form>


        </div>
      </div>
    </div>
  );
}