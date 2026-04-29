import React, { useEffect, useState } from "react";
import { supabase } from "../../createClint";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SpecialDishes() {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .in("id", [6, 7, 8, 2, 3]);
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  });

  const handleLike = (id) => {
    setLikedProducts((prev) => ({
      ...prev,
      [id]: !prev[id], //as like - {1: true, 2: false} then click on 1 then it will be like {1: false, 2: false}
    }));
  };
  

  return (
    <div>
      <div className="py-10">
        <p className="text-red-500">SPECIAL DISHES</p>
        <h1 className="text-3xl font-bold text-gray-900">
          Standout Dishes <br /> From Our Menu
        </h1>

        <div className="flex gap-4  ">
          <Swiper
          slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                    600:{
                        slidesPerView: 2,
                        spaceBetween: 15,  
                    },
                     1024:{
                        slidesPerView: 3,
                        spaceBetween: 20,  
                    }
                }}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper">
            
            {products.map((product) => (
              <SwiperSlide>

                <div key={product.id} className="flex gap-4 py-5">
              <div className=" shadow-lg shadow-black-500  rounded-xl  relative hover:scale-101  duration-50">
                <div className="py-5">
                  <button
                    onClick={() => handleLike(product.id)}
                    className=" m-0 p-4 bg-red-500 text-white text-xl rounded-br-3xl">
                    {likedProducts[product.id] ?
                      <FaHeart />
                    : <CiHeart />}
                  </button>
                  <div className="flex flex-col items-center gap-4 p-4">
                    <img
                      className="w-50 h-auto  "
                      src={product.image}
                      alt={product.title}
                    />
                    <h2 className="text-lg text-gray-900 font-bold">
                      {product.title}
                    </h2>
                    <p className="text-sm text-gray-700 py-5 px-4">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Fugit, eius.
                    </p>
                  </div>
                </div>
              </div>
            </div>
              </SwiperSlide>
            
          ))}

          </Swiper>

          
        </div>
      </div>
    </div>
  );
}
