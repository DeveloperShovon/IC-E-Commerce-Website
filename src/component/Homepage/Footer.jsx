import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialDribbble } from "react-icons/sl";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Foodzy</h2>
          <p className="text-sm mb-4">
            FoodTrove is the biggest market of grocery products. Get your daily
            needs from our store.
          </p>
          <div className="space-y-2 text-sm ">
            <div className="flex gap-2 items-center "> <span className="text-lg text-red-600 "><CiLocationOn /></span> <p> 51 Green St, Huntington, NY</p> </div>
            <div className="flex gap-2 items-center "><span className="text-lg text-red-600 "><IoMailOpenOutline /></span>{" "}<p> example@email.com</p> </div>
            <div className="flex gap-2 items-center "><span className="text-lg text-red-600 "><IoCallOutline /></span>{" "}<p>+8801885944096 </p> </div>

           
            
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">
              Delivery Information
            </li>
            <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            <li className="hover:text-black cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-black cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Category */}
        <div>
          <h3 className="font-semibold mb-3">Category</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black cursor-pointer">Dairy & Bakery</li>
            <li className="hover:text-black cursor-pointer">
              Fruits & Vegetables
            </li>
            <li className="hover:text-black cursor-pointer">Snack & Spice</li>
            <li className="hover:text-black cursor-pointer">Juice & Drinks</li>
            <li className="hover:text-black cursor-pointer">Chicken & Meat</li>
            <li className="hover:text-black cursor-pointer">Fast Food</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Subscribe Our Newsletter</h3>
          <div className="flex items-center border rounded overflow-hidden">
            <input
              type="email"
              placeholder="Search here..."
              className="w-full px-3 py-2 outline-none text-sm"
            />
            <button className="bg-green-500 text-white px-4 py-2">➤</button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 mt-4 text-lg">
            <span className="cursor-pointer p-2 bg-white text-center   shadow">
              <SlSocialLinkedin />
            </span>
            <span className="cursor-pointer p-2 bg-white text-center  shadow ">
              <SlSocialFacebook />
            </span>
            <span className="cursor-pointer p-2 bg-white text-center   shadow">
              <SlSocialTwitter />
            </span>
            <span className="cursor-pointer p-2 bg-white text-center   shadow">
              <SlSocialDribbble />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className=" border-t border-gray-300 text-center text-sm py-4">
        © 2025 <span className="text-green-500 font-medium">foodzy</span>, All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
