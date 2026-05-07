import React, { useEffect } from "react";
import { supabase } from "../../createClint";
import { addToCart } from "../../features/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";


export default function DealOfTheDay() {
  const [deals, setDeals] = React.useState([]);
  useEffect(() => {
    const fetchDeals = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .in("id", [9, 10, 11, 12]);
      if (error) {
        console.error("Error fetching deals:", error);
      } else {
        setDeals(data);
      }
    };
    fetchDeals();
  }, []);
  const dispatch = useDispatch()
  

  console.log(deals);
  return (
    <div>
      <div>
        <h1 className="py-4 font-bold text-2xl text-gray-800">Deals Of The Day</h1>
        <div  >
          <div className="grid grid-cols-1 my-6 md:grid-cols-2 lg:grid-cols-4 gap-20 ">
            {deals.map((deal) => (
              <div key={deal.id} className=" group  relative w-[300px] mx-auto hover:shadow-2xl">
                {/* Image */}
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="rounded-xl w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-102"
                />

                {/* Overlay Card */}
                <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-[90%] bg-white p-4 rounded-xl shadow-xl bg-linear-to-r from-lime-50 to-slate-50">
                  <h2 className="text-gray-800 font-semibold text-sm md:text-base">
                    {deal.title}
                  </h2>

                  <p className="text-yellow-400 text-sm">
                    ★★★★☆ <span className="text-gray-500">(4.0)</span>
                  </p>

                  <p className="text-xs text-gray-400 mb-2">
                    By <span className="text-green-600">NestFood</span>
                  </p>

                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <p className="text-emerald-600 font-bold">
                        ${deal.price}
                      </p>
                      <p className="text-gray-400 line-through">
                        ${deal.oldPrice}
                      </p>
                    </div>

                    <button
                    onClick={() => {
                      dispatch(addToCart(deal));
                      toast.success("Item added to cart 🛒");  
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg text-sm cursor-pointer transition duration-300">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
