import { useState } from "react";
import { Outlet } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return(
    <div>
      <nav className="bg-white  shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-xl font-bold">LOGO</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
            <li className="hover:text-black cursor-pointer">Home</li>

            <li className="relative group cursor-pointer">
              <span>Category ▾</span>
              <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
                <li className="px-4 py-2 hover:bg-gray-100">Category 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Category 2</li>
              </ul>
            </li>

            <li className="relative group cursor-pointer">
              <span>Products ▾</span>
              <ul className="absolute hidden group-hover:block bg-white shadow-md mt-2 py-2 w-40">
                <li className="px-4 py-2 hover:bg-gray-100">Product 1</li>
                <li className="px-4 py-2 hover:bg-gray-100">Product 2</li>
              </ul>
            </li>

            <li className="hover:text-black cursor-pointer">Pages ▾</li>
            <li className="hover:text-black cursor-pointer">Blog ▾</li>
            <li className="hover:text-black cursor-pointer">Elements ▾</li>
          </ul>

          {/* Phone Number */}
          <div className="hidden md:flex items-center gap-2 text-gray-700 font-semibold">
            📞 +123 (456) 7890
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="text-2xl"
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-gray-700 font-medium">
          <div>Home</div>
          <div>Category</div>
          <div>Products</div>
          <div>Pages</div>
          <div>Blog</div>
          <div>Elements</div>
          <div className="pt-2 border-t font-semibold">
            📞 +123 (456) 7890
          </div>
        </div>
      )}
      
    </nav>
    <Outlet />
    </div>
  )
  
}
