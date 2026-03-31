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
export default function ProductSlide() {
    const [product, setProduct] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchProduct = async () => {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .limit(6);
            if (error) {
                console.error("Error fetching products:", error);
            } else {
                setProduct(data);
            }
        };

        fetchProduct();
    }, []);
    
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                    600:{
                        slidesPerView: 3,
                        spaceBetween: 15,  
                    },
                     1024:{
                        slidesPerView: 4,
                        spaceBetween: 20,  
                    }
                }}
                navigation={true}
                pagination={{ type: 'fraction' }}
                 
                modules={[Pagination, Navigation]}
                className="mySwiper">
                {product.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className="relative bg-white rounded-xl p-4 shadow-lg hover:shadow-lg transition duration-300">
                        <div className="flex justify-center mb-4">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-32 object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h4 className="text-sm font-semibold mb-2">{item.title}</h4>

                        {/* Rating */}
                        <p className="text-yellow-400 text-sm mb-2">
                            ★★★★☆ <span className="text-gray-500">(4.0)</span>
                        </p>

                        {/* Price */}
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <span className="  text-green-600 font-bold">
                                    {item.price}$
                                </span>
                                <span className=" text-gray-400 line-through ml-2 text-sm">
                                    {item.oldPrice}
                                </span>
                            </div>
                        </div>

                        {/* Add Button */}

                        <button
                            onClick={() => dispatch(addToCart(item))}
                            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm transition">
                            Add
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
