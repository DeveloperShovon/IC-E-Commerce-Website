import { useState } from "react";
import navimg from "../assets/nav/NavLogo-img.png";

export default function AddProduct() {
  const [imageUrls, setImageUrls] = useState([""]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
  });

  // Handle image URL change
  const handleImageChange = (index, value) => {
    const updated = [...imageUrls];
    updated[index] = value;
    setImageUrls(updated);
  };

  // Add new image field
  const addImageField = () => {
    setImageUrls([...imageUrls, ""]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 hidden md:block bg-white border-gray-800 p-8">
        <div className="text-md font-bold flex items-center">
          <img src={navimg} alt="Foodzy Logo" className="h-10 w-10" />
          <p>Foodzy </p>
        </div>
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
          <div className="mb-6">
            <label className="text-sm text-gray-600 mb-2 block">
              Image URLs
            </label>

            <div className="space-y-3">
              {imageUrls.map((url, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder="Enter image URL"
                  value={url}
                  onChange={(e) => handleImageChange(index, e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ))}
            </div>

            <button
              onClick={addImageField}
              className="mt-3 text-sm text-blue-600 hover:underline">
              + Add another image
            </button>
          </div>

          {/* Name */}
          <div className="mb-6">
            <label className="text-sm text-gray-600 mb-2 block">Name</label>
            <input
              type="text"
              placeholder="Product name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="mb-6">
            <label className="text-sm text-gray-600 mb-2 block">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Write product description..."
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
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
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
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
            <button className="text-sm text-gray-500 hover:underline">
              Cancel
            </button>

            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
              Continue →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
