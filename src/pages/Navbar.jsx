import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router";
import Navimg from "../assets/nav/NavLogo-img.png"




export default function Navbar() {
  const [open, setOpen] = useState(false);

  return(
    <div>
      <nav className="bg-white  shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16 font-sans">
          
          {/* Logo */}
          <div className="text-md font-bold flex items-center">
            <img src={Navimg} alt="Foodzy Logo" className="h-10 w-10" />
            <p>Foodzy </p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-black font-medium">
            <Link to={"/home"} className="hover:text-red-500 cursor-pointer ">Home</Link>

            <li className="relative group cursor-pointer">
              <Link to={"/Category"} >
              <span className="pb-2 hover:text-red-500">Category ▾</span>
              <ul className="absolute hidden group-hover:block bg-white shadow-md  py-6 w-40">
                
                <li className="px-4 py-2 hover:bg-gray-100" ><Link to={"/category/category1"} > Category 1 </Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link to={"/category/category2"} > Category 2 </Link></li>
              
              </ul>
            </Link>
            </li>

            <li className="relative group cursor-pointer">
              <Link to={"/products"} >
              <span className="hover:text-red-500">Products ▾</span>
              <ul className="absolute hidden group-hover:block bg-white shadow-md  py-6 w-40">
                <li className="px-4 py-2 hover:bg-gray-100"><Link to={"/products/product1"}>Product 1</Link></li>
                <li className="px-4 py-2 hover:bg-gray-100"><Link to={"/products/product2"}>Product 2</Link></li>
              </ul>
              </Link>
            </li>

            <li className="hover:text-red-500  cursor-pointer"><Link to={"/pages"}>Pages</Link> ▾</li>
            <li className="hover:text-red-500 cursor-pointer"><Link to={"/blog"}>Blog</Link></li>
            <li className="hover:text-red-500 cursor-pointer"><Link to={"/products/cart"}>Cart</Link></li>
          </ul>

          {/* Phone Number */}
          <div className="hidden md:flex items-center gap-2 text-black font-semibold">
           <div className="p-2 flex items-center gap-1">
            <img src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/logo/shipping.png" alt="" />
            <Link to={"products/cart"} className="hover:text-black cursor-pointer">
            <p>Cart</p>
            </Link>
            </div>
           <div className="p-2 flex items-center gap-1">
            <img src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/logo/love.png" alt="" />
            <Link to={"/wishlist"} className="hover:text-black cursor-pointer">
            <p>Wishlist</p>
            </Link>
             </div>
           <div className="p-2 flex items-center gap-1 ">
            <img src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/logo/user.png" alt="" />
            <Link to={"/register"} className="hover:text-black cursor-pointer">
            <p>Register</p>
            </Link>
             </div>
            <div>📞 +123 (456) 7890</div>
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
          <div><Link to={"/home"}>Home</Link></div>
          <div><Link to={"/category"}>Category</Link></div>
          <div><Link to={"/products"}>Products</Link></div>
          <div><Link to={"/pages"}>Pages</Link></div>
          <div><Link to={"/blog"}>Blog</Link></div>
          <div><Link to={"/elements"}>Elements</Link></div>
          <div><Link to={"/register"}>Register</Link></div>
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
