import React, { useEffect, useState } from "react";
import { supabase } from "../../createClint";
import { CiHeart } from "react-icons/ci";


export default function SpecialDishes() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .in("id", [6,7,8,]);
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  });
  

  return (
    <div>
      <div className="py-10">
        <p className="text-red-500">SPECHIAL DISHES</p>
        <h1 className="text-3xl font-bold text-gray-900">
          Standout Dishes <br /> From Our Menu
        </h1>

        <div className="flex gap-4 py-4 ">
            {products.map((product) => (
              <div key={product.id} className="flex gap-4 py-4">
                <div className=" shadow-2xl shadow-red-100 rounded-lg  relative">
                    <button className=" m-0 p-4 bg-red-500 text-white text-xl rounded-br-3xl">< CiHeart  /></button>
                    <img className src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, eius.</p>
                </div>
                </div>
            ))}

        </div>
      </div>
    </div>
  );
}
