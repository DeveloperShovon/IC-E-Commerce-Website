import React, { useEffect, useState } from "react";
import { supabase } from "../../createClint";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import BestSellButton from "../../Kit/BestSellButton"
import { toast } from "react-toastify";
import Loader from "../../Kit/Loading";


export default function ProductSlide() {
    const [product, setProduct] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProduct = async () => {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .limit(6);
            if (error && !data) {
                <Loader />;
                toast.error("Failed to fetch products");
            } else if (data.length !== 0) {
                setProduct(data);
            } 
            

        };

        fetchProduct();
        
    }, []);

    return (
        <>
<Swiper

  slidesPerView={2}
  spaceBetween={12}
  breakpoints={{
    600: { slidesPerView: 3, spaceBetween: 16 },
    1024: { slidesPerView: 4, spaceBetween: 20 }
  }}
  navigation={true}
  modules={[Pagination, Navigation]}
  className="mySwiper "
>
  {product.map((item) => (
    <SwiperSlide
    className="py-5 "
    key={item.id}>
      
      <div className="h-full flex flex-col justify-between bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300 group">
        
        {/* Image */}
        <div className="flex justify-center mb-4">
          <img
            src={item.image}
            alt={item.title}
            className="h-32 w-full object-contain group-hover:scale-105 transition"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col">
          
          {/* Title */}
          <h4 className="text-sm font-semibold mb-2 line-clamp-2 min-h-[40px]">
            {item.title}
          </h4>

          {/* Rating */}
          <p className="text-yellow-400 text-sm mb-2">
            ★★★★☆ <span className="text-gray-500">(4.0)</span>
          </p>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-green-600 font-bold">
                {item.price}$
              </span>
              <span className="text-gray-400 line-through ml-2 text-sm">
                {item.oldPrice}
              </span>
            </div>
          </div>

        </div>

        {/* Button (always bottom) */}
        <BestSellButton 
          onClick={() => {
            dispatch(addToCart(item));
            toast.success("Item added to cart 🛒");
          }}
        />

      </div>

    </SwiperSlide>
  ))}
</Swiper>
        </>
    );
}
