import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router";
import Navimg from "../assets/nav/NavLogo-img.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
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
              <li>
                <Link
                  to="/home"
                  className=" relative text-black  font-medium cursor-pointer transition-colors duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]   after:content-['']  after:absolute after:bottom-[-2px]  after:left-1/2  after:w-0  after:h-[2px]  after:bg-red-500  after:transition-all  after:duration-[400ms]  after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className=" relative text-black  font-medium cursor-pointer transition-colors duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]   after:content-['']  after:absolute after:bottom-[-2px]  after:left-1/2  after:w-0  after:h-[2px]  after:bg-red-500  after:transition-all  after:duration-[400ms]  after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0">
                  Products
                </Link>
              </li>

              <li className="hover:text-red-500 cursor-pointer">
                <Link
                  to={"/products/cart"}
                  className=" relative text-black  font-medium cursor-pointer transition-colors duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]   after:content-['']  after:absolute after:bottom-[-2px]  after:left-1/2  after:w-0  after:h-[2px]  after:bg-red-500  after:transition-all  after:duration-[400ms]  after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0">
                  Cart
                </Link>
              </li>
              <li className="hover:text-red-500 cursor-pointer">
                <Link
                  to={"/add-product"}
                  className=" relative text-black  font-medium cursor-pointer transition-colors duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]   after:content-['']  after:absolute after:bottom-[-2px]  after:left-1/2  after:w-0  after:h-[2px]  after:bg-red-500  after:transition-all  after:duration-[400ms]  after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0">
                  Add Product
                </Link>
              </li>
            </ul>

            {/* Phone Number */}
            <div className="hidden md:flex items-center gap-2 text-black font-semibold">
              <div className="p-2 flex items-center gap-1">
                <Link
                  to={"products/cart"}
                  className=" flex gap-2 relative text-black  font-medium cursor-pointer transition-colors duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]   after:content-['']  after:absolute after:bottom-[-2px]  after:left-1/2  after:w-0  after:h-[3px]  after:bg-red-500  after:transition-all  after:duration-[400ms]  after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0"
                  >
                  <img className="pb-1"
                    src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/logo/shipping.png"
                    alt=""
                  />
                  <p className="pb-">Cart</p>
                </Link>
              </div>
              <div className="p-2 flex items-center gap-1">
                <img
                  src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/logo/love.png"
                  alt=""
                />
                <Link
                className=" relative text-black  font-medium cursor-pointer transition-colors duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]   after:content-['']  after:absolute after:bottom-[-2px]  after:left-1/2  after:w-0  after:h-[3px]  after:bg-red-500  after:transition-all  after:duration-[400ms]  after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0"
                  to={"/wishlist"}
                  >
                  <p>Wishlist</p>
                </Link>
              </div>
              <div className="p-2 flex items-center gap-1 ">
                <img
                  src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/allProducts/logo/user.png"
                  alt=""
                />
                <Link
                
                  to={"/register"}
                  
                  className=" relative text-black  font-medium cursor-pointer transition-colors duration-[400ms] ease-[cubic-bezier(0.25,0.8,0.25,1)]   after:content-['']  after:absolute after:bottom-[-2px]  after:left-1/2  after:w-0  after:h-[3px]  after:bg-red-500  after:transition-all  after:duration-[400ms]  after:ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:after:w-full hover:after:left-0">
                  <p>Register</p>
                </Link>
              </div>
              <div>📞 +123 (456) 7890</div>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)} className="text-2xl">
                {open ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-4 pb-4 space-y-3 text-gray-700 font-medium z-50  ">
            <div>
              <Link to={"/home"}>Home</Link>
            </div>
            <div>
              <Link to={"/category"}>Category</Link>
            </div>
            <div>
              <Link to={"/products"}>Products</Link>
            </div>
            <div>
              <Link to={"/add-product"}>Add Product</Link>
            </div>
            <div>
              <Link to={"/register"}>Register</Link>
            </div>
            <div className="pt-2 border-t font-semibold">
              📞 +123 (456) 7890
            </div>
          </div>
        )}
      </nav>
      <Outlet />
    </div>
  );
}
