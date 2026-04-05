import React from "react";
import HeroFeatures from "./HeroFeatures";

export default function HeroSection() {
  return (
    <div className="py-10">
      <div>
        <HeroFeatures />
      </div>

      {/* Services Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2 ">
        <div className="flex gap-3  py-2 border-2 border-gray-100 rounded-lg bg-gray-50 ">
          <div className=" flex py-2 items-center rounded-lg md:pl-3">
            <img
              className="w-8 md:w-10 h-auto "
              src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/Hero%20Section%20Img/icon-1.svg.png"
              alt=""
            />
          </div>

          <div className="text-center">
            <h2 className="text-sm">Best prices & offers</h2>
            <p className="text-sm py-1 text-gray-500">Orders $50 or more</p>
          </div>
        </div>

        <div className="flex gap-3  py-2 border-2 border-gray-100 rounded-lg bg-gray-50 ">
          <div className=" flex py-2 items-center rounded-lg md:pl-3">
            <img
              className="w-8 md:w-10 h-auto "
              src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/Hero%20Section%20Img/icon-2.svg.png"
              alt=""
            />
          </div>

          <div className="text-center">
            <h2 className="text-sm">Free delivery</h2>
            <p className="text-sm py-1 text-gray-500">24/7 amazing services</p>
          </div>
        </div>

        <div className="flex gap-3  py-2 border-2 border-gray-100 rounded-lg bg-gray-50 ">
          <div className=" flex py-2 items-center rounded-lg md:pl-3">
            <img
              className="w-8 md:w-10 h-auto "
              src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/Hero%20Section%20Img/icon-3.svg.png"
              alt=""
            />
          </div>

          <div className="text-center">
            <h2 className="text-sm">Great daily deal</h2>
            <p className="text-sm py-1 text-gray-500">When you sign up</p>
          </div>
        </div>

        <div className="flex gap-3  py-2 border-2 border-gray-100 rounded-lg bg-gray-50 ">
          <div className=" flex py-2 items-center rounded-lg md:pl-3">
            <img
              className="w-8 md:w-10 h-auto "
              src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/Hero%20Section%20Img/icon-4.svg.png"
              alt=""
            />
          </div>

          <div className="text-center">
            <h2 className="text-sm">Wide assortment</h2>
            <p className="text-sm py-1 text-gray-500">Mega Discounts</p>
          </div>
        </div>

        <div className="flex gap-3  py-2 border-2 border-gray-100 rounded-lg bg-gray-50 ">
          <div className=" flex py-2 items-center rounded-lg md:pl-3">
            <img
              className="w-8 md:w-10 h-auto "
              src="https://laibkvorwdxzsasecdbs.supabase.co/storage/v1/object/public/Hero%20Section%20Img/icon-5.svg.png"
              alt=""
            />
          </div>

          <div className="text-center">
            <h2 className="text-sm">Easy returns</h2>
            <p className="text-sm py-1 text-gray-500">Within 30 days</p>
          </div>
        </div>

      </div>
    </div>
  );
}
